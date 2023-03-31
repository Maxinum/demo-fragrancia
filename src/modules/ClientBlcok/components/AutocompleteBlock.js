import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import setZeroes from "../helpers/setZeros";
import { clearFarmerRows } from "../../../helpers/clearRows";

const AutocompleteBlock = observer((props) => {
  const { client, orders, products } = useContext(Context);
  const regex = /\d{11,13}/g;
  let data;
  if (props.label === "Клиент") {
    data = props.data.map(
      (x) =>
        setZeroes(x.id) +
        " " +
        x.name +
        " " +
        x.city.city +
        " " +
        x.clients_phone.phone +
        " " +
        (x.clients_phone.phone2 ? x.clients_phone.phone2 + " " : "") +
        (x.clients_phone.phone3 ? x.clients_phone.phone3 : "")
    );
  } else {
    data = props.data.map((x) => x.city);
  }
  const [href, sethref] = useState("");

  useEffect(() => {
    if (client.selectedClient !== "" && client.selectedClient !== null) {
      const id =
        typeof client.selectedClient === "string"
          ? client.selectedClient.split(" ")[0]
          : "";
      const clientData = props.data.find((x) => x?.id === Number(id));

      const selectedCategory = client.categories.find(
        (item) => item?.id === clientData.sales_type.id
      );
      client.setSelectedCategory(selectedCategory);

      const selectedDelivery = client.delivery.find(
        (item) => item?.id === clientData.expeditor.id
      );
      if (selectedDelivery !== undefined) {
        client.setSelectedDelivery(selectedDelivery.id);
      }

      orders.setSaleType(selectedCategory.id === 2 ? "Bonus" : "Discount");
      orders.setSpentBonus(clientData.bonus);
      orders.setInitialDebt(clientData.debt);
    }
  }, [client.selectedClient]);

  useEffect(() => {
    if (href !== "") {
      client.setWpLink(href);
    }
  }, [href]);

  return (
    <Autocomplete
      sx={{ width: "90%" }}
      freeSolo
      size="small"
      options={data}
      autoComplete="off"
      renderInput={(params) => (
        <TextField
          autoComplete="off"
          variant="standard"
          {...params}
          label={props.label}
          inputProps={{
            ...params.inputProps,
            // autoComplete: 'new-password',
          }}
        />
      )}
      name="name"
      type="text"
      // autoSelect={}
      value={client.selectedClient || ""}
      onChange={(event, newValue) => {
        if (newValue !== null) {
          client.setSelectedClient(newValue);
          const phones = newValue.match(regex);
          const firstPhone = phones && phones.length > 0 ? phones[0] : null;
          sethref(`https://wa.me/${firstPhone}`);
        } else {
          clearFarmerRows(client, orders);
        }
      }}
    />
  );
});

export default AutocompleteBlock;

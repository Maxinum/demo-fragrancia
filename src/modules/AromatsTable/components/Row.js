import React, { Navlink, useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import Autocomplete from "@mui/material/Autocomplete";
import round from "../helpers/RoundNumbers";
import styles from "../style.module.css";
import { calcTotal } from "../helpers/Calculation";
import { addDots } from "../../../helpers/Dotter";
import { Context } from "../../../index";
import { onlyDigits } from "../../../helpers/Validation";
import { ChangeCategory } from "../helpers/ChangeSaleType";
import { calcDiscount } from "../helpers/Discount";
import BufferListToday from "../../Buffer/components/BufferList";

const Row = observer((props) => {
  const rows = toJS(props.store.selectedPerf);
  const { client, orders, products } = useContext(Context);
  const [options, setOptions] = useState([]);
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const formattedValue = name === "volume" ? onlyDigits(value) : value;
    rows[index][name] = formattedValue;
    if (name === "price") {
      rows[index][name] = value;
    } else {
      const newPrice = ChangeCategory(
        rows[index]["name"],
        Number(rows[index]["volume"]),
        rows[index]["price"],
        products,
        client.selectedCategory.type
      );
      rows[index]["price"] = newPrice;
    }
    const newRows = [...rows];
    props.store.setSubTotal(calcTotal(index, newRows));
    props.store.setSelectedPerf(newRows);
  };

  const deleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    props.store.setSelectedPerf(newRows);
  };

  const nameChange = (name, index) => {
    if (name === null) {
      deleteRow(index);
      return;
    } else {
      const newRows = [...rows];
      const selectedRow = products.perfumes.filter(
        (item) => item?.name === name
      );
      if (selectedRow.length > 0) {
        newRows[index].id = selectedRow[0].id;
        newRows[index].invTypeId = selectedRow[0].inv_master.invTypeId;
      } else {
        newRows[index].id = "";
        newRows[index].invTypeId = "";
      }
      newRows[index].name = name;
      newRows[index].price = round(
        selectedRow[0]["inv_price_tg"][client.selectedCategory.type]
      );
      props.store.setSelectedPerf(newRows);
      calcDiscount(
        newRows,
        orders.saleType,
        orders.percent,
        orders,
        products.perfumes,
        client.selectedCategory.type
      );
    }
  };

  useEffect(() => {
    if (rows[rows.length - 1].name) {
      props.store.setSelectedPerf([
        ...rows,
        {
          id: "",
          invTypeId: "",
          count: "",
          name: "",
          volume: "",
          price: "",
          total: "",
        },
      ]);
    }
  }, [rows]);

  useEffect(() => {
    // const optionNames = props.data.map((option) => option?.ingredient?.name_product);
    const optionNames = products.perfumes.map((option) => option?.name);
    setOptions([
        {
          id: 1037,
          name: "M-001 Versace Man Eau Fraich (масло)",
          inv_price_tg: {
            price_ml: 106,
            price_250: 90,
            price_500: 80,
            price_1000: 61,
            price_retail: 500,
            price_special: 61,
          },
          inv_master: {
            invTypeId: 0,
          },
        },
        {
          id: 1038,
          name: "M-001-D Versace Man Eau Fraich (масло)",
          inv_price_tg: {
            price_ml: 91,
            price_250: 78,
            price_500: 69,
            price_1000: 47,
            price_retail: 500,
            price_special: 47,
          },
          inv_master: {
            invTypeId: 4,
          },
        },
        {
          id: 1039,
          name: "M-001-T Versace Man Eau Fraich (масло)",
          inv_price_tg: {
            price_ml: 81,
            price_250: 69,
            price_500: 61,
            price_1000: 39,
            price_retail: 300,
            price_special: 38,
          },
          inv_master: {
            invTypeId: 1,
          },
        },
        {
          id: 1040,
          name: "M-001P Versace Man Eau Fraich (парфюм)",
          inv_price_tg: {
            price_ml: 83,
            price_250: 71,
            price_500: 63,
            price_1000: 50,
            price_retail: 250,
            price_special: 32,
          },
          inv_master: {
            invTypeId: 2,
          },
        },
      ]);
  }, [props.data]);
  return (
    <tr key={props.index}>
      <td className="firstNumber">{props.index + 1}</td>
      <td className="kolvo">{props.row.count}</td>
      <td>
        <Autocomplete
          freeSolo
          options={options}
          getOptionLabel={(option) => option?.name || option || ""}
          // getOptionLabel={(option) => option?.ingredient?.name_product || option || ''}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input
                style={{ textAlign: "left", paddingLeft: "10px" }}
                type="text"
                {...params.inputProps}
              />
            </div>
          )}
          name="name"
          type="text"
          autoSelect={false}
          value={props.row.name}
          onChange={(event, newValue) => {
            nameChange(newValue, props.index);
          }}
        />
      </td>
      <td>
        <input
          name="volume"
          maxLength={6}
          type="text"
          autoComplete="off"
          className={styles.volume}
          value={onlyDigits(props.row.volume)}
          onChange={(event) => handleChange(event, props.index)}
        />
      </td>
      <td>
        <input
          name="price"
          type="number"
          className={styles.price}
          tabIndex="0"
          value={props.row.price}
          onChange={(event) => handleChange(event, props.index)}
        />
      </td>
      <td className={styles.total}>{addDots(props.row.total)}</td>
    </tr>
  );
});

export default Row;

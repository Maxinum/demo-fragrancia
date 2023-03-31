import React, { useState, useEffect, useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { ChangePrice } from "../../AromatsTable/helpers/ChangeSaleType";
import { toJS } from "mobx";
import { ChangeConsPrice } from "../../AccessorTable/helpers/ChangeSaleCategory";

const SalesCategory = observer((props) => {
  const categories = props.categories;
  const { client, orders, products } = useContext(Context);
  const rows = toJS(orders.selectedPerf);
  const consRows = toJS(orders.selectedCons);
  const newRows = [...rows];
  // const [selectedCategoryId, setSelectedCategoryId] = useState(client.selectedCategory.id);

  useEffect(() => {
    // setSelectedCategoryId(client.selectedCategory.id);
    ChangePrice(
      newRows,
      products.perfumes,
      orders,
      client.selectedCategory.type
    );
    ChangeConsPrice(
      consRows,
      products.consunables,
      orders,
      client.selectedCategory.id
    );
    if (!orders.keyDown) {
    }
  }, [client.selectedCategory]);

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    const selectedCategory = categories.find(
      (item) => item?.id === selectedCategoryId
    );
    client.setSelectedCategory(selectedCategory);
    ChangePrice(
      newRows,
      products.perfumes,
      orders,
      client.selectedCategory.type
    );
    ChangeConsPrice(
      consRows,
      products.consunables,
      orders,
      client.selectedCategory.id
    );
    console.log(selectedCategory);
    orders.setSaleType(selectedCategory.id === 2 ? "Bonus" : "Discount");
  };

  return (
    <Select
      sx={{ minWidth: "100%" }}
      value={client.selectedCategory.id || ""}
      size="small"
      variant="standard"
      onChange={handleCategoryChange}
    >
      {categories.map((row, index) => (
        <MenuItem key={index} value={row.id}>
          {row.category}
        </MenuItem>
      ))}
    </Select>
  );
});

export default SalesCategory;

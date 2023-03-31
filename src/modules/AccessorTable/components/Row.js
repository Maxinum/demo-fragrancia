import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Autocomplete from "@mui/material/Autocomplete";
import { addDots } from "../../../helpers/Dotter";
import { calcTotal } from "../../AromatsTable/helpers/Calculation";
import round from "../../AromatsTable/helpers/RoundNumbers";
import styles from "../../AromatsTable/style.module.css";
import React, { Navlink, useState, useEffect, useContext } from "react";
import { filter } from "d3";
import { Context } from "../../..";
import { onlyDigits } from "../../../helpers/Validation";

const Row = observer((props) => {
  const rows = toJS(props.store.selectedCons);
  const { client, products } = useContext(Context);
  const [options, setOptions] = useState([]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const formattedValue = name === "volume" ? addDots(value) : value;
    rows[index][name] = value;
    props.store.setSecSubTotal(calcTotal(index, rows));
    props.store.setSelectedCons(rows);
  };

  const deleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    props.store.setSelectedCons(newRows);
  };

  const nameChange = (name, index) => {
    if (name === null) {
      deleteRow(index);
      return;
    } else {
      const newRows = [...rows];
      newRows[index].name = name;
      const selectedRow = props.data.filter(
        (item) => item?.ingredient?.name_product === name
      );
      const price = selectedRow[0]["disposable_price_tg"];
      newRows[index].id = selectedRow[0].id;
      newRows[index].price =
        client.selectedCategory.id === 1 ? price["retail"] : price["price"];
      props.store.setSelectedCons(newRows);
    }
  };
  useEffect(() => {
    if (rows[rows.length - 1].name) {
      props.store.setSelectedCons([
        ...rows,
        { id: "", count: "", name: "", volume: "", price: "", total: "" },
      ]);
    }
  }, [rows]);

  useEffect(() => {
    // const optionNames = props.data.map((option) => option?.ingredient?.name_product);
    const optionNames = products.consunables.map(
      (option) => option?.ingredient?.name_product
    );
    setOptions(optionNames);
  }, [props.data]);
  return (
    <tr key={props.index}>
      <td className="firstNumber">{props.index + 1}</td>
      <td className="kolvo">{props.row.count}</td>
      <td>
        <Autocomplete
          freeSolo
          options={[
            {
              id: 18,
              disposable_price_tg: {
                price: 801,
                retail: 0,
              },
              ingredient: {
                id: 399,
                name_product: "GR-150ML-001 Графин 150 мл стекло",
              },
            },
            {
              id: 19,
              disposable_price_tg: {
                price: 1073,
                retail: 0,
              },
              ingredient: {
                id: 400,
                name_product: "300-150 ml графин стекло",
              },
            },
            {
              id: 20,
              disposable_price_tg: {
                price: 1929,
                retail: 0,
              },
              ingredient: {
                id: 401,
                name_product: "GR-150ML-003 Графин 150 мл стекло золото ",
              },
            },
          ]}
          getOptionLabel={(option) =>
            option?.ingredient?.name_product || option || ""
          }
          // options={props.data.map(option => option?.ingredient?.name_product)}
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
          autoSelect={true}
          value={props.row.name}
          onChange={(event, newValue) => {
            nameChange(newValue, props.index);
          }}
        />
      </td>
      <td>
        <input
          maxLength={8}
          name="volume"
          type="text"
          autoComplete="off"
          className={styles.volume}
          value={addDots(onlyDigits(props.row.volume))}
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

import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// import { addUser } from '../api';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 550,
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  // gap: '1.5rem',
  bgcolor: "background.paper",
  justifyContent: "space-evenly",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const inputStyle = {
  width: "30%",
};

const UnionModal = observer(({ open, onClose }) => {
  const [data, setData] = useState({
    supplier: "",
    name: "",
    name2: "",
    euro: "",
    usd: "",
    total: "",
  });

  const add = () => {};

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          style={{ textAlign: "left", fontSize: "2rem" }}
          variant="h5"
          component="h2"
        >
          Warehouse
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            required
            sx={{ width: "30%" }}
            onChange={handleChange}
            value={data.name}
            name="brand"
            label="Бренд"
            variant="outlined"
          />
          <TextField
            required
            sx={{ width: "65%" }}
            onChange={handleChange}
            value={data.name}
            name="supplier"
            label="Поставщик"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            required
            sx={{ width: "30%" }}
            onChange={handleChange}
            value={data.email}
            name="name"
            label="Article number"
            variant="outlined"
          />
          <TextField
            required
            sx={{ width: "65%" }}
            onChange={handleChange}
            value={data.email}
            name="name"
            label="Наименование"
            variant="outlined"
          />
        </Box>
        <TextField
          onChange={handleChange}
          value={data.pass}
          required
          name="name2"
          label="Наименование от поставщика"
          variant="outlined"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            sx={inputStyle}
            onChange={handleChange}
            value={data.pass2}
            name="euro"
            label="Евро"
            variant="outlined"
          />
          <TextField
            sx={inputStyle}
            onChange={handleChange}
            value={data.pass2}
            name="usd"
            label="Доллар"
            variant="outlined"
          />
          <TextField
            required
            sx={inputStyle}
            onChange={handleChange}
            value={data.pass2}
            name="total"
            label="Тотал"
            variant="outlined"
          />
        </Box>
        <Button
          sx={{
            width: "30%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          onClick={add}
          variant="contained"
        >
          Add
        </Button>
      </Box>
    </Modal>
  );
});

export default UnionModal;

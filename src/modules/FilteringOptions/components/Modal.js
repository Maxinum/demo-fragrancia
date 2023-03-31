import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Context } from "../../../index";
import { addLead } from "../../../APIs/LeadAPI";
import { validation } from "../helpers/validation";

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
  gap: "2rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const inputStyle = {
  width: "45%",
};

const BoxStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const AddModal = ({ open, onClose, cities, channels, managers }) => {
  const { kanban } = useContext(Context);
  const [clicked, setClicked] = useState(false);
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const emptyData = {
    channel: "",
    city: "",
    name: "",
    phone: "",
    phone2: "",
    phone3: "",
    staff: "",
    date: formattedDate,
  };
  const [data, setData] = useState(emptyData);

  const add = () => {
    setClicked(true);
    if (validation(data)) {
      return;
    }
    addLead(data);
    kanban.addHunter(data);
    setData(emptyData);
    setClicked(false);
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleChangeCity = (event, value) => {
    setData({ ...data, city: value });
  };

  const handleChangeDate = (newDate) => {
    setData({ ...data, date: newDate });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h5" component="h2">
          Adding a Lead
        </Typography>
        <Box sx={BoxStyle}>
          <FormControl
            required
            error={clicked && data.channel === ""}
            sx={inputStyle}
          >
            <InputLabel>Channel</InputLabel>
            <Select
              label="Channel"
              name="channel"
              onChange={handleChange}
              value={data.channel}
            >
              {channels.values.map((value, index) => {
                return (
                  <MenuItem key={index} value={value.id}>
                    {value.value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Autocomplete
            freeSolo={true}
            sx={inputStyle}
            options={cities.values}
            onChange={handleChangeCity}
            getOptionLabel={(option) => option.value || ""}
            name="city"
            renderInput={(params) => (
              <TextField
                value={data.city}
                required
                name="city"
                error={clicked && data.city === ""}
                {...params}
                label="City"
              />
            )}
            variant="outlined"
          />
        </Box>
        <Box sx={BoxStyle}>
          <TextField
            required
            error={clicked && data.name === ""}
            sx={inputStyle}
            onChange={handleChange}
            value={data.name}
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            error={clicked && data.phone === ""}
            required
            sx={inputStyle}
            onChange={handleChange}
            value={data.phone}
            name="phone"
            label="Main Phone"
            variant="outlined"
          />
        </Box>
        <Box sx={BoxStyle}>
          <TextField
            sx={inputStyle}
            onChange={handleChange}
            value={data.phone2}
            name="phone2"
            label="Second phone"
            variant="outlined"
          />
          <TextField
            sx={inputStyle}
            onChange={handleChange}
            value={data.phone3}
            name="phone3"
            label="Third phone"
            variant="outlined"
          />
        </Box>
        <Box sx={BoxStyle}>
          <FormControl
            required
            error={clicked && data.staff === ""}
            sx={inputStyle}
          >
            <InputLabel>Manager</InputLabel>
            <Select
              label="Manager"
              name="staff"
              onChange={handleChange}
              value={data.staff}
            >
              {managers.values.map((value, index) => {
                return (
                  <MenuItem key={index} value={value.id}>
                    {value.value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3} sx={inputStyle}>
              <DesktopDatePicker
                label="Date"
                name="date"
                value={data.date}
                onChange={handleChangeDate}
                inputFormat="DD/MM/YYYY"
                renderInput={(params) => (
                  <TextField
                    required
                    error={clicked && data.date === ""}
                    name="date"
                    value={data.date}
                    variant="outlined"
                    {...params}
                  />
                )}
              />
            </Stack>
          </LocalizationProvider>
        </Box>
        <Button
          sx={{ width: "45%", marginLeft: "auto", marginRight: "auto" }}
          onClick={add}
          variant="contained"
        >
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default AddModal;

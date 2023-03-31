import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import { Context } from "../../../../../index";

const Task = ({ id }) => {
  const comm = "";
  const { lead } = React.useContext(Context);
  const logs = lead.logs.filter((log) => log.id === id);
  console.log(logs);
  return (
    <div>
      <div style={{ display: "flex", marginBottom: "1rem", gap: "1rem" }}>
        <Select defaultValue={2} size="small">
          <MenuItem value={1}>Не отвечает</MenuItem>
          <MenuItem value={2}>В работе</MenuItem>
          <MenuItem value={3}>Готово</MenuItem>
        </Select>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div>
            <Stack spacing={3} sx={{ width: "100%" }} size="small">
              <DesktopDatePicker
                label="Date"
                inputFormat="DD/MM/YYYY"
                onChange={(event, newValue) => {}}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </Stack>
          </div>
        </LocalizationProvider>
      </div>
      <TextField
        sx={{ width: "100%" }}
        placeholder="Результат..."
        multiline
        rows={7}
        value={comm}
        InputProps={{ inputProps: { maxLength: 80 } }}
        helperText={`${comm.length}/${80}`}
        error={comm.length > 80}
      />
    </div>
  );
};

export default Task;

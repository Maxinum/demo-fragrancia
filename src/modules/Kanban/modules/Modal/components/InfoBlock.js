import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Context } from "../../../../../index";
import Autocomplete from "@mui/material/Autocomplete";
import { observer } from "mobx-react-lite";
import MUISelect from "../../../../../components/Select";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import changeInfo from "../../../helpers/changeInfo";
import onDragEnd from "../../../helpers/onDragEnd";
import HintInput from "../../../../../components/HintInput";

const InfoBlock = observer(({ info }) => {
  const { lead, client, user, kanban } = React.useContext(Context);
  const [data, setdata] = React.useState(info);
  const [kanbanData, setkanbanData] = React.useState(kanban.hunterData);
  const handleChange = (key, newValue) => {
    changeInfo(key, newValue, data.id, kanban.hunterData);
  };

  const handlechangeColumn = (event) => {
    console.log(event);
    const column = event.target.value;
    const result = {
      draggableId: String(info.id),
      destination: {
        droppableId: String(column),
        index: 0,
      },
      source: {
        index: 0,
        droppableId: String(2),
      },
    };
    onDragEnd(result, kanbanData, setkanbanData);
  };

  return (
    <Box
      sx={{
        width: "50%",
        border: "1px solid #e6e6e6",
        overflow: "auto",
        padding: "1rem",
        boxSizing: "border-box",
        height: "100%",
        borderRadius: "5px",
      }}
    >
      <Select
        size="small"
        onChange={handlechangeColumn}
        defaultValue={data.column}
      >
        <MenuItem value={1}>New Lead</MenuItem>
        <MenuItem value={2}>The presentation is completed</MenuItem>
        <MenuItem value={3}>Ready to buy</MenuItem>
      </Select>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Контакт
        </AccordionSummary>
        <AccordionDetails
          sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}
        >
          <Autocomplete
            freeSolo
            size="small"
            value={data.cities}
            options={client.cities.values.map((option) => option.value)}
            renderInput={(params) => (
              <TextField size="small" {...params} label="City" />
            )}
            name="city"
            type="text"
            autoSelect={true}
            onChange={(event, newValue) => {
              handleChange("cities", newValue);
            }}
          />
          <HintInput
            keyName="phone2"
            value={data.phone2}
            label="Телефон-2"
            end={<PhoneEnabledIcon />}
            change={handleChange}
          />
          <HintInput
            keyName="phone3"
            value={data.phone3}
            label="Телефон-3"
            end={<PhoneEnabledIcon />}
            change={handleChange}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Бизнес
        </AccordionSummary>
        <AccordionDetails
          sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}
        >
          <MUISelect
            value={data.field}
            name={lead.field.name}
            keyName={"field"}
            data={lead.field.values}
            change={handleChange}
          />
          <MUISelect
            value={data.expert}
            name="Тип"
            keyName="type"
            data={lead.type}
            change={handleChange}
          />
          <MUISelect
            value={data.need}
            name={lead.needs.name}
            keyName="need"
            data={lead.needs.values}
            change={handleChange}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Связь
        </AccordionSummary>
        <AccordionDetails
          sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}
        >
          <MUISelect
            value={data.channel}
            name={lead.channel.name}
            keyName="channel"
            data={lead.channel.values}
            change={handleChange}
          />
          <MUISelect
            value={data.warmth}
            name={lead.warmth.name}
            keyName="warmth"
            data={lead.warmth.values}
            change={handleChange}
          />
          <HintInput
            keyName="discount"
            value={data.discount}
            change={handleChange}
            label="Discount"
            end="%"
          />
          <HintInput
            keyName="bonus"
            value={data.bonus}
            change={handleChange}
            label="Bonus"
            end="тг."
          />
          <FormControlLabel control={<Checkbox />} label="Пробник" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Продажа
        </AccordionSummary>
        <AccordionDetails
          sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}
        >
          <MUISelect
            value={data.objection}
            name={lead.objection.name}
            keyName="objection"
            data={lead.objection.values}
            change={handleChange}
          />
          <MUISelect
            value={data.manager}
            name={user.managers.name}
            keyName="manager"
            data={user.managers.values}
            change={handleChange}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
});

export default InfoBlock;

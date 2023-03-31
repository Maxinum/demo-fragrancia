import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchInput from "../../components/SearchInput";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Modal from "./components/Modal";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Filters = observer((props) => {
  const { kanban } = React.useContext(Context);
  const [view, setView] = useState("kanban");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (props.button === "Перезагрузить") {
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = () => {
    const newView = view === "kanban" ? "list" : "kanban";
    setView(newView);
    kanban.setFormat(newView);
  };
  const managers = props.select.manager;
  const channels = props.select.channel;
  const cities = props.select.city;

  return (
    <div
      style={{
        height: "15vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "92vw",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button
            sx={{ color: "#000" }}
            onClick={changeHandler}
            startIcon={
              view === "kanban" ? (
                <ViewKanbanIcon />
              ) : (
                <FormatListBulletedIcon />
              )
            }
          >
            {view}
          </Button>
          <Filter select={props.select} />
          <Sort select={props.select} />
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <SearchInput />
          <Button variant="contained" onClick={handleOpen}>
            {props.button}
          </Button>
          {props.button === "Add" ? (
            <Modal
              managers={managers}
              cities={cities}
              channels={channels}
              open={open}
              onClose={handleClose}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
});

export default Filters;

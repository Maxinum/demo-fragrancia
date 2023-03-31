import React, { useState } from "react";
import { Draggable } from "react-dnd-beautiful";
import FlagIcon from "@mui/icons-material/Flag";
import styles from "../style.module.css";
import Modal from "../modules/Modal";
import Settings from "./Settings";
import changeInfo from "../helpers/changeInfo";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const Card = observer(({ item, index, format }) => {
  const { kanban } = React.useContext(Context);
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(item.favorite);
  const [openMod, setOpenModal] = useState(false);
  const anchorRef = React.useRef(null);

  React.useEffect(() => {
    setFlag(item.favorite);
  }, [item.favorite]);

  const openModal = () => {
    setOpenModal(!openMod);
  };

  const handleToggle = (event) => {
    event.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handlesetFlag = (event) => {
    setFlag(!flag);
    item.favorite = !item.favorite;
    changeInfo("favorite", !flag, item.id, kanban.hunterData);
    handleClose(event);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              borderRadius: "5px",
              position: "relative",
              background: flag === true ? "#fcdea8" : "#fff",
              ...provided.draggableProps.style,
            }}
          >
            <Modal id={item.id} open={openMod} onClose={openModal} />
            <div
              style={{ height: "100%" }}
              onClick={openModal}
              className={
                styles.card +
                " " +
                (format === "kanban" ? "" : styles.card_slide)
              }
            >
              <FlagIcon
                sx={{
                  position: "absolute",
                  right: 0,
                  color: "orange",
                  bottom: "16px",
                  marginRight: "1rem",
                  display: flag === true ? "block" : "none",
                }}
              />
              <div>{item.name}</div>
              <div>{item.phone}</div>
              <div>{item.tasklimit}</div>
              <div>{"3 days"}</div>
              <div style={{ color: "#808080" }}>{item.date}</div>
            </div>
            <Settings
              setclass={"setting"}
              anchorRef={anchorRef}
              open={open}
              flag={flag}
              toggle={handleToggle}
              click={handleListKeyDown}
              close={handleClose}
              setFlag={handlesetFlag}
            />
          </div>
        );
      }}
    </Draggable>
  );
});

export default Card;

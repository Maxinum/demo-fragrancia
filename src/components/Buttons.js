import React, { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { observer } from "mobx-react-lite";
import { createOrder, sendCheck, updateOrder } from "../APIs/OrderAPI";
import { Context } from "../index";
import {
  ClientValidation,
  VolumeValidation,
} from "../modules/FarmerDetails/components/Validation";
import axios from "axios";
import AlertComponent from "./Alert";
import { updateFarmer } from "../helpers/updateAfterSend";
import { removeDots } from "../helpers/Dotter";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FileCopyIcon from "@mui/icons-material/Save";

const Buttons = observer((props) => {
  const { client, orders } = useContext(Context);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hoveredButton1, setHoveredButton1] = useState(false);
  const [hoveredButton2, setHoveredButton2] = useState(false);
  const paymentRows = orders.paymentRows.filter((array) => array.score !== "");
  const perfRows = orders.selectedPerf.filter((array) => array.name !== "");
  const consRows = orders.selectedCons.filter((array) => array.name !== "");
  const files = Object.values(orders.selectedFile).filter(
    (file) => file !== undefined
  );

  let id;

  const handleAlertClose = () => {
    setWarning(false);
    setSuccess(false);
  };

  if (
    typeof client.selectedClient === "string" &&
    client.selectedClient !== ""
  ) {
    id = client.selectedClient.split(" ")[0];
  }

  const sendOrder = async (e) => {
    if (
      ClientValidation(
        client.selectedClient,
        orders.selectedPerf,
        orders.selectedCons,
        orders.paymentRows
      ) === true
    ) {
      setSuccess(true);
      let saleId = orders.bufId.length !== 0 ? orders.bufId.sale[0].id : null;
      let closed = e.target.innerText === "Arrange" ? 1 : 2;
      let clientType = window.location.href.split("/")[3] === "hunter" ? 1 : 2;
      const order = {
        sales: {
          id: saleId,
          clientId: id,
          order_date: client.date,
          client_type: clientType,
          sales_type: client.selectedCategory.id,
          total: orders.grandTotal,
          spent_bonus: orders.bonusCheck === true ? orders.spentBonus : 0,
          add_bonus:
            orders.saleType === "Bonus" ? Number(orders.percent).toFixed(0) : 0,
          discount: orders.saleType === "Discount" ? Number(orders.percent) : 0,
          comment: orders.comment,
          expeditorId: client.selectedDelivery,
          closed: closed,
        },
        payments: paymentRows.map((paymentRow) => ({
          sum: paymentRow.sum,
          createdAt: paymentRow.date,
          link: paymentRow.photoCheck,
          paymentTypeId: paymentRow.score,
        })),
        perf: perfRows.map((perfRow) => ({
          product_id: perfRow.id,
          type: perfRow.invTypeId,
          qty: removeDots(perfRow.volume),
          price: perfRow.price,
          total: perfRow.total,
        })),
        disp: consRows.map((consRow) => ({
          product_id: consRow.id,
          qty: removeDots(consRow.volume),
          price: consRow.price,
          total: consRow.total,
        })),
      };

      try {
        await createOrder(order);
        if (files.length === 0) {
          console.log("No files to upload");
        } else {
          const formData = new FormData();
          for (let i = 0; i < files.length; i++) {
            formData.append("image", files[i]);
          }

          try {
            await sendCheck(formData);
          } catch (error) {
            console.log(error);
          }
        }
        updateFarmer(client, orders);
      } catch (error) {
        console.error(error);
      }
    } else {
      setWarning(true);
    }
  };

  const handleButton1Hover = () => {
    setHoveredButton1(true);
  };

  const handleButton1Leave = () => {
    setHoveredButton1(false);
  };

  const handleButton2Hover = () => {
    setHoveredButton2(true);
  };

  const handleButton2Leave = () => {
    setHoveredButton2(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",
        marginBottom: "50px",
        marginTop: "50px",
      }}
    >
      <Button
        style={{
          background: hoveredButton1
            ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
            : "#065f46",
          color: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "50px",
          padding: "12px 32px",
          textTransform: "none",
          transition: "background .2s",
          width: "180px",
        }}
        variant="contained"
        endIcon={<CheckCircleOutlineIcon style={{ color: "#fff" }} />}
        onClick={sendOrder}
        onMouseEnter={handleButton1Hover}
        onMouseLeave={handleButton1Leave}
      >
        Arrange
      </Button>
      <Button
        style={{
          background: hoveredButton2
            ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
            : "#065f46",
          color: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "50px",
          padding: "12px 32px",
          textTransform: "none",
          transition: "background .2s",
          width: "180px",
        }}
        variant="contained"
        endIcon={<FileCopyIcon style={{ color: "#fff" }} />}
        onClick={sendOrder}
        onMouseEnter={handleButton2Hover}
        onMouseLeave={handleButton2Leave}
      >
        To the buffer
      </Button>
      <AlertComponent
        message={"Заполните все поля"}
        severity={"warning"}
        open={warning}
        handleClose={handleAlertClose}
      />
      <AlertComponent
        message={"Данные отправлены"}
        severity={"success"}
        open={success}
        handleClose={handleAlertClose}
      />
    </div>
  );
});

export default Buttons;

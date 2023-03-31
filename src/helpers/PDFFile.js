import React, { useState, useContext, useRef, useEffect } from "react";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Montserrat from "../assets/fonts/Montserrat/static/Montserrat-Light.ttf";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  Document,
  Image,
  Note,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { observer } from "mobx-react-lite";
import { Context } from "../../src/index";
import fragrancia from "../assets/imgs/fragran_icon.png";
import { addDots, removeDots } from "./Dotter";
import { ClientValidation } from "../modules/FarmerDetails/components/Validation";
import { createOrder, sendCheck } from "../APIs/OrderAPI";
import { updateFarmer } from "./updateAfterSend";
import AlertComponent from "../components/Alert";

Font.register({
  family: "Montserrat",
  src: Montserrat,
});
const TestPDF = observer((props) => {
  const [renderPdf, setRenderPdf] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
  const regex = /\d{11,13}/g;
  const { client, orders } = useContext(Context);
  const paymentRows = orders.paymentRows.filter((array) => array.score !== "");
  const perfRows = orders.selectedPerf.filter((array) => array.name !== "");
  const consRows = orders.selectedCons.filter((array) => array.name !== "");
  const files = Object.values(orders.selectedFile).filter(
    (file) => file !== undefined
  );

  const styles = StyleSheet.create({
    title: {
      fontFamily: "Montserrat",
      fontSize: 24,
      marginBottom: 10,
    },
    body: {
      fontFamily: "Montserrat",
      fontSize: 12,
    },
    page: {
      fontFamily: "Montserrat",
      padding: "10px",
      backgroundColor: "hsl(35, 20%, 96%)",
    },
    view: {
      fontSize: "12px",
      paddingLeft: "20px",
      paddingTop: "10px",
    },
    mainLogo: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      letterSpacing: 2,
      fontSize: 25,
      marginTop: "5px",
      fontWeight: "bold",
    },
    companyInfo: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-end",
      marginTop: "40px",
    },
    clientBlock: {
      width: "100%",
      display: "flex",
      marginTop: "5px",
      paddingTop: "20px",
      paddingLeft: "10px",
      paddingRight: "10px",
      flexDirection: "column",
      gap: "10px",
    },
    thRow: {
      padding: "10px",
      marginTop: "50px",
      display: "flex",
      flexDirection: "row",
      fontSize: "13px",
      // fontWeight: 'bold',
      letterSpacing: 2,
    },
    thRowBorder: {
      borderBottom: "2px solid black",
    },
  });
  const dataBlockPerf = (data, total, title) => {
    if (data.length !== 0 && data[0].name !== "") {
      return (
        <View style={{ margin: 0, padding: 0 }}>
          <Text>{title}</Text>
          <View style={styles.view}>
            {data.map(function (item, index) {
              return item.name === "" ? (
                ""
              ) : (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "7px",
                    marginLeft: "-6px",
                    padding: "5px",
                    borderBottom: "0.5px black solid",
                  }}
                  key={index}
                >
                  <Text style={{ width: "90%" }}>{item.name}</Text>
                  <Text style={{ width: "20%" }}>{item.volume}</Text>
                  <Text style={{ width: "20%" }}>{item.price + "₸"}</Text>
                  <Text style={{ width: "20%" }}>{item.total + "₸"}</Text>
                </View>
              );
            })}
          </View>
          <Text
            style={{
              textAlign: "right",
              paddingTop: "10px",
              fontSize: "13px",
              letterSpacing: 2,
            }}
          >
            Подытог: {total + "₸"}
          </Text>
        </View>
      );
    }
  };

  const dataBlockCons = (data, total, title) => {
    if (data.length !== 0 && data[0].name !== "") {
      return (
        <View style={{ margin: 0, padding: 0 }}>
          <Text>{title}</Text>
          <View style={styles.view}>
            {data.map(function (item, index) {
              return item.name === "" ? (
                ""
              ) : (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "7px",
                    marginLeft: "-6px",
                    padding: "5px",
                    borderBottom: "0.5px black solid",
                  }}
                  key={index}
                >
                  <Text style={{ width: "90%" }}>{item.name}</Text>
                  <Text style={{ width: "20%" }}>{item.volume}</Text>
                  <Text style={{ width: "20%" }}>{item.price + "₸"}</Text>
                  <Text style={{ width: "20%" }}>{item.total + "₸"}</Text>
                </View>
              );
            })}
          </View>
          <Text
            style={{
              textAlign: "right",
              paddingTop: "10px",
              fontSize: "13px",
              letterSpacing: 2,
            }}
          >
            Подытог: {total + "₸"}
          </Text>
        </View>
      );
    }
  };

  const pdf = (
    <Document>
      <Page wrap style={styles.page}>
        <View style={styles.mainLogo}>
          <View
            style={{ display: "flex", alignItems: "center", width: "100%" }}
          >
            {/* <Image src={fragrancia} style={{ width: '150px', height: '150px' }}></Image> */}
            <Text>Fragrancia</Text>
          </View>
        </View>
        <View style={styles.companyInfo}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "10px",
              paddingRight: "15px",
              alignItems: "flex-end",
              lineHeight: 1.5,
              letterSpacing: 1,
            }}
          >
            <Text>Стоимость не является публичной офертой</Text>
            <Text>г. Алматы ул. Толе Би 286/4, 3 этаж 308 офис</Text>
            <Text>t.me/fragrancia_asia</Text>
            <Text>+7 777 099 15 25</Text>
            <Text>fragrancia.kz</Text>
          </View>
        </View>
        <View style={styles.clientBlock}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "13px",
              lineHeight: 1.5,
              letterSpacing: 2,
            }}
          >
            <Text>{props.data.date}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "13px",
              lineHeight: 1.5,
              letterSpacing: 2,
            }}
          >
            <Text>Client: {props.data.client}</Text>
            <Text>Delivery: {props.data.delivery}</Text>
          </View>
        </View>
        {props.data.perf !== 0 && props.data.perf[0].name !== "" && (
          <>
            <View style={styles.thRow}>
              <Text style={{ width: "90%" }}>Аромат</Text>
              <Text style={{ width: "20%" }}>К-во</Text>
              <Text style={{ width: "20%" }}>Цена</Text>
              <Text style={{ width: "20%" }}>Тотал</Text>
            </View>
            <View style={styles.thRowBorder}></View>
          </>
        )}
        {dataBlockPerf(props.data.perf, addDots(props.data.total1))}

        {props.data.cons !== 0 && props.data.cons[0].name !== "" && (
          <>
            <View style={styles.thRow}>
              <Text style={{ width: "90%" }}>Аксессуар</Text>
              <Text style={{ width: "20%" }}>К-во</Text>
              <Text style={{ width: "20%" }}>Цена</Text>
              <Text style={{ width: "20%" }}>Тотал</Text>
            </View>
            <View style={styles.thRowBorder}></View>
          </>
        )}
        {dataBlockCons(props.data.cons, addDots(props.data.total2))}
        <View
          style={{
            display: "flex",
            fontSize: "13px",
            letterSpacing: 2,
            alignItems: "flex-end",
            marginTop: "50px",
          }}
        >
          <Text>ИТОГО: {addDots(props.data.mainTotal)}₸</Text>
        </View>
      </Page>
    </Document>
  );

  useEffect(() => {
    if (
      ClientValidation(
        client.selectedClient,
        orders.selectedPerf,
        orders.selectedCons,
        orders.paymentRows
      )
    ) {
      setRenderPdf(props.open);
    }
  }, [props.open]);

  const handleAlertClose = () => {
    setWarning(false);
    setSuccess(false);
  };

  const sendOrder = async (e) => {
    setSuccess(true);
    let saleId = orders.bufId.length !== 0 ? orders.bufId.sale[0].id : null;
    let closed = 2;
    let clientType = window.location.href.split("/")[3] === "hunter" ? 1 : 2;
    const order = {
      sales: {
        id: saleId,
        clientId: client.selectedClient.split(" ")[0],
        client_type: clientType,
        order_date: client.date,
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
  };

  const handleOnClick = () => {
    sendOrder();
    window.open(`https://wa.me/${props.data.client.match(regex)}`);
    setSuccess(true);
  };
  return (
    <>
      {renderPdf && (
        <PDFDownloadLink
          document={pdf}
          fileName={props.data.client + " " + props.data.date + ".pdf"}
        >
          <SpeedDialAction
            icon={<PictureAsPdfIcon style={{ color: "#cb0606" }} />}
            tooltipTitle={"pdf"}
            open={props.open}
            onClick={() => handleOnClick()}
          />
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
        </PDFDownloadLink>
      )}
    </>
  );
});

export default TestPDF;

import React, { useState } from "react";
import SpeedDialAction from '@mui/material/SpeedDialAction';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {
    Document,
    Image,
    Note,
    Font,
    Page,
    StyleSheet,
    Text,
    View
} from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { observer } from "mobx-react-lite";

const TestPDF = observer((props) => {
    Font.register({
        family: "Montserrat",
        // src:'../assets/Montserrat-VariableFont_wght.ttf'
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
    });

    const styles = StyleSheet.create({
        page: {
            fontFamily: "Montserrat",
            padding: '10px'
        },
        view: {
            fontSize: "12px",
            paddingLeft: '20px'
        },
        mainLogo: {
            fontSize: "28px",
            textAlign: "center",
            width: "100%"
        },
        clientInfo: {
            display: 'flex',
            flexDirection: "row",
            width: '100%',
        },
        clientBlock: {
            width: "50%",
            display: 'flex',
            flexDirection: 'column',
        },
        payment: {
            paddingTop: '20px'
        }
    });
    const dataBlock = (data, total, title) => {
        if (data.length !== 0 && data[0].name !== '') {
            return (
                <View style={{ paddingTop: '20px' }}>
                    <Text>{title}</Text>
                    <View style={styles.view}>
                        {data.map(function (item, index) {
                            return item.name === '' ? '' :
                                (<View style={{ display: 'flex', flexDirection: "row" }} key={index}>
                                    <Text style={{ width: '70%' }}>{item.name}</Text>
                                    <Text style={{ width: '10%' }} >{item.volume}</Text>
                                    <Text style={{ width: '10%' }}>{item.price}</Text>
                                    <Text style={{ width: '10%' }}>{item.total}</Text>
                                </View>)
                        }
                        )}
                    </View>
                    <Text style={{ textAlign: 'right' }}>Подытог: {total}</Text>
                </View>
            )
        }
    }

    const pdf = (
        <Document>
            <Page wrap style={styles.page}>
                <View style={styles.mainLogo}>
                    <Text>Fragrancia</Text>
                    <Text>Заказ №1080</Text>
                </View>
                <View style={styles.clientInfo}>
                    <View style={styles.clientBlock}>
                        <Text>Имя Клиента</Text>
                        <Text>Способ доставки</Text>
                    </View>
                    <View style={styles.clientBlock}>
                        <Text style={{ textAlign: "right" }}>30.02.23</Text>
                    </View>
                </View>
                {dataBlock(props.data.perf, props.data.total1, 'Ароматы:')}
                {dataBlock(props.data.cons, props.data.total2, 'Аксессуары:')}
                <View style={styles.payment}>
                    <Text style={{ textAlign: 'right' }}>До скидки: {props.data.withoutBonus}</Text>
                    <Text style={{ textAlign: 'right' }}>Скидка: {props.data.discount}</Text>
                    <Text style={{ textAlign: 'right' }}>К оплате: {props.data.mainTotal}</Text>
                </View>
            </Page>
        </Document>
    );



    return (
        <PDFDownloadLink
            document={pdf}
            fileName={"BarinTasta.pdf"}
        >
            <SpeedDialAction
                icon={<PictureAsPdfIcon />}
                tooltipTitle={'pdf'}
                open={props.open}
            />
        </PDFDownloadLink>
    );
})

export default TestPDF;

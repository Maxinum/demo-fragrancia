import xlsx from "json-as-xlsx";
import { toJS } from "mobx";

const xlsxFile = (info) => {
    const space = [
        { name: '', volume: '', price: '', total: '' },
    ]

    const makeTitle = (title) => {
        return [{ name: title, volume: '', price: '', total: '' },]
    }

    const makeTotal = (total) => {
        return [{ name: '', volume: '', price: 'Подытог', total: total },]
    }

    const total = [
        { price: 'Бонус:', total: 0 },
        { price: 'До скидки:', total: info.withoutBonus },
        { price: 'Cкидкa:', total: info.discount },
        { price: 'К оплате:', total: info.mainTotal },
    ]

    const PerfumeBlock = () => {
        const data = toJS(info.perf);
        if ((data.length === 1 && data[0]['name'] === '') || data.length === 0) {
            return [];
        }
        return makeTitle('Ароматы').concat(data, space, makeTotal(info.total2));
    }

    const ConsumBlock = () => {
        const data = toJS(info.cons);
        if ((data.length === 1 && data[0]['name'] === '') || data.length === 0) {
            return [];
        }
        return makeTitle('Аксессуары').concat(data, space, makeTotal(info.total2));
    }

    const content = [].concat( PerfumeBlock(),ConsumBlock(), total);

    const data = [
        {
            sheet: "Чек",
            columns: [
                { label: "Наименование", value: "name" },
                { label: "К-во", value: 'volume' },
                { label: "Цена", value: 'price' },
                { label: "Тотал", value: 'total' },
            ],
            content: content
        },
    ]

    let settings = {
        fileName: "имя клиента",
        writeMode: "writeFile",
        writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
    }

    xlsx(data, settings)
}

export default xlsxFile;
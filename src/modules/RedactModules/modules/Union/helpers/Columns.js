const exchange = 465;

export const columns = [
    {
        title: 'Продажное',
        width: 400,
        field: 'product',
        headerFilter: 'input',
        editor: 'input',
        validator: ['string', 'maxLength:50', 'minLength:10']
    },
    {
        title: 'Поставщика',
        width: 400,
        field: 'supplier',
        headerFilter: 'input',
        editor: 'input',
        validator: ['string', 'maxLength:50', 'minLength:10']
    },
    {
        title: 'Поставщик',
        width: 140,
        field: 'supl_name',
        headerFilter: 'list',
        editor: 'list',
        editorParams: {
            valuesURL: './php/onloadData.php?key=suppliers&param=supplier',
            clearable: true,
            autocomplete: true
        },
        headerFilterParams: {
            valuesURL: './php/onloadData.php?key=suppliers&param=supplier',
            clearable: true, autocomplete: true,
        }, formatter: function (cell, formatterParams, onRendered) {
            // return supplier[cell.getValue()];
        }
    },
    {
        title: 'Евро',
        field: 'euro',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        width: 120,
        validator: ['integer', 'maxLength:5']
    },
    {
        title: 'Доллар',
        field: 'dollar',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        width: 120,
        validator: ['integer', 'maxLength:5']
    },
    {
        title: 'Тотал',
        field: 'total',
        hozAlign: 'right',
        sorter: 'number',
        width: 120
    },
    {
        title: 'Статус',
        field: 'status',
        editor: 'list',
        headerFilter: 'list',
        // headerFilterParams: this.params,
        //  editorParams: this.params,
          width: 120,
        formatter: function (cell, formatterParams, onRendered) {
            return cell.getValue() === 1 ? 'Архив' : 'Активен';
        }
    },
    {
        // formatter: checkbox,
        title: 'Новинка',
        field: 'novelty',
        editor: 'tickCross',
        editorParams: {
            trueValue: '1',
            falseValue: '0',
        }, hozAlign: 'center', sorter: 'number'
    },
];
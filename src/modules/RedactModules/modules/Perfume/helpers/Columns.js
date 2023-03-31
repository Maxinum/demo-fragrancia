const exchange = 465;

export const columns = [
    {
        title: 'Артикул',
        width: 115,
        field: 'articul',
        headerFilter: 'input'
    },
    {
        title: 'Наименование',
        width: 400,
        field: 'name',
        headerFilter: 'input'
    },
    {
        title: 'Цена Мл',
        field: 'price_ml',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        width: 115,
        validator: ['float', 'maxLength:5', 'minLength:1'],
        cellMouseOver: function (e, cell) {
            cell.getElement().setAttribute('title',
                cell.getValue() * exchange + 'тг.');
        },
    },
    {
        title: '250 Мл',
        field: 'price_250ml',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        width: 105,
        validator: ['float', 'maxLength:5', 'minLength:1'],
        cellMouseOver: function (e, cell) {
            cell.getElement().setAttribute('title',
                cell.getValue() * exchange + 'тг.');
        },
    },
    {
        title: '500 Мл',
        field: 'price_500ml',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        width: 105,
        validator: ['float', 'maxLength:5', 'minLength:1'],
        cellMouseOver: function (e, cell) {
            cell.getElement().setAttribute('title',
                cell.getValue() * exchange + 'тг.');
        },
    },
    {
        title: '1000 Мл',
        field: 'price_1000ml',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        width: 120,
        validator: ['float', 'maxLength:5', 'minLength:1'],
        cellMouseOver: function (e, cell) {
            cell.getElement().setAttribute('title',
                cell.getValue() * exchange + 'тг.');
        },
    },
    {
        title: 'Розница',
        field: 'retail',
        editor: 'input',
        hozAlign: 'right',
        width: 120,
        sorter: 'number',
        validator: ['integer', 'maxLength:5', 'minLength:1'],
    },
    {
        title: 'Спеццена',
        field: 'spec',
        hozAlign: 'right',
        sorter: 'number',
        width: 130,
        cellMouseOver: function (e, cell) {
            cell.getElement().setAttribute('title',
                cell.getValue() * exchange + 'тг.');
        },
    },
    {
        title: 'Статус',
        field: 'status',
        editor: 'list',
        headerFilter: 'list',
        // headerFilterParams: this.params, 
        // editorParams: this.params,
         width: 130,
        formatter: function (cell, formatterParams, onRendered) {
            return cell.getValue() === 1 ? 'Архив' : 'Активен';
        },
    },
    {
        title: 'Доля',
        field: 'share',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        width: 90,
        validator: ['integer', 'maxLength:2'],
    },
    {
        title: 'Доля 2',
        field: 'share_2',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        width: 100,
        validator: ['integer', 'maxLength:2'],
    },
]
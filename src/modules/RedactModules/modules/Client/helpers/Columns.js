let params = { values: { '1': 'Архив', '0': 'В продаже' }, clearable: true };

export const columns = [
    {
        title: '№',
        width: 75,
        field: 'id',
        headerFilter: 'input'
    },
    {
        title: 'Name',
        field: 'name',
        editor: 'input',
        headerFilter: 'input',
        width: 200,
        validator: ['string', 'maxLength:15', 'minLength:2']
    },
    {
        title: 'City',
        width: 300,
        field: 'city',
        headerFilter: 'list',
        headerFilterParams: {
            values: {/*cities*/ }, clearable: true,
            autocomplete: true
        },
        editor: 'list',
        editorParams: {
            values: {/*cities*/ },
            clearable: true,
            autocomplete: true
        },
        formatter: function (cell, formatterParams, onRendered) {
            // return cities[cell.getValue()];
        }
    },
    {
        title: 'Phone Number',
        field: 'phone',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        headerFilter: 'input',
        width: 190,
        validator: ['integer', 'maxLength:13', 'minLength:11']
    },
    {
        title: 'Category',
        field: 'category',
        editor: 'list',
        width: 180,
        headerFilter: 'list',
        headerFilterParams: {
            values: {/*categories*/ },
            clearable: true
        }, editorParams:
            { values: {/*categories*/ }, clearable: true, autocomplete: true },
        formatter: function (cell, formatterParams, onRendered) {
            // return categories[cell.getValue()];
        }
    },
    {
        title: 'Manager',
        field: 'manager',
        editor: 'list',
        width: 190,
        headerFilter: 'list',
        headerFilterParams: {
            values: {/*managers*/ },
            clearable: true
        },
        editorParams: {
            values: {/*managers*/ },
            clearable: true
        },
        formatter: function (cell, formatterParams, onRendered) {
            // return managers[cell.getValue()];
        }
    },
    {
        title: 'Delivery',
        field: 'delivery',
        editor: 'list',
        width: 250,
        headerFilter: 'list',
        headerFilterParams: {
            values: {/*delivery*/ },
            clearable: true,
            autocomplete: true
        },
        editorParams: {
            values: {/*delivery*/ },
            clearable: true,
            autocomplete: true
        },
        formatter: function (cell, formatterParams, onRendered) {
            // return delivery[cell.getValue()];
        }
    },
    {
        title: 'Status',
        field: 'status',
        editor: 'list',
        width: 150,
        headerFilter: 'list',
        headerFilterParams: params,
        editorParams: params,
        formatter: function (cell, formatterParams, onRendered) {
            return cell.getValue() === 1 ? 'archive' : 'On sale';
        }
    },
];
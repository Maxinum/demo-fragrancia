const exchange = 465;

export const columns = [
    {
        title: 'Картинка',
        field: 'img',
        width: 200,
        // formatter: function (row) {
        //     const elem = `<img width="200" 
        // onerror="this.src='/icons/notfound.jpg'"src=${row.getValue()}  />`;
        //     return elem;
        // },
        // cellClick: function (e, cell) {
        //     document.getElementById('background').onclick = () => {
        //         $('.popup').animate({
        //             opacity: 0,
        //         }, 198, function () {
        //             $('#background').css('display', 'none');
        //             $('.popup').fadeOut(297);
        //         });
        //     };
        //     document.querySelector('.popup').innerHTML = '';
        //     const template = document.getElementById(`drag_drop`);
        //     const body = document.importNode(template.content.children[0], true);
        //     document.querySelector('.popup').appendChild(body);
        //     $('#background').fadeIn(297, function () {
        //         $('.popup').css('display', 'flex').animate({
        //             opacity: 1,
        //         }, 198);
        //     });
        //     const id = cell.getRow().getData()['id'];
        //     $('.photo-container').attr('photo-id', id);
        // },
    },
    {
        title: 'Категория',
        width: 170,
        field: 'category',
        headerFilter: 'list',
        editor: 'list',
        headerFilterParams: {
            // values: category,
            clearable: true
        },
        editorParams: {
            // values: category,
            clearable: true,
            autocomplete: true
        },
        formatter: function (cell, formatterParams, onRendered) {
            // return category[cell.getValue()];
        },
    },
    {
        title: 'Артикул',
        width: 170,
        field: 'articul',
        headerFilter: 'input',
        editor: 'input',
        validator: ['string', 'maxLength:20', 'minLength:5'],
    },
    {
        title: 'Наименование',
        width: 545,
        field: 'name',
        headerFilter: 'input',
        editor: 'input',
        validator: ['string', 'maxLength:50', 'minLength:5'],
    },
    {
        title: 'Цена',
        field: 'price',
        editor: 'input',
        hozAlign: 'right',
        sorter: 'number',
        width: 150,
        validator: ['number', 'maxLength:5', 'minLength:1'],
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
        sorter: 'number',
        width: 150,
        validator: ['integer', 'maxLength:20', 'minLength:5'],
    },
    {
        title: 'Статус',
        field: 'status',
        editor: 'list',
        headerFilter: 'list',
        // headerFilterParams: this.params,
        //  editorParams: this.params,
          width: 150,
        formatter: function (cell, formatterParams, onRendered) {
            return cell.getValue() === 1 ? 'Архив' : 'Активен';
        },
    },
];

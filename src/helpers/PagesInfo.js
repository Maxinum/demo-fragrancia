import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import CreateIcon from '@mui/icons-material/Create';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SearchIcon from '@mui/icons-material/Search';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

import {
    ADMIN_ROUTE,
    HUNTER_ROUTE,
    FARMER_ROUTE,
    STORAGE_ROUTE,
    ANALYTICS_ROUTE,
    DDS_ROUTE,
    SEARCH_ROUTE,
    KANBANH_ROUTE,
    KANBANF_ROUTE,
    REDACT_ROUTE,
}
    from "../app/utils/consts"

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        name: 'Админ Панель',
        text: 'Форма регистрации пользователей',
        Icon: ManageAccountsIcon,
        href: 'https://docs.google.com/document/d/1WmjXso6Oq57XIYzmj_3SiXFLNz65mun2EkIlEPgal5g',
    },
    {
        path: STORAGE_ROUTE,
        name: 'Склад',
        text: 'Форма закупа товаров',
        Icon: WarehouseIcon,
        href: 'https://docs.google.com/document/d/1yaY7HgANF-MyHWIIDGnWVPmnM1Ry-9dW0zTSYhuA-Ww'
    },
    {
        path: REDACT_ROUTE,
        name: 'Редактор',
        text: 'Форма редактирования данных',
        Icon: CreateIcon,
        href: 'https://docs.google.com/document/d/10EhnA5sXEZoTO-0ZbTS1snX0mmdnGa0ARsKnWigpnGY'
    },
    {
        path: DDS_ROUTE,
        name: 'ДДС',
        text: 'Форма заполнение расходов',
        Icon: PaymentsIcon,
        href: 'https://docs.google.com/document/d/10zioz0J6iKFo2qJDv7CPafWzezho1yxGDIoj2iUx_DY'
    }
]

export const managerRoutes = [
    {
        path: FARMER_ROUTE,
        name: 'Фермер',
        text: 'Форма по работе с постоянными клиентами',
        Icon: AddShoppingCartIcon,
        href: 'https://docs.google.com/document/d/1ZK--ONjesRIsf-Vb230mU46y5nTrZS0WWxXVrR7TtxQ'
    },
    {
        path: HUNTER_ROUTE,
        name: 'Хантер',
        text: 'Форма по работе с новыми клиентами',
        Icon: PersonAddIcon,
        href: 'https://docs.google.com/document/d/11G2Gv5uFKGPtNGjxRPZeVlP1aBnEQeb-DvKy6mcxCSA'
    },
    {
        path: ANALYTICS_ROUTE,
        name: 'Аналитика',
        text: 'Визуальное представление данных',
        Icon: AnalyticsIcon,
        href: 'https://docs.google.com/document/d/1g4Lf7EParw0wlx9iqy7a07FnchZ3uom-6uvkjwzMM0A'
    },
    {
        path: SEARCH_ROUTE,
        name: 'Форма поиска',
        text: 'Справочник по номерам телефона',
        Icon: SearchIcon,
        href: 'https://docs.google.com/document/d/15HddQxmUVaUaUjJsoUWccmUKoFCJg_O9-GIQJtiGwb8'
    },
    {
        path: KANBANH_ROUTE,
        name: 'Форма Лидов',
        text: 'Форма по работе с потенциальными клиентами',
        Icon: ViewKanbanIcon,
        href: 'https://docs.google.com/document/d/1xjR0vW-xcegsrrfsBP-F5-HFI6Q-BhE905B2GURh9ro'
    },
    {
        path: KANBANF_ROUTE,
        name: 'Спад клиентов',
        text: 'Форма по работе с проблемными клиентами',
        Icon: ViewKanbanIcon,
        href: ''
    },
]

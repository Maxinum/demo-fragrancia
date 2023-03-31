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
        name: 'Admin panel',
        text: 'User registration form',
        Icon: ManageAccountsIcon,
        href: 'https://docs.google.com/document/d/1WmjXso6Oq57XIYzmj_3SiXFLNz65mun2EkIlEPgal5g',
    },
    {
        path: STORAGE_ROUTE,
        name: 'Warehouse',
        text: 'The form of goods procurement',
        Icon: WarehouseIcon,
        href: 'https://docs.google.com/document/d/1yaY7HgANF-MyHWIIDGnWVPmnM1Ry-9dW0zTSYhuA-Ww'
    },
    {
        path: REDACT_ROUTE,
        name: 'Editor',
        text: 'Data editing form',
        Icon: CreateIcon,
        href: 'https://docs.google.com/document/d/10EhnA5sXEZoTO-0ZbTS1snX0mmdnGa0ARsKnWigpnGY'
    },
    {
        path: DDS_ROUTE,
        name: 'DDS',
        text: 'Expense fill out form',
        Icon: PaymentsIcon,
        href: 'https://docs.google.com/document/d/10zioz0J6iKFo2qJDv7CPafWzezho1yxGDIoj2iUx_DY'
    }
]

export const managerRoutes = [
    {
        path: FARMER_ROUTE,
        name: 'Farmer',
        text: 'Form on work with regular customers',
        Icon: AddShoppingCartIcon,
        href: 'https://docs.google.com/document/d/1ZK--ONjesRIsf-Vb230mU46y5nTrZS0WWxXVrR7TtxQ'
    },
    {
        path: HUNTER_ROUTE,
        name: 'Hunter',
        text: 'Form for working with new clients',
        Icon: PersonAddIcon,
        href: 'https://docs.google.com/document/d/11G2Gv5uFKGPtNGjxRPZeVlP1aBnEQeb-DvKy6mcxCSA'
    },
    {
        path: ANALYTICS_ROUTE,
        name: 'Analytics',
        text: 'Visual representation of data',
        Icon: AnalyticsIcon,
        href: 'https://docs.google.com/document/d/1g4Lf7EParw0wlx9iqy7a07FnchZ3uom-6uvkjwzMM0A'
    },
    {
        path: SEARCH_ROUTE,
        name: 'Search Form',
        text: 'Directory of phone numbers',
        Icon: SearchIcon,
        href: 'https://docs.google.com/document/d/15HddQxmUVaUaUjJsoUWccmUKoFCJg_O9-GIQJtiGwb8'
    },
    {
        path: KANBANH_ROUTE,
        name: 'Lead Form',
        text: 'Form for working with potential clients',
        Icon: ViewKanbanIcon,
        href: 'https://docs.google.com/document/d/1xjR0vW-xcegsrrfsBP-F5-HFI6Q-BhE905B2GURh9ro'
    },
    {
        path: KANBANF_ROUTE,
        name: 'Customer decline',
        text: 'Form for working with problem clients',
        Icon: ViewKanbanIcon,
        href: ''
    },
]

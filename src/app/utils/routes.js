import Admin from "../../pages/Admin"
import Main from '../../pages/Main'
import Storage from '../../pages/Storage'
import Redact from '../../pages/Redact'
import CashFlow from "../../pages/CashFlow"
import Hunter from "../../pages/Hunter"
import Farmer from "../../pages/Farmer"
import Analytics from '../../pages/Analytics'
import Search from "../../pages/Search"
import Login from '../../pages/Login'
import KanbanFarmer from '../../pages/KanbanFarmer'
import KanbanHunter from "../../pages/KanbanHunter"
import Collector from "../../pages/Collector"
import Profile from "../../pages/Profile"

import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    HUNTER_ROUTE,
    FARMER_ROUTE,
    STORAGE_ROUTE,
    ANALYTICS_ROUTE,
    DDS_ROUTE,
    SEARCH_ROUTE,
    KANBANH_ROUTE,
    KANBANF_ROUTE,
    REDACT_ROUTE,
    REDACT_ROUTE_CLIENT,
    REDACT_ROUTE_DISPOSABLES,
    REDACT_ROUTE_ING,
    COLLECTOR_ROUTE,
    PROFILE_ROUTE,
}
    from "./consts"

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: STORAGE_ROUTE,
        Component: Storage
    },
    {
        path: REDACT_ROUTE,
        Component: Redact
    },
    {
        path: REDACT_ROUTE_CLIENT,
        Component: Redact
    },
    {
        path: REDACT_ROUTE_DISPOSABLES,
        Component: Redact
    },
    {
        path: REDACT_ROUTE_ING,
        Component: Redact
    },
    {
        path: DDS_ROUTE,
        Component: CashFlow
    }
]

export const managerRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: HUNTER_ROUTE,
        Component: Hunter
    },
    {
        path: FARMER_ROUTE,
        Component: Farmer
    },
    {
        path: ANALYTICS_ROUTE,
        Component: Analytics
    },
    {
        path: SEARCH_ROUTE,
        Component: Search
    },
    {
        path: KANBANH_ROUTE,
        Component: KanbanHunter
    },
    {
        path: KANBANF_ROUTE,
        Component: KanbanFarmer
    },
    {
        path: COLLECTOR_ROUTE,
        Component: Collector,
    },
    {
        path:PROFILE_ROUTE,
        Component:Profile,
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
]
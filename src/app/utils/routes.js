import { lazy } from 'react';
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
    from "../constants/consts";

const Admin = lazy(() =>import("../../pages/Admin"));
const Main = lazy(() =>import('../../pages/Main'));
const Storage = lazy(()=>import('../../pages/Storage'));
const Redact = lazy(() =>import('../../pages/Redact'));
const CashFlow = lazy(()=>import('../../pages/CashFlow'));
const Hunter = lazy(()=>import('../../pages/Hunter'));
const Farmer = lazy(()=>import('../../pages/Farmer'));
const Analytics = lazy(()=>import('../../pages/Analytics'))
const Search = lazy(()=>import('../../pages/Search'))
const Login = lazy(()=>import('../../pages/Login'))
const KanbanFarmer = lazy(()=>import('../../pages/ProblemClients'))
const KanbanHunter = lazy(()=>import('../../pages/Lead'))
const Collector = lazy(()=>import('../../pages/Collector'))
const Profile = lazy(()=>import('../../pages/Profile'))

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
        path: PROFILE_ROUTE,
        Component: Profile,
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
]
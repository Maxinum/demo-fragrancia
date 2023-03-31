import React, { useContext, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { adminRoutes, publicRoutes, managerRoutes } from './routes';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
// import Loader from '../../assets/loader.gif';
import Loader from '../../components/Loader'

const AppRouter = observer(() => {
    const { user } = useContext(Context);
    // console.log(user.isAuth)
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {/* {user.isAuth && managerRoutes.map(({ path, Component }) => */}

                {managerRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                {/* {user.isAuth && adminRoutes.map(({ path, Component }) => */}
                {adminRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />
                )}
                {/* {!user.isAuth && publicRoutes.map(({ path, Component }) =>
                <Route key={path} path="/" element={<Navigate to={path} />} />
            )} */}
                <Route
                    path="*"
                    element={<Navigate to='/' replace />}
                />
            </Routes>
        </Suspense>
    );
});

export default AppRouter;

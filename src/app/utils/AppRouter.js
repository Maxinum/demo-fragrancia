import React, { useContext } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { adminRoutes, publicRoutes, managerRoutes } from './routes';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { ERROR_ROUTE } from './consts';

const AppRouter = observer(() => {
    const { user } = useContext(Context);
    console.log(user.isAuth)
    return (
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
    );
});

export default AppRouter;

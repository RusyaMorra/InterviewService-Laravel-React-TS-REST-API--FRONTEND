import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Routes";
import AuthContext from "../Context/index";
import Loader from "../UI/Loader/Loader";
import Layout from "../UI/MainLayout/Layout";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext<undefined|any>(AuthContext);


    if (isLoading) {
        return <Loader/>
    }

    return (

        isAuth
            ?
            <Routes>
                <Route path="/" element={<Layout />}>
                    {privateRoutes.map(route =>
                        <Route
                            element = {<route.component/>}
                            path = {route.path}
                            key = {route.path}

                        />
                     )}
                </Route>
            </Routes>
             :
            <Routes>
                   {publicRoutes.map(route =>
                    <Route
                        element = {<route.component/>}
                        path = {route.path}
                        key = {route.path}
                    />
                )}

            </Routes>

    );
};

export default AppRouter;

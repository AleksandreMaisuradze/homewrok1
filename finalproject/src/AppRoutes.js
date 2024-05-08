import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./config/routes";

function AppRoutes() {
    return (
        <Routes>
            {routes.map((route) => {
                if (route.Guard) {
                    return (
                        <Route key={route.path}
                            path={route.path}
                            element={
                                <route.Guard>
                                    <route.Component />
                                </route.Guard>
                            } >
                        </Route>
                    )
                }
                return (
                    <Route key={route.path}
                        path={route.path}
                        element={
                            <route.Component />
                        } >
                    </Route>
                )
            }
            )}
        </Routes>
    )
}

export default AppRoutes;
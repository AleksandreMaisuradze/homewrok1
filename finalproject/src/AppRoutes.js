import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import { Movies_PDP } from "./constants/appRoutes";
import MoviesDetail from "./pages/moviesDetailPage/MoviesDetail";

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
                if(route.show){
                    return (
                        <Route key={route.path}
                            path={route.path}
                            element={
                                <route.show>
                                    <route.Component />
                                </route.show>
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
            <Route path={Movies_PDP} element={<MoviesDetail />} />
        </Routes >
    )
}

export default AppRoutes;
import appRoutes from "../constants/appRoutes";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import Registration from "../pages/registration/Registration";
import LogIn from "../pages/login/LogIn";
import AuthGuards from "../Guards/AuthGuards";

const routes = [
    {
        path: appRoutes.Home,
        Component: Home,
    },
    {
        path: appRoutes.Movies,
        Component: Movies,
        Guard: AuthGuards,
    },
    {
        path: appRoutes.Registration,
        Component: Registration,
    },
    {
        path: appRoutes.LogIn,
        Component: LogIn,
    },
]

export default routes;
import { RouteObject } from "react-router-dom";
import { ReactElement } from "react";

import Home from '../pages/Home/Home';
import About from "../pages/About/About";

// Le typage de route est la pour s'assurer que chaque route contient bien un élément React valide
// '&' permet de forcer le typage de 'element', il assure que 'element' soit uniquement de type 'ReactElement'
type AppRoute = RouteObject & {
    element: ReactElement;
}

const routes: AppRoute[] = [
    {path: '/', element: <Home />},
    {path: '/About', element: <About />}
];

export default routes;
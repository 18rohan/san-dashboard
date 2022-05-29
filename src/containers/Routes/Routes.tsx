import { useRoutes } from "react-router-dom";

import appRoutes from "./appRoutes";

const Routescomponent = () => {
    const element = useRoutes(appRoutes)
    return element;
};

export default Routescomponent;

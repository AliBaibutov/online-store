import React from "react";
import { useRoutes } from "react-router";
import AppLoader from "./components/appLoader";
import routes from "./routes";

const App = () => {
    const elements = useRoutes(routes);
    return (
        <AppLoader>
            <div>{elements}</div>
        </AppLoader>
    );
};

export default App;

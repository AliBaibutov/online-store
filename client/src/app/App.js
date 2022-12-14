import React from "react";
import { useRoutes } from "react-router";
import routes from "./routes";

const App = () => {
    const elements = useRoutes(routes);
    return <div>{elements}</div>;
};

export default App;

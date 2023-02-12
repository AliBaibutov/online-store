import React from "react";
import { useRoutes } from "react-router";
import AppLoader from "./components/appLoader";
import Header from "./components/header";
// import Usersloader from "./components/usersLoader";
import routes from "./routes";

const App = () => {
    const elements = useRoutes(routes);
    return (
        <AppLoader>
            {/* <Usersloader> */}
            <Header />
            <div>{elements}</div>
            {/* </Usersloader> */}
        </AppLoader>
    );
};

export default App;

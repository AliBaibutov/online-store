import React from "react";
import { useRoutes } from "react-router";
import AppLoader from "./components/appLoader";
import Footer from "./components/footer";
import Header from "./components/header";
import Wrapper from "./components/wrapper";
import routes from "./routes";

const App = () => {
    const elements = useRoutes(routes);
    return (
        <AppLoader>
            <Wrapper>
                <Header />
                <div>{elements}</div>
                <Footer />
            </Wrapper>
        </AppLoader>
    );
};

export default App;

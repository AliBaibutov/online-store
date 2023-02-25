import React from "react";
import { useRoutes } from "react-router";
import AppLoader from "./components/ui/hoc/appLoader";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import Wrapper from "./components/common/wrapper";
import routes from "./routes";

const App = () => {
    const elements = useRoutes(routes);
    return (
        <AppLoader>
            <Wrapper>
                <Header />
                {elements}
                <Footer />
            </Wrapper>
        </AppLoader>
    );
};

export default App;

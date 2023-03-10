import React from "react";
import { useRoutes } from "react-router";
import { ToastContainer } from "react-toastify";
import AppLoader from "./components/ui/hoc/appLoader";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import Wrapper from "./components/common/wrapper";
import routes from "./routes";

const App = () => {
    const elements = useRoutes(routes);
    return (
        <>
            <Wrapper>
                <AppLoader>
                    <Header />
                    {elements}
                    <Footer />
                </AppLoader>
            </Wrapper>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default App;

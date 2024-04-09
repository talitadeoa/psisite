import React from "react";
import { Route, Routes } from 'react-router-dom';
import withRoot from "./modules/withRoot";
import NotFound404 from './404';
import Privacy from "./pages/Privacy";

function Privacidade() {
    return (
        <React.Fragment>
            <Routes>
                <Route path={`privacidade`} element={<Privacy privacy={"privacidade"} />} />
                <Route path={`*`} element={<NotFound404 />} />
            </Routes>
        </React.Fragment>
    )
}

export default withRoot(Privacidade);
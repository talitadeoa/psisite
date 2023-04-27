import React from "react";
import { Route, Routes } from 'react-router-dom';
import withRoot from "./modules/withRoot";
import NotFound404 from './404';
import Article from "./pages/Article";

function Articles() {
    return (
        <React.Fragment>
            <Routes>
                <Route path={`artigo`} element={<Article article={"artigo"} />} />
                <Route path={`*`} element={<NotFound404 />} />
            </Routes>
        </React.Fragment>
    )
}

export default withRoot(Articles);
import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Comunity from "./pages/Comunity";


function Routes() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/comunity" component={Comunity} />

        </BrowserRouter>
    )
}

export default Routes;

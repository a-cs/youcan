import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Community from "./pages/Community";


function Routes() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/community" component={Community} />

        </BrowserRouter>
    )
}

export default Routes;

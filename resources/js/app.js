import React from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import Welcome from "./himti/Welcome"

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <BrowserRouter>
            <Welcome />
        </BrowserRouter>
    )
}

root.render(<App />);



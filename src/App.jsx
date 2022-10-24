import React from "react";
import './App.css';
import Header from "./components/partials/header/header";
import Statistic from "./components/partials/statistic/statistic";

function App() {
    return (
        <div className="crimeTopography">
            <div className="crimeTopography__wrapper">
                <Header/>
                <Statistic/>
            </div>
        </div>
    );
}

export default App;

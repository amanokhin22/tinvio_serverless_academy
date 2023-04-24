import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import {Features} from "./components/features/Features";
import {Company} from "./components/company/Company";
import {LegalInfo} from "./components/privacy/LegalInfo";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Features" element={<Features/>}></Route>
            <Route path="/Company" element={<Company/>}></Route>
            <Route path="/privacy" element={<LegalInfo/>}></Route>
            <Route path="/terms" element={<LegalInfo/>}></Route>
        </Routes>
    );
}

export default App;

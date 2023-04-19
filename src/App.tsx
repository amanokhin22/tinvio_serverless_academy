import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import {Features} from "./components/features/Features";
import {Company} from "./components/company/Company";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Features" element={<Features/>}></Route>
            <Route path="/Company" element={<Company/>}></Route>
        </Routes>
    );
}

export default App;

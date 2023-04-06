import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import {Features} from "./components/features/Features";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Features" element={<Features/>}></Route>
        </Routes>
    );
}

export default App;

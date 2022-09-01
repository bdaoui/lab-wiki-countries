
import './App.css';

import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import Data from "./countries.json";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/ContryDetails';

function App() {
  return (

    <div className="App">
      <Navbar  /> 
      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='/details' element={<CountryDetails />} />
      </Routes>

      <CountriesList />
    </div>
  );
}

export default App;


import './App.css';

import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/ContryDetails';


import Data from "./countries.json";

function App() {

  return (

    <div className="App">
      <Navbar  /> 
      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='/details/:id' element={<CountryDetails data={Data} />} />
      </Routes>

    </div>
  );
}

export default App;

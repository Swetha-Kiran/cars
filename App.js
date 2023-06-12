
import { useState } from 'react';
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Cardetails from './components/Cardetails';
import AllCars from './components/AllCars';

function App() {
  const [formName, setFormName] = useState("");
  const [cardetails, setCarDetails] = useState("");
  const [cars, setCars] = useState("");



  return (
    <>
      <div className='main-container'>
        <div className='container'>
          <div className="heading">
            <h1>BUYC Corp</h1>
            <h4>A best place to buy a second hand car!!</h4>
          </div>
          <div className='nav'>
            <button onClick={() => { setCarDetails("details"); setFormName(""); setCars("") }}>Add Car Details</button>
            <button onClick={() => { setCarDetails(""); setFormName(""); setCars("showcars"); }}>All Cars</button>
            <button onClick={() => { setCarDetails(""); setFormName("login"); setCars("") }}>Log In</button>
            <button onClick={() => { setCarDetails(""); setFormName("register"); setCars("") }}>Sign Up</button>
            {
              (formName) ?
                (formName === "login" ? <Login /> : <Register />)
                : null
            }
            {
              cardetails ? <Cardetails /> : null
            }
            {
              cars ? <AllCars /> : null
            }
          </div>

        </div>
      </div>



    </>
  );
}

export default App;

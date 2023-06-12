import React, { useState } from 'react'
import "./AllCars.css";
import { Cars } from "./Cardetails"


function AllCars() {

  const [price, setPrice] = useState(4000000);
  const [color, setColor] = useState("Blue");
  const [mileage, setMileage] = useState(0);
  const [cars, setCars] = useState(Cars);



  const handleDelete = (title) => {
    const newcars = cars.filter(
      (car) => car.title !== title
    )
    setCars(newcars);

  };

  const handleInput = (event) => {
    setPrice(event.target.value);
     }

  const handleSelect = (event) => {
    setColor(event.target.value);
  }

  const handleMileage = (event) => {
    setMileage(event.target.value);
  }


  return (

    <div className='div1'>
      <div className="filter">
        <div classnmae="price-div">
          <h4>Price: {price}</h4>
          <input type="range" min="0" max="4000000" onInput={handleInput} />
        </div>

        <div classnmae="price-div">
          <h4>Color: {color}</h4>
          <label for="color">Color: </label>
          <select onChange={handleSelect}>
            <option>Blue</option>
            <option>Red</option>
            <option>Orange</option>
          </select>
        </div>

        <div classnmae="price-div">
          <h4>Mileage: {mileage}</h4>
          <input type="number" onChange={handleMileage} />
        </div>
      </div>


      <div className='sub-div'>
        {cars.filter(car => { return car.price < parseInt(price, 10) })
          .filter(car => { return car.color === color })
          .filter(car => { return car.mileage > mileage })
          .map(car => {

            return (
              <div className='car'>
                <div><img src={car.picture} alt="" width="400px" height="200px" /></div>
                <div className='info'>
                  <p><b>Title:</b> {car.title}</p>
                  <p><b>Color:</b> {car.color}</p>
                  <p><b>Price:</b> Rs.{car.price}</p>
                  <p><b>Description:</b> {car.description}</p></div>
                <div className='button-tab'>
                  <button className='button-car' onClick={() => handleDelete(car.title)}>DELETE</button>
                </div>
              </div>

            );
          }
          )}

      </div>
    </div>
  );
}

export default AllCars
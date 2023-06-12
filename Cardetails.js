import React, { useState } from 'react'
import "./cardetails.css";

export const Cars = [
  {
    title: "Mazda CX3",
    price: 2000000,
    color: "Blue",
    mileage: 20,
    description: "Serving as the brand’s entry-level crossover, the 2018 Mazda CX-3 slots below the larger CX-5. Front-wheel drive is standard on all trims and all-wheel drive is optional.",
    picture: "https://media.istockphoto.com/id/501484428/photo/mazda-cx-3-on-the-street.jpg?s=612x612&w=0&k=20&c=zP-Gf6C6Lht6rbADsWKCQYdJ9I-f3lIqqIKy-LfugCo="
  },
  {
    title: "Honda HRV",
    price: 1500000,
    color: "Red",
    mileage: 15,
    description: "A new entry into the growing subcompact crossover segment, the Honda HR-V is practical and spacious. With seating for up to five passengers and multiple seating configurations.",
    picture: "https://www.topgear.com/sites/default/files/news/image/2015/04/Large%20Image_173.jpeg"
  },
  {
    title: "Subaru Crosstrek",
    price: 1800000,
    color: "Orange",
    mileage: 18,
    description: "The Crosstrek is Subaru’s smallest crossover. Based on the Impreza hatchback, the Crosstrek has a lower starting price than the Forester and Outback.",
    picture: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Subaru_Xv_Crosstrek_%2819323363%29.jpeg"
  },
  {
    title: "Toyota CHR",
    price: 2400000,
    mileage: 20.5,
    color: "Blue",
    description: "The 2018 Toyota C-HR is the newest entry among subcompact crossovers, America’s fastest-growing segment. The C-HR puts an emphasis on style with its controversial exterior design.",
    picture: "https://www.shutterstock.com/image-photo/istanbul-may-new-toyota-chr-260nw-648335716.jpg"
  },

  {
    title: "Jeep Renegade",
    price: 3000000,
    mileage: 17,
    color: "Blue",
    description: "The smallest and least expensive model in Jeep’s SUV lineup, slotting below the Patriot, Compass, Wrangler, Cherokee, and Grand Cherokee. The Renegade shares the same platform as the Fiat 500X.",
    picture: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/144271/renegade-left-front-three-quarter.jpeg"
  },
  {
    title: "Ford Escape",
    price: 1200000,
    description: "The compact 2018 Ford Escape crossover is positioned above the new subcompact EcoSport but below the midsize Edge, three-row Flex, three-row Explorer, and three-row Expedition SUVs.",
    picture: "https://images.hindustantimes.com/auto/img/2021/09/17/1600x900/_bd1e9e2e-5761-11e8-b87b-3dd7d8bd63e9_1631861872224.jpg"
  },

];

function Cardetails() {
  const [carsarray, setCarsarray] = useState(Cars);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    setCarsarray([...carsarray,
    { title: { title }, description: { description }, picture: { image } }
    ]);

    alert(`The car details are: 
        
      Title: ${title}
      Image: ${image}
      Description: ${description}`)
  }




  return (
    <div className='cardetails-container'>
      <div className='sub-container'>
        <div>
          <h3>Add Car Details</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title:</label>
            <br />
            <input type="text"
              placeholder='Enter model'
              value={title}
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)} />
            <br />


            <label htmlFor='image'>Image Address:</label>
            <br />
            <input type="text"
              placeholder='Enter Image Address'
              value={image}
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.value)} />
            <br />

            <label htmlFor='description'>Description:</label>
            <br />
            <textarea id="description" value={description} name="description" rows={6} cols={40}
              onChange={(e) => setDescription(e.target.value)} />
            <br />

            <button type="submit">Submit</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Cardetails;
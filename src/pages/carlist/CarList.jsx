import React from 'react'
import './CarList.css'
import { useParams } from "react-router-dom";
import ProtonHeader from '../../assets/header-logo/bmw-header.png'
import { CAR_NAMES } from '../../data/car_names'

const CarList = () => {


  const { name } = useParams()

  const car = CAR_NAMES.filter((x => x.car_brand === name))[0];

  console.log(car, 'car');


  return (
    <>
      <div className='header-img-container'>
        <img src={car.car_header_image} alt="" style={{ height: "300px", width: " 600px" }} />
      </div>
      <div className='car-list-title'>
        <h1>Below is the car list available in our showroom</h1>
      </div>
      {
        car.car_names.map((car, index) => (
          <button className='car-button'>
            <img src={car.car_image} width="100%" height="300px" alt="" style={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px', borderBottom: '1px solid gray' }} />
            <h1>{car.name}</h1>
          </button>
        ))
      }
    </>
  )
}

export default CarList
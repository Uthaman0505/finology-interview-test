import React from 'react'
import './CarBrands.css'
import { BRANDS } from '../../data/car_brand'
import { Link } from "react-router-dom";


const CarBrands = () => {


    return (
        <>
            <div className='title'>
                <h1>Click the car brand below to see the list of the cars</h1>
            </div>
            {
                BRANDS.map((brand, index) => (
                    <Link key={index} to={{ pathname: `/${brand.brand}/carlist` }}>
                        <button className='car-brands'>
                            <img src={brand.image} width="100px" alt="" style={{ borderRadius: '50%' }} />
                            <h1>{brand.brand}</h1>
                        </button>
                    </Link>
                ))
            }
        </>
    )
}

export default CarBrands
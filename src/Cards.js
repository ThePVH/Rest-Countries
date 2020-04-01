import React from 'react';
import { Link } from 'react-router-dom'

export const Cards = (props) => {
    return (
        <div className='cards'>
            <Link to={`${props.alpha3Code}`}>
                <img src={props.img} alt="Country Flag" />
                <div className='cards-info'>
                    <h2>{props.name}</h2>
                    <p><b>Population:</b> {props.population}</p>
                    <p><b>Region:</b> {props.region}</p>
                    <p><b>Capital:</b> {props.capital}</p>
                </div>
            </Link>
        </div>
    )
}
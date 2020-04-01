import React from 'react';
import { Link } from 'react-router-dom'

export const Card = ({ name, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders }) => {

    return (
        <div className="cardList">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="card">
                <div className="flag">
                    <img src={flag} alt="flag" style={{ maxWidth: '500px' }} />
                </div>
                <div className="info">
                    <h2>{name}</h2>
                    <div className="stats">
                        <p><b>Native Name:</b> {nativeName}</p>
                        <p><b>Population:</b> {population}</p>
                        <p><b>Region:</b> {region}</p>
                        <p><b>Sub Region:</b> {subregion}</p>
                        <p><b>Capital:</b> {capital}</p>
                        <p><b>Top Level Domain:</b> {topLevelDomain}</p>
                        <div className="currencies"><b>Currencies:</b> {currencies && (
                            <>{currencies.map((currency, index) => <p key={index}>{currency.name}</p>)}</>
                        )} </div>
                        <div className="languages"><b>Languages:</b> {languages && (
                            <>{languages.map((language, index) => <p key={index}>{language.name}</p>)}</>
                        )}</div>
                    </div>
                    <div className="btn-section">
                        <p><b>Border Countries:</b></p>
                        {borders && (
                            <>{borders.map((border, index) => (<Link to={border}><button key={index}>{border}</button></Link>))}</>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
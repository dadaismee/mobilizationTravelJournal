import React from 'react'
import "./card.css"
import geo from "../../assets/geo.svg"

const Card = (props) => {
  return (
    <section className='card'>
      <a href={props.place.googleMaps} target="_blank">
        <img className='card__img' src={props.place.image} />
      </a>
      <div className="card__info">
        <div className="card__info-location">
          <img src={geo} />
          <p>{props.place.country}</p>
          <a href={props.place.googleMaps} target="_blank">View on Google maps</a>
        </div>
        <h2>{props.place.location}</h2>
        <h3>{props.place.dates}</h3>
        <p>{props.place.description}</p>
      </div>
    </section>
  )
}

export default Card
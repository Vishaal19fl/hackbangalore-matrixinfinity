import React from 'react'
import "./ServiceCard2.scss"
import { Link } from 'react-router-dom'

export const ServiceCard2 = ({item}) => {
  return (
    <Link to="/gig/123" className='link'>
        <div className="gigCard">
            <img src={item.img} alt="" />
            <div className="info">
                <div className="user">
                    <img src={item.pp} alt="" />
                    <span>{item.username}</span>
                </div>
                <p>{item.desc}</p>
                <div className="star">
                    <img src="./img/star.png" alt="" />
                    <span>{item.start}</span>
                </div>
            </div>
            <hr/>
            <div className="details">
                <img src="./img/heart.png" alt="" />
                <div className="price">
                    <span>Starting at</span>
                    <h2>Rs. {item.price}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

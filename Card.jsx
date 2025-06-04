import React from 'react'
import { Col } from 'react-bootstrap'
import './Card.css'
const Card = ({name,categery,image,rs }) => {
  return (
<Col sm='2' md='3' lg='4'>

<div className="card" style={{ width: "18rem" }} id='col'>
  <img src={image} className="card-img-top" alt="..." id='images'/>
  <p className="h1" id='nameofthing' >{name}</p>
  <div className="card-body">
    <h5 className="card-title" id='name'>{rs}</h5>
    <h5 className="card-title" id='name'>{categery==="breakfast" ?"breakitem":
     categery === "lunch" ? "Lunch Item" :
     categery === "dinner" ? "Dinner Item" :
     "Unknown Category"
  }</h5>
  
  </div>
</div>
</Col>

  ) 
  }

export default Card
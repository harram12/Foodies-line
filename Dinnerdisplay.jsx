import React from 'react'
import { Container, Row } from "react-bootstrap";
import Card from "./Card";
import { datadinner } from "./ourmenu/datadinner";
const Dinnerdisplay = () => {
  return (
    <div>
          <Container>
        <Row>
       {
        datadinner.map((item,index)=>{

  return(
    <Card 
    key={index}
    name={item.name}
categery={item.catageries}
rs={item.rs}
image={item.image}
    ></Card>
  )

        })
       }
        </Row>
      </Container>
    </div>
  )
}

export default Dinnerdisplay
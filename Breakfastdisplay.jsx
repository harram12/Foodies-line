import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { datab } from './ourmenu/datab'
import Card from './Card'
import './Breakfastdisplay.css'
export const Breakfastdisplay = () => {
  return (
    <div >
        <Container>
            <Row id='break'>

{
datab.map((item,index)=>{
    return(
      
       <Card key={index}
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

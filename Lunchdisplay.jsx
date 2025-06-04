import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "./Card";
import { datalunch } from "./ourmenu/datalunch";

const Lunchdisplay = () => {
  return (
    <div>
      <Container>
        <Row>
       {
        datalunch.map((item,index)=>{

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
  );
};

export default Lunchdisplay;

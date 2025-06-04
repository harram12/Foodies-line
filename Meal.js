import React from 'react'
import Header from './Header'
import { Headerlunch } from './Headerlunch'
import Lunchdisplay from './Lunchdisplay'
import Footer from './Footer'
const Meal = () => {
  return (
    <div>
      <Header></Header>
      <Headerlunch></Headerlunch>
     <Lunchdisplay></Lunchdisplay>
      <br></br>
      <br></br>
      <Footer></Footer>
   
    </div>
  )
}

export default Meal
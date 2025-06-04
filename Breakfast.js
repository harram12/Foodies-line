import React from 'react'
import Header from './Header'
import Headerbreakfast from './Headerbreakfast'
import { Breakfastdisplay } from './Breakfastdisplay'
import Footer from './Footer'
const Breakfast = () => {
  return (
    <div>
      <Header></Header>
      <Headerbreakfast></Headerbreakfast>
     

   <Breakfastdisplay></Breakfastdisplay> 
      <br></br>
      <br></br>
      <Footer></Footer>
   
    </div>
  )
}

export default Breakfast

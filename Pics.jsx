import React from 'react'
import img1 from '../images/strawberry.jpeg'
import img2 from '../images/juices-shutterstock.jpeg'
import img3 from '../images/cremy.jpeg'
import './Pic.css'  
const Pics = () => {
  return (
    <div id=''>
<p className="h1" id='hea'> our healthy <span id='span'>food</span></p>
      <div id='straw'>
      
 
 <br />
 
 <img src={img1} class="img-fluid" alt="..." className='im' ></img>
    
      <img src={img2} class="img-fluid" alt="..." className='im' ></img>
      <img src={img3} class="img-fluid" alt="..." className='im' id='creamy' ></img>
</div>
    </div>
  )
}

export default Pics
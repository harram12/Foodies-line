import React from 'react'
import '../components/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div id='main'>
<>
  {/* Hello world */}
  <div className="footer-dark" >
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3 className='heading3'>Foodies-line</h3>
            <ul className='style'>
              <li className='unorder'>
               <Link to='/' className='list'>home</Link>
              </li>
              <li  className='unorder'>
              <Link to='/About' className='list'>About</Link>
              </li>
              <li  className='unorder'>
              <Link to='/Contact' className='list'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 item">
            <h3 className='heading3'>menu</h3>
            <ul className='style'>
              <li  className='unorder' >
              <Link to='/Breakfast' className='list'>breakfast</Link>
              </li>
              <li  className='unorder'>
              <Link to='/Meal' className='list'>lunch</Link>
              </li>
              <li  className='unorder'>
              <Link to='/Dinner' className='list'>dinner</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3 className='heading3'>foodies-line</h3>
            <p className='para'>
            welcome to modern resturant with a focus premium food taste
            premium food taste we invite you to celebrate our resturant<sup>,</sup>s delecious recipes whether
            you are here for breakfast  lunch or dinner discover new taste and
            recipes from all over the world
            </p>
          </div>
          <div className="col item social">
            <a href="#">
              <i className="icon ion-social-facebook" />
            </a>
            <a href="#">
              <i className="icon ion-social-twitter" />
            </a>
            <a href="#">
              <i className="icon ion-social-snapchat" />
            </a>
            <a href="#">
              <i className="icon ion-social-instagram" />
            </a>
          </div>
        </div>
        <p className="copyright">Foodies-line © 2018</p>
      </div>
    </footer>
  </div>
</>

    </div>
  )
}

export default Footer
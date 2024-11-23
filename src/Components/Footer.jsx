import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
    className="d-flex flex-column align-items-center justify-content-center mt-5"
    style={{ width: "100%", height: "300px",backgroundColor:'#90ee90' }}
  >
    <div className="footer d-flex justify-content-evenly w-100">
      <div style={{width:'400px'}} className="website">
        <h4 className='fw-bolder text-light'>
        <i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair
        </h4>
        <h6>
          Designed and built with all the love in the world by mj_jasir with the help of my mentors.
        </h6>
        <p>Currently version 1.4.</p>
      </div>
      <div className="links d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}> Home </Link>
        <Link to={'/login'} style={{textDecoration:'none',color:'white'}}> Login  </Link>
        <Link to={'/register'} style={{textDecoration:'none',color:'white'}}> Register </Link>

      </div>
      <div className="guides d-flex flex-column">
        <h4>Guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}> React </Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}> React Bootstrap  </Link>
        <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{textDecoration:'none',color:'white'}}> Routing </Link>

      </div>
      <div className="contact ">
          <h4>Contact Us</h4>
          <div className="sub d-flex mt-3">
            <input type="text" className="form-control" placeholder='Enter your Email Id'/>
            <button className='btn btn-warning ms-2 '><i class="fa-solid fa-arrow-right fa-beat"></i></button>
          </div>
          <div className="icons fs-4 d-flex justify-content-between mt-3">
          <Link to={'mailto:mjasirpp@gmail.com'} style={{ textDecoration: "none", color: "white" }}><i className="fa-solid fa-envelope"></i></Link>
          <Link to={'https://www.linkedin.com/in/mjasirpp/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-linkedin"></i></Link>
          <Link to={'https://www.instagram.com/mj_jasir/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-instagram"></i></Link>
          <Link to={'https://github.com/mjasirpp'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-github"></i></Link>
          </div>
        </div>
    </div>

    <p>Copyright © 2024 Project Fair. Built with React.</p>
  </div>
  )
}

export default Footer
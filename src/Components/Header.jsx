import React, { useContext } from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Contexts/TokenAuth'

function Header({insideDashboard}) {
  const naviagte = useNavigate()
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)
  const handleLogout = ()=>{
    //remove all exisiting user deteail from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    //navigate to landing page
    naviagte('/')
  }
  return (
    <Navbar style={{backgroundColor:'#90ee90'}} className="position-fixed top-0 w-100">
    <Container>
      <Navbar.Brand >
      <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder fs-3'><i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair</Link>
      </Navbar.Brand>
      { insideDashboard && <button onClick={handleLogout} className="btn btn-linkms-auto text-light fw-bolder fs-5">LogOut <i class="fa-solid fa-arrow-right-from-bracket fa-beat-fade text-light"></i></button>}
    </Container>
  </Navbar>
  )
}

export default Header
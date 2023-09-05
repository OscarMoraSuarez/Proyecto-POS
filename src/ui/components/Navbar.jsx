import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../auth/context";

const logoPath='/logo.png';
export const Navbar = () => {
  const navigate=useNavigate();
  const {user,handleLogOut}=useContext(AuthContext);
  
  const onLogOut=()=>{
    handleLogOut();
    navigate('/login',{
      replace:true
    })
  }



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
        >
          <img src={logoPath} width="140px" alt="logo"/>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
            <Link
               className="nav-link active"
               to="home"
              >
                home
              </Link>
              
              
            </li>
            
            <li className="nav-item">
              <Link 
                className='nav-link'
                to='administrar'
              >
                Administrar
              </Link>
              
            </li>
             
          </ul>
           <h4 className='my-2 me-1'>{ (user.name)}</h4>
          
          <button 
            onClick={onLogOut}
            className='btn btn-danger'
          >
            salir
          </button>
        </div>
      </div>
    </nav>
  </>
  )
}

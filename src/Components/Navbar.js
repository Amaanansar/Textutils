import React from 'react'
import PropTypes from 'prop-types'
import {
  // BrowserRouter,
  // Switch,
  // Route,
  Link,
  // Routes
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-dark" style={{backgroundColor:"black"}}>
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light active" aria-current="page" to="/ ">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/About">{props.text}</Link>
            </li>
          </ul>
          <div className="bg-danger d-flex rounded mx-3" onClick={()=>{props.toggleMode('danger')}} style={{height:"30px",width:"30px"}} ></div>
          <div className="bg-primary d-flex rounded mx-3" onClick={()=>{props.toggleMode('primary')}} style={{height:"30px",width:"30px"}} ></div>
          <div className="bg-success d-flex rounded mx-3" onClick={()=>{props.toggleMode('success')}} style={{height:"30px",width:"30px"}} ></div>
          <div className="bg-warning d-flex rounded mx-3" onClick={()=>{props.toggleMode('warning')}} style={{height:"30px",width:"30px"}} ></div>
          <div className="bg-light d-flex rounded mx-3" onClick={()=>{props.toggleMode('light')}} style={{height:"30px",width:"30px",border:"1px solid"}} ></div>
          <div className="bg-dark d-flex rounded mx-3" onClick={()=>{props.toggleMode('dark')}} style={{height:"30px",width:"30px",border:"1px solid white"}} ></div>
          {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div> */}
        </div>
      </div>
    </nav>  
    </>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
}
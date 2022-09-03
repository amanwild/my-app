import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${{color :props.mode==='dark'?'grey':'black'}} bg-${props.mode}`}>
      <nav className={`navbar navbar-expand-lg bg-light`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              style={{ width: `50px` }}
              src="logo.jpg"
              className="rounded float-start"
              alt="..."
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active my-3"
                  aria-current="page"
                  href="#"
                >
                  {props.first}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active my-3"
                  aria-current="page"
                  href="#"
                >
                  {props.second}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active my-3"
                  aria-current="page"
                  href="#"
                >
                  {props.third}
                </a>
              </li>
              
              
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>props.toggleMode('danger')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>props.toggleMode('warning')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} On</label>
      </div>
    </nav>
  );
}
//use to define prop type
Navbar.propTypes = { first: PropTypes.string, link: PropTypes.string };

//use to define default props
Navbar.defaultProps = { first: "this is default", link: "default link" };

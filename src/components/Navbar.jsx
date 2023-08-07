import React from 'react'
import "./navbar.css"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme={`${props.mode}`}>
        <div className="container-fluid">
          <img src={`logo192.png`} alt="" width="45" height="40" style={{borderRadius:"50%"}}></img>
          <p className="navbar-brand" style={{ color: 'orange', fontWeight: '500', position: "relative", top: "5.5px", left: "2px" }}>{props.title}</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <Link className="nav-link hover" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">About</a> */}
                <Link className="nav-link hover" to="/abouts">About</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">About</a> */}
                <Link className="nav-link hover" to="/speech">Speech to Text</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <Link className="nav-link hover" aria-current="page" to="/textform">TextModification</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">About</a> */}
                <Link className="nav-link hover" to="/text">Summariser</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">About</a> */}
                <Link className="nav-link hover" to="/keyword">Keyword extractor</Link>
              </li>
              

            </ul>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'}{" "}mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}//This is how we define the type of props we are passing to the component.

Navbar.defaultProps = {
  title: "Set title here",
}//This is how we define the default value of props we are passing to the component.
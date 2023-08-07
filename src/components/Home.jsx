import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
export default function Home(props) {

    return (
        // <div className="container-xxl">
        <div className="container-lg" style={{overflow:"hidden"}}>
            <div className="row">
                <div className="col-lg-6 col-sm-12 text-start ">
                    <img src="output.gif"
                        className="rounded img-fluid homeimg" alt="Logo" style={{}} />
                </div>
                <div className="col-lg-6 col-sm-12 " style={{ display: "flex", alignItems: "center", backgroundColor: "transparent" }}>
                    <div className='container-fluid hometext'>
                        <h3 style={{ color: "white" }}>Bend the Words, Shape the World<br /> <br />With <span >TextAnalyzer</span></h3>
                        <br />
                        <button
                            className={`btn btn-${props.mode === "dark" ? "warning" : "dark"} phonebtn`}
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            Get Started
                        </button>


                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" >

                            <div className="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Our Services</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex ">
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
                            </div>
                        </div>
                        <br /><br /><br />
                        <h5 style={{ color: "white" }}>We Offer:</h5>
                        <TypeAnimation
                            sequence={[
                                "Text Manipulation !",
                                2000,
                                "Summarisation !",
                                2000,

                                "Keyword Extraction !",
                                2000,
                                "Text to Speech !",
                                2000,
                            ]}
                            speed={50}
                            wrapper='span'
                            repeat={Infinity}
                            style={{ color: "grey", fontSize: "40px" }}
                        />
                        <br /><br />
                        <p style={{ color: "white" }}>Welcome to the Text Analyzer Web App – your all-in-one solution for manipulating and analyzing text in various ways! Whether you need to convert text between different cases, perform ASCII conversions, capitalize initials, summarize content, extract keywords, or even transcribe speech into text, this versatile tool has got you covered. Best of all, it’s completely free to use!</p>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

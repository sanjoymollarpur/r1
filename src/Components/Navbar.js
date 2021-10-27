import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-4 mb-lg-0" >
                        <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link active" aria-current="page" href="/">Bollywood</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link active" aria-current="page" href="/">Technology</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link active" aria-current="page" href="/">Hollywood</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link active" aria-current="page" href="/">Fitness</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="/">Food</a>
                        </li>

                    </ul>
                    {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                </div>
            </div>
        </nav>
    )
}

import React from 'react'

export default function LoginNav() {
    return (
        <nav className="topnav navbar navbar-light  fixed-top bg-dark w-100 ml-0">
            <div className="mt-2 p-0 mr-3">
                <p className="text-white m-0 text-muted">ILOILO STATE COLLEGE OF FISHERIES </p>
                <h5 className="text-white m-0">HMRO</h5>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link my-2 btn btn-danger mr-2" href="#" id="modeSwitcher" data-mode="light" data-toggle="modal" data-target=".modal-full">
                        Login as HR / Employee
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link my-2 btn-outline-light mr-2" id="modeSwitcher" data-mode="light">
                        Guest Log-in
                    </a>
                </li>
            </ul>
        </nav>
    )
}

import React from 'react'

export default function LoginNav() {
    return (
        <nav className="topnav navbar navbar-light  fixed-top bg-dark w-100 ml-0">
            <button type="button" className="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar">
            </button>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link my-2 btn btn-danger mr-2" href="#" id="modeSwitcher" data-mode="light">
                        Login as HR
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link my-2 btn  btn-outline-light" href="#" id="modeSwitcher" data-mode="light">
                        Vanancies
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link my-2 btn text-light mr-2" href="#" id="modeSwitcher" data-mode="light">
                        Guest Log-in
                    </a>
                </li>
            </ul>
        </nav>
    )
}

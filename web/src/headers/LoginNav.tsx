import React from 'react'

export default function LoginNav(props: any) {
    return (
        <nav className="ml-0 topnav navbar t-bg-white fixed-top w-100">
            <div className="t-max-w-screen-xl t-w-full t-mx-auto t-flex t-items-center">
                <div className="p-0 mt-2 mr-3 ">
                    <div className="t-flex t-items-center">
                        <img
                            src=" https://iscofhr.online/assets/logos/iscof.png"
                            className=" t-mr-3 t-h-[50px]"
                            alt="..."
                        />

                        <div>
                            <p className="m-0 text-white text-muted !t-text-blue-900">
                                Iloilo State University of Fisheries Science and
                                Technology{' '}
                            </p>

                            <h5 className="m-0 text-white !t-text-black">
                                Human Resource Management Office
                            </h5>
                        </div>
                    </div>
                </div>

                <ul className="nav t-ml-auto">
                    <li className="nav-item">
                        <a
                            onClick={() => {
                                props.modal()
                            }}
                            className="my-2 mr-2 nav-link btn t-bg-sky-500 text-light"
                            id="modeSwitcher"
                            data-mode="light"
                            data-toggle="modal"
                            data-target=".modal-full">
                            Login as HR or Employee
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

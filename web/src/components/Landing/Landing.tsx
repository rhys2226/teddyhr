import React, {useState} from 'react'
import LoginNav from '../../headers/LoginNav'
import Login from '../../views/Main/Login'
import ApplicationForm from '../Forms/ApplicationForms/ApplicationForm'
import FullScreenModal from '../Modals/FullScreenModal'
import Descriptions from '../../views/Main/Vacancies/Descriptions'
import Vacancies from './Vacancies'
import {Auth} from '../../services/auth.service'

export default function LandingUI() {
    const [vacancies, setVacancies]: any = useState([])

    React.useEffect(() => {
        getVacancies()
    }, [])

    function getVacancies() {
        const auth = new Auth('vacancies')
        auth.fetch({}).then((data: any) => {
            setVacancies(data)
        })
    }

    const [modal, setModal] = React.useState(<div></div>)

    return (
        <div>
            <LoginNav
                modal={() => {
                    setModal(<Login />)
                }}
            />
            <div className="wrapper bg-light t-flex t-flex-col">
                <div
                    style={{
                        height: '100vh',
                        width: '99vw',
                        background: 'rgba(0,64,120,0.7)',
                        position: 'absolute',
                        zIndex: 0,
                    }}></div>
                <div
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '30vh',
                        width: '100%',
                    }}>
                    <div className="p-5 text-center text-white ">
                        <div className="t-text-xl md:t-text-5xl t-font-semibold">
                            Oceans of Opportunity Await!
                        </div>
                        Explore Your Career with Iloilo State University of
                        Fisheries Science and Technology!
                    </div>

                    <div className="mx-auto t-grid t-grid-cols-1 md:t-grid-cols-2 t-w-3/4 md:t-w-1/4 t-gap-3">
                        <button
                            onClick={() => {
                                $([
                                    document.documentElement,
                                    document.body,
                                ]).animate(
                                    {
                                        scrollTop: 860,
                                    },
                                    500,
                                )
                            }}
                            className="ml-4 btn t-bg-sky-700 md:hover:t-bg-blue-700">
                            <div className="  text-white  t-py-2.5 t-px-5  ">
                                Get Started
                            </div>
                        </button>

                        <button
                            onClick={() => {
                                setModal(<Login />)
                            }}
                            data-toggle="modal"
                            data-target=".modal-full"
                            className="ml-4 btn t-border t-border-white md:hover:t-bg-white/10">
                            <h1 className="  text-white  t-py-2.5 t-px-5 ">
                                Sign-in
                            </h1>
                        </button>
                    </div>
                </div>
                <img
                    className="t-object-cover"
                    style={{height: '100vh', width: '99vw'}}
                    src="https://iscofhr.online/bg/1.jpg"
                />

                <div className="t-p-6 t-w-full t-flex t-flex-col t-py-20">
                    <div className=" t-max-w-screen-xl t-mx-auto t-w-full">
                        <div className="t-text-4xl ">Available Vacancies</div>
                        <div className="t-mb-4">
                            Pathways to Excellence: Your Dream Job Awaits!
                        </div>

                        <div className="t-grid md:t-grid-cols-3 t-mt-8 t-gap-5">
                            {vacancies.map((vacancy: any, index: any) => (
                                <Vacancies
                                    data={vacancy}
                                    modal={(modal: any) => {
                                        setModal(
                                            modal == 'descriptions' ? (
                                                <Descriptions data={vacancy} />
                                            ) : (
                                                <ApplicationForm
                                                    data={vacancy}
                                                />
                                            ),
                                        )
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />
            </div>

            <footer className="t-py-6 t-text-white t-bg-gray-900">
                <div className="mx-auto t-containert- t-text-center">
                    <p>
                        &copy; 2023 Iloilo State University of Fisheries Science
                        and Technology. All rights reserved.
                    </p>
                    <p className="t-mt-2">Iloilo, Philippines,</p>
                </div>
            </footer>

            <FullScreenModal>{modal}</FullScreenModal>
        </div>
    )
}

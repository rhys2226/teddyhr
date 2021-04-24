import React from 'react'
import Applicants from '../../views/Users/Applicants/Applicants'
import Settings from '../../views/Settings/Settings'
import Overview from '../../views/Settings/Overview/Overview'
import Employees from '../../views/Users/Employees/Employees'
import AddVancancy from '../../views/Recruitement/Add-vacancy/AddVancancy'
import AddEmployee from '../../views/Users/Add-Employee/AddEmployee'

export default function Content( props: any ) {
    return (
        <div>
            <main role="main" className="main-content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12">


                            {/* <AddVancancy /> */}
                            {/* <Settings /> */}
                            <AddEmployee />
                            {/* <Applicants /> */}
                            {/* <Employees /> */}


                            {props.children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

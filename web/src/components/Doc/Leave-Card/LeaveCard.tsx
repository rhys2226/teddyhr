import React from 'react'
import LeaveCardTable from './LeaveCardTable'
import '../Doc.css'

export default function LeaveCard() {
    
    return (
        <div className="bg-white landscape docs service-record">
            <p className="text-center m-0">Republic of the Philippines</p>
            <p className="text-center m-0 bold text-primary">ILOILO STATE COLLEGE OF FISHERIES    </p>
            <p className="text-center m-0"> MAIN POBLACION CAMPUS</p>
            <p className="text-center m-0">Poblacion, Barotac Nuevo, Iloilo</p>
            <br/>
            <p className="text-center m-0">EMPLOYEE LEAVE CARD</p>
            <br/>
            <div className="row">
                <div className="col-md-5 row">
                    <div className="col-md-2">  Name: </div>
                    <div className="col-md-10">
                        <p className="underlined text-left">Ryan Agsaluna</p>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 row">
                   <div className="col-md-4">
                        Date of Birth:
                    </div>
                    <div className="col-md-8">
                        <p className="underlined text-left">11/14/2021</p>
                    </div>
                </div>
            </div>
             <div className="row">
                <div className="col-md-5 row">
                    <div className="col-md-2">
                      Position:
                    </div>
                    <div className="col-md-10">
                        <p className="underlined text-left">MIS Director</p>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 row">
                   <div className="col-md-4">
                      First day of Service:
                    </div>
                    <div className="col-md-8">
                        <p className="underlined text-left">11/14/2021</p>
                    </div>
                </div>
            </div>
            <LeaveCardTable />
        </div>
    )
}

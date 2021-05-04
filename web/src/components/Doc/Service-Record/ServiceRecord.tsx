import React from 'react'
import '../Doc.css'
import './ServiceRecord.css'

export default function ServiceRecord() {
    
    return (
        <div className="bg-white portrait docs service-record">
            <h6 className="text-center bold">SERVICE RECORD</h6>
            <p className="text-center">(To be accomplished by Employer)</p>
            <p>Form No. CR-2</p>
            <div className="row">
                <p className="col-md-1">Name: </p>
                <p className="bold underlined text-center col-md-2">Yassin</p>
                <p className="bold underlined text-center col-md-2">Jamel Eid</p>
                <p className="bold underlined text-center col-md-1">B</p>
                <p className="bold underlined text-center col-md-6">Bayoenta</p>
            </div>
            <div className="row" style={{marginTop:'-15px'}}>
                <div className="col-md-1"></div>
                <p className="col-md-2  text-center">(Surname)</p>
                <p className="col-md-2  text-center">(Given Name)</p>
                <p className="col-md-1  text-center">(MI)</p>
                <p className="col-md-6  text-center">(if married woman, give also maiden name)	</p>
            </div>
            <div className="row">
                <div className="col-md-1">Birth:</div>
                <p className="bold underlined text-center col-md-2">11/14/2021</p>
                <p className="bold underlined text-center col-md-4">Pototan</p>
                <p className="col-md-5 text-left">(Date herein should be checked from birth <br/> or baptisimal certificate or other related documents)</p>
            </div>
           <div className="row" style={{marginTop:'-30px'}}>
               <div className="col-md-1"></div>
                <p className="col-md-2 text-center">(Date)</p>
                <p className="col-md-4 text-center">(Place Name)</p>
           </div>
           <br/>
            <p className="text-left" style={{textIndent:'3.4rem'}}>
                This is to certify that the employee hereinabove actually rendered services in the office shown by the services below, each line of which is supported  by appointment and other papers actually issued by this office has been approved by the authorities.
            </p>
            <p style={{marginBottom:'-5px'}}>=================================================================================================================</p>
            <table className="table">
                <thead  className="thead-dark">
                    <tr>
                        <th colSpan={2} className="text-center">SERVICES</th>
                        <th colSpan={3} className="text-center">RECORD OF APPOINTMENT</th>
                        <th className="text-center">OFFICE/ENTITY<br /> DIVISION</th>
                        <th  className="text-center"></th>
                        <th className="text-center">L/A</th>
                        <th colSpan={2} className="text-center">SEPARATION</th>
                        <th className="text-center">Remarks</th>
                    </tr>
                    <tr >
                        <th  colSpan={2} className="text-center">(Inclusive Dates) <br/> From &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To</th>
                        <th className="text-center">Designation</th>
                        <th className="text-center">Status <br/>(1)</th>
                        <th className="text-center">Salary<br/>(2)</th>
                        <th className="text-center">Station/Place <br/>of Assignment</th>
                        <th className="text-center">Branch <br/>(3)</th>
                        <th className="text-center">w/out <br/> pay</th>
                        <th className="text-center">Division </th>
                        <th className="text-center">(4) <br/> Date</th>
                        <th  colSpan={2} className="text-center ">Cause</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td  colSpan={2}></td>
                    </tr>
                </tbody> */}
            </table>
            <p style={{marginTop:'-20px'}} >=================================================================================================================</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p style={{marginBottom:'-5px'}}>=================================================================================================================</p>
              <p className="text-center">
                Issued in compliance with the Executive Order No. 54, dated August 10, 1954 and in accordance with Circular No. 58, dated August 10, 1954 of the System.
            </p>
            <br/>
            <div className="row">
                 <div className="col-md-6">
                    <br/>                    <br/>                    <br/>
                    <br/>                    <br/>                    <br/>
                    <br/>
                    <br/>
                    <p className="text-center bold underlined">Jamel Eid Yassin</p>
                    <div className="text-center" style={{marginTop:'-17px'}}>Date</div>
                 </div>
                <div className="col-md-6">
                    <div><i>CERTIFIED CORRECT:</i></div>
                    <br/>                    <br/>                    <br/>
                    <div><i>Chief of Head of Office</i></div>
                    <br/>                    <br/>                    <br/>
                    <div>Designation</div>
            </div>
            </div>
        </div>
    )
}

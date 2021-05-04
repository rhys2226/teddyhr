import React from 'react'
import './ICPR.css'
import '../Doc.css'


export default function ICPRPage2() {
    return (
        <div className="bg-white landscape">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th >OUTPUT</th>
                        <th >Success Indicators(Targets + Measures)</th>
                        <th >Actual accomplishments</th>
                        <th colSpan={4}  style={{border:0}}>
                            <p className="text-center">Rating</p>
                            <div className="row" style={{flex:1,transform:'translateY(13px)'}}>
                                <span className="col-md-3 qeta" style={{borderLeft:0}}> Q </span>
                                <span className="col-md-3 qeta"> E </span>
                                <span className="col-md-3 qeta"> T </span>
                                <span className="col-md-3 qeta" style={{borderRight:0}}> A</span>
                            </div>
                         </th>
                        <th  className="text-center">Remarks</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td colSpan={8}> <p className="mt-3 w-100">STRATEGIC PRIORITY</p></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <td colSpan={8}> <p className="mt-3 w-100">CORE FUNCTIONS</p></td>
                    </tr>
                </thead>
                 <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <br/>
            </table>
                <table className="table">
                <thead>
                    <tr>
                        <td colSpan={8}> <p className="mt-3 w-100">Comments and Recommendations for Development Purposes</p></td>
                    </tr>
                </thead>
                    <thead className="thead-dark">
                        <tr>
                            <th>Discussed with:</th>
                            <th>Date</th>
                            <th>Assessed by:</th>
                            <th>Date</th>
                            <th>Final Rating by: </th>
                            <th>Date</th>
                        </tr>
                    </thead>
                     <tbody>
                    <tr>
                        <td className="text-center bold underlined">Jamel Eid Yassin</td>
                        <td className="text-center bold underlined" rowSpan={2}>11/14/2021</td>
                        <td className="text-center bold underlined">Jamel Eid Yassin</td>
                        <td className="text-center bold underlined" rowSpan={2}>11/14/2021</td>
                        <td className="text-center bold underlined">Jamel Eid Yassin</td>
                        <td className="text-center bold underlined" rowSpan={2}>11/14/2021</td>
                    </tr>
                    <tr>
                        <td className="text-secodary">Employee</td>
                        <td className="text-secodary">Supervisor</td>
                        <td className="text-secodary">Head of Agency</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <td colSpan={2}>Legend :</td>
                        <td>Q-Quality</td>
                        <td>E-Efficiency</td>
                        <td>T-Timeless</td>
                        <td>A-Average</td>
                    </tr>
                </thead>
                </table>
        </div>
    )
}

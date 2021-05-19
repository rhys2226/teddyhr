import React from 'react'
import './ICPR.css'
import '../Doc.css'

type Props = {
    data: Function
}

export default function ICPRPage2( props: Props ) {
    return (
        <div className="bg-white landscape .docs">
            <table className="table">
                <thead className="table-info">
                    <tr>
                        <th className="bordered text-info" >OUTPUT</th>
                        <th className="bordered text-info" >Success Indicators(Targets + Measures)</th>
                        <th className="bordered text-info" >Actual accomplishments</th>
                        <th className="bordered text-info" colSpan={4} style={{ border: 0 }}>
                            <p className="text-center">Rating</p>
                            <div className="row" style={{ flex: 1, transform: 'translateY(13px)' }}>
                                <span className="col-md-3 qeta" style={{ borderLeft: 0 }}> Q </span>
                                <span className="col-md-3 qeta"> E </span>
                                <span className="col-md-3 qeta"> T </span>
                                <span className="col-md-3 qeta" style={{ borderRight: 0 }}> A</span>
                            </div>
                        </th>
                        <th className="text-center bordered text-info">Remarks</th>
                    </tr>
                </thead>
                <thead>
                    <tr className="bordered">
                        <td colSpan={8}> <p className="mt-3 w-100">STRATEGIC PRIORITY</p></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bordered">
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                    </tr>
                    <tr className="bordered">
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                    </tr>
                </tbody>
                <thead className="bordered">
                    <tr>
                        <td colSpan={8}> <p className="mt-3 w-100">CORE FUNCTIONS</p></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                    </tr>
                    <tr>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                        <td className="bordered"></td>
                    </tr>
                </tbody>
                <br />
            </table>
            <table className="table">
                <thead>
                    <tr>
                        <td className="bordered" colSpan={8}> <p className="mt-3 w-100">Comments and Recommendations for Development Purposes</p></td>
                    </tr>
                </thead>
                <thead className="table-info">
                    <tr>
                        <th className="bordered text-info">Discussed with:</th>
                        <th className="bordered text-info">Date</th>
                        <th className="bordered text-info">Assessed by:</th>
                        <th className="bordered text-info">Date</th>
                        <th className="bordered text-info">Final Rating by: </th>
                        <th className="bordered text-info">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center bold underlined bordered">Jamel Eid Yassin</td>
                        <td className="text-center bold underlined bordered" rowSpan={2}>11/14/2021</td>
                        <td className="text-center bold underlined bordered">Jamel Eid Yassin</td>
                        <td className="text-center bold underlined bordered" rowSpan={2}>11/14/2021</td>
                        <td className="text-center bold underlined bordered">Jamel Eid Yassin</td>
                        <td className="text-center bold underlined bordered" rowSpan={2}>11/14/2021</td>
                    </tr>
                    <tr>
                        <td className="text-secodary bordered">Employee</td>
                        <td className="text-secodary bordered">Supervisor</td>
                        <td className="text-secodary bordered">Head of Agency</td>
                    </tr>
                </tbody>
                <thead>
                    <tr className="bordered">
                        <td colSpan={2}>Legend :</td>
                        <td className="bordered">Q-Quality</td>
                        <td className="bordered">E-Efficiency</td>
                        <td className="bordered">T-Timeless</td>
                        <td className="bordered">A-Average</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

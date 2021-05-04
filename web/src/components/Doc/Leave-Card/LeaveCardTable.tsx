import React from 'react'

export default function LeaveCardTable() {
    
    let rows = [1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,11,,1,1,1,1,1,1,1,1]
    
    return (
        <div>
            <table>
                <thead>
                     <tr>
                        <td className="text-center p-2" colSpan={2}>PERIOD</td>
                        <td className="text-center p-2" rowSpan={2}>PARTICULARS</td>
                        <td className="text-center p-2" colSpan={4}>VACATION LEAVE</td>
                        <td className="text-center p-2" colSpan={4}>SICK LEAVE</td>
                        <td className="text-center p-2" rowSpan={2}>Date and <br/> Action Taken<br/> on <br/>Application <br/>for Leave</td>
                        <td className="text-center p-2" ></td>
                        <td className="text-center p-2" colSpan={3}>SERVICE CREDIT</td>
                        <td className="text-center p-2" rowSpan={2}>Date and <br/> Action Taken<br/> on Application<br/> for Leave</td>
                    </tr>
                    <tr>
                        <td className="p-2" >YEAR</td>
                        <td className="p-2" >MONTH</td>
                        <td className="p-2" >Earned</td>
                        <td className="p-2" >Absence Undertime W/ Pay</td>
                        <td className="p-2" >Balance</td>
                        <td className="p-2" >Absence Undertime W/o Pay</td>
                        <td className="p-2" >Earned</td>
                        <td className="p-2" >Absence Undertime W/ Pay</td>
                        <td className="p-2" >Balance</td>
                        <td className="p-2" >Absence Undertime W/o Pay</td>
                        <td className="p-2" >PARTICULARS</td>
                        <td className="p-2" >Earned</td>
                        <td className="p-2" >Absence Undertime W/ Pay</td>
                        <td className="p-2" >Balance</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(()=>(
                            <tr>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                                <td className="p-2"></td>
                            </tr>
                        ))
                    }
                   
                 
                </tbody>
            </table>
        </div>
    )
}

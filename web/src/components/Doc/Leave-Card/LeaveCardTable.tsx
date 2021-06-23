import React from 'react'

type LeaveCard = {
    Year: any
    Month: any
    Particulars1: any
    Particulars2: any
    VacationEarned: any
    SickEarned: any
    ServiceCreditEarned: any
    WithPayVacation: any
    WithPayLeave: any
    WithPayServiceCredit: any
    BalanceVacation: any
    BalanceLeave: any
    BalanceServiceCredit: any
    WithoutPayVacation: any
    WithoutPayLeave: any
    DateAndActionTaken1: any
    DateAndActionTaken2: any
}

export default function LeaveCardTable( props: {
    data: LeaveCard[]
} ) {


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td className="text-center p-2" colSpan={2}>PERIOD</td>
                        <td className="text-center p-2" rowSpan={2}>PARTICULARS</td>
                        <td className="text-center p-2" colSpan={4}>VACATION LEAVE</td>
                        <td className="text-center p-2" colSpan={4}>SICK LEAVE</td>
                        <td className="text-center p-2" rowSpan={2}>Date and <br /> Action Taken<br /> on <br />Application <br />for Leave</td>
                        <td className="text-center p-2" ></td>
                        <td className="text-center p-2" colSpan={3}>SERVICE CREDIT</td>
                        <td className="text-center p-2" rowSpan={2}>Date and <br /> Action Taken<br /> on Application<br /> for Leave</td>
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
                    <tr>
                        <td colSpan={5}></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                    </tr>
                    {
                        props.data.map( ( leave: LeaveCard, index: any ) => (
                            <tr key={index}>
                                <td className="p-2">{leave.Year}</td>
                                <td className="p-2">{leave.Month}</td>
                                <td className="p-2">{leave.Particulars1}</td>
                                <td className="p-2 text-right">{leave.VacationEarned}</td>
                                <td className="p-2 text-right">{leave.WithPayVacation}</td>
                                <td className="p-2 text-right">{leave.BalanceVacation}</td>
                                <td className="p-2 text-right">{leave.VacationEarned}</td>
                                <td className="p-2 text-right">{leave.SickEarned}</td>
                                <td className="p-2 text-right">{leave.WithoutPayLeave}</td>
                                <td className="p-2 text-right">{leave.BalanceLeave}</td>
                                <td className="p-2 text-right">{leave.WithoutPayLeave}</td>
                                <td className="p-2">{leave.DateAndActionTaken1}</td>
                                <td className="p-2">{leave.Particulars2}</td>
                                <td className="p-2 text-right">{leave.ServiceCreditEarned}</td>
                                <td className="p-2 text-right">{leave.WithPayServiceCredit}</td>
                                <td className="p-2 text-right">{leave.BalanceServiceCredit}</td>
                                <td className="p-2">{leave.DateAndActionTaken2}</td>
                            </tr>
                        ) )
                    }


                </tbody>
            </table>
        </div>
    )
}

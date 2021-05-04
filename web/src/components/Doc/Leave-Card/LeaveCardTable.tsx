import React from 'react'

export default function LeaveCardTable() {
    
     interface StylesDictionary{
        [Key: string]: React.CSSProperties;
    }
    const styles:StylesDictionary = {
        td:{
            border:'1px solid rgba(150,150,150,.5)',
            padding:'2px'
        },
    }
    
    return (
        <div>
            <table>
                <thead>
                     <tr>
                        <td className="text-center" style={styles.td} colSpan={2}>PERIOD</td>
                        <td className="text-center" style={styles.td} rowSpan={2}>PARTICULARS</td>
                        <td className="text-center" style={styles.td} colSpan={4}>VACATION LEAVE</td>
                        <td className="text-center" style={styles.td} colSpan={4}>SICK LEAVE</td>
                        <td className="text-center" style={styles.td} rowSpan={2}>Date and <br/> Action Taken<br/> on <br/>Application <br/>for Leave</td>
                        <td className="text-center" style={styles.td} ></td>
                        <td className="text-center" style={styles.td} colSpan={3}>SERVICE CREDIT</td>
                        <td className="text-center" style={styles.td} rowSpan={2}>Date and <br/> Action Taken<br/> on Application<br/> for Leave</td>
                    </tr>
                    <tr>
                        <td style={styles.td} >YEAR</td>
                        <td style={styles.td} >MONTH</td>
                        <td style={styles.td} >Earned</td>
                        <td style={styles.td} >Absence Undertime W/ Pay</td>
                        <td style={styles.td} >Balance</td>
                        <td style={styles.td} >Absence Undertime W/o Pay</td>
                        <td style={styles.td} >Earned</td>
                        <td style={styles.td} >Absence Undertime W/ Pay</td>
                        <td style={styles.td} >Balance</td>
                        <td style={styles.td} >Absence Undertime W/o Pay</td>
                        <td style={styles.td} >PARTICULARS</td>
                        <td style={styles.td} >Earned</td>
                        <td style={styles.td} >Absence Undertime W/ Pay</td>
                        <td style={styles.td} >Balance</td>
                    </tr>
                </thead>
                <tbody>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                   <td style={styles.td}><input type="text" className="form-control" style={styles.input} /> </td>
                </tbody>
            </table>
        </div>
    )
}

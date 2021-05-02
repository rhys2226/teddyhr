import React from 'react'

export default function ICPRPage2() {
   
      interface StylesDictionary{
        [Key: string]: React.CSSProperties;
    }
    const styles:StylesDictionary = {
        page:{
            // width: '21cm',  height: '29.7cm', 
            width: '29.7cm',
            height:'21cm',
            display: 'block',
            boxShadow: '0 0 0.1cm rgba(0,0,0,0.1)',
            padding:'3rem',
        },
        input:{
            display:'inline-block',
            margin:'.1rem',
            border:'none'
        },
        textArea:{
            border:'none'
        },
        td:{
            border:'1px solid rgba(150,150,150,.5)',
            padding:'3px'
        },
        asignatory:{
            float:'right'
        } ,
        ratee:{
        float:'right',
           transform: `translate(${-80}px, ${-10}px)`,
           fontWeight:'bold'
        }  
    }
    
    
    return (
        <div style={styles.page}  className="bg-white">
            <table className="table">
                <thead>
                    <tr>
                        <th style={{width:'18%',  border:'1px solid rgba(150,150,150,.5)',}} className="text-center text-secondary ">OUTPUT</th>
                        <th style={{width:'18%',  border:'1px solid rgba(150,150,150,.5)',}} className="text-center text-secondary">Success Indicators(Targets + Measures)</th>
                        <th style={{width:'18%',  border:'1px solid rgba(150,150,150,.5)',}} className="text-center text-secondary">Actual accomplishments</th>
                        <th  style={styles.td} colSpan={4} className="text-center text-secondary">Rating
                        <br />
                        <br />
                        <span className="m-4"> Q </span>
                        <span className="m-4"> E </span>
                        <span className="m-4"> T </span>
                        <span className="m-4"> A</span>
                         </th>
                        <th style={{width:'18%',  border:'1px solid rgba(150,150,150,.5)',}} className="text-center text-secondary">Remarks</th>
                    </tr>
                </thead>
                <p className="mt-3 text-primary w-100">STRATEGIC PRIORITY</p>
                <tbody>
                    <tr>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                    </tr>
                    <tr>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                    </tr>
                </tbody>
                <p className="mt-3 text-primary"> CORE FUNCTIONS</p>
                 <tbody>
                    <tr>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                    </tr>
                    <tr>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><input type="text" style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                    </tr>
                </tbody>
            </table>
             <p className="mt-3 text-primary"> Comments and Recommendations for Development Purposes</p>
                 <table className="table">
                    <thead >
                        <tr>
                            <th  style={styles.td} className="text-secondary ">Discussed with:</th>
                            <th  style={styles.td} className="text-secondary ">Date</th>
                            <th  style={styles.td} className="text-secondary ">Assessed by:</th>
                            <th  style={styles.td} className="text-secondary ">Date</th>
                            <th  style={styles.td} className="text-secondary ">Final Rating by: </th>
                            <th  style={styles.td} className="text-secondary ">Date</th>
                        </tr>
                    </thead>
                     <tbody>
                    <tr>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea}  className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea}  className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea}  className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea}  className="form-control"/></td>
                    </tr>
                </tbody>
                 <tfoot>
                      <tr>
                        <td  className="text-secodary" style={styles.td}>Employee</td>
                        <td  className="text-secodary" style={styles.td}></td>
                        <td  className="text-secodary" style={styles.td}>Supervisor</td>
                        <td  className="text-secodary" style={styles.td}></td>
                        <td  className="text-secodary" style={styles.td}>Head of Agency</td>
                        <td  className="text-secodary" style={styles.td}></td>
                    </tr>
                </tfoot>
                </table>
                <p>Legend : &nbsp; &nbsp;     Q-Quality &nbsp; &nbsp;      E-Efficiency &nbsp; &nbsp;    T-Timeless &nbsp; &nbsp;    A-Average</p>
        </div>
    )
}

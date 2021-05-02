import React from 'react'

export default function ServiceRecord() {
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
        td:{
             border:'1px solid rgba(150,150,150,.5)',
            
        },
        td1:{
             border:'1px solid rgba(150,150,150,.5)',
             padding:0
            
        },
        textArea:{
            fontSize:'11px'
        },
        input:{
            border:'none'
        },
    }
    
    
    return (
        <div style={styles.page} className="bg-white">
            <h6 className="text-center">SERVICE RECORD</h6>
            <h6 className="text-center">(To be accomplished by Employer)</h6>
            <p>Form No. CR-2</p>
            <div className="row">
                <p className="col-md-1">Name: </p>
                <input type="text" className="form-control col-md-3 text-center"  placeholder="_____________________________________________________________________" 
                    style={styles.input}/>
                <input type="text" className="form-control col-md-3 text-center"  placeholder="_____________________________________________________________________" 
                    style={styles.input}/>
                <input type="text" className="form-control col-md-1 text-center"  placeholder="_____________________________________________________________________" 
                    style={styles.input}/>
                <input type="text" className="form-control col-md-4 text-center"  placeholder="_____________________________________________________________________" 
                    style={styles.input}/>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <p className="col-md-3  text-center">(Surname)</p>
                <p className="col-md-3  text-center">(Given Name)</p>
                <p className="col-md-1  text-center">(MI)</p>
                <p className="col-md-4  text-center">(if married woman, give also maiden name)	</p>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-1">Birth:</div>
                <input type="text" className="form-control col-md-3 text-center"  placeholder="_____________________________________________________________________" 
                    style={styles.input}/>
                <input type="text" className="form-control col-md-3 text-center"  placeholder="_____________________________________________________________________" 
                    style={styles.input}/>
                <input type="text" className="form-control col-md-5 text-center"  placeholder="_____________________________________________________________________" 
                    style={styles.input}/>
            </div>
           <div className="row">
               <div className="col-md-1"></div>
                <p className="col-md-3 text-center">(Date)</p>
                <p className="col-md-3 text-center">(Place Name)</p>
                <p className="col-md-5 text-center">(Date herein should be checked from birth or baptisimal certificate or other related documents)</p>
           </div>
            <br />
                
            <p className="text-center">
                This is to certify that the employee hereinabove actually rendered services in the office shown by the services below, each line of which is supported  by appointment and other papers actually issued by this office has been approved by the authorities.
            </p>
            <br />
            <table className="table">
                <thead >
                    <tr>
                        <th style={styles.td} colSpan={2} className="text-center text-secondary">SERVICES</th>
                        <th style={styles.td} colSpan={3} className="text-center text-secondary">RECORD OF <br />  APPOINTMENT</th>
                        <th style={styles.td} className="text-center text-secondary">OFFICE/ENTITY<br /> DIVISION</th>
                        <th style={styles.td} colSpan={2} className="text-center text-secondary"></th>
                        <th style={styles.td}  className="text-center text-secondary">L/A</th>
                        <th style={styles.td} colSpan={2} className="text-center text-secondary">SEPARATION</th>
                        <th style={styles.td} className="text-center text-secondary">Remarks</th>
                    </tr>
                </thead>
                 <thead >
                    <tr>
                        <th style={styles.td} className="text-center text-secondary">From</th>
                        <th style={styles.td} className="text-center text-secondary">To</th>
                        <th style={styles.td} className="text-center text-secondary">Designation</th>
                        <th style={styles.td} className="text-center text-secondary">Status <br/>(1)</th>
                        <th style={styles.td} className="text-center text-secondary">Salary<br/>(2)</th>
                        <th style={styles.td} className="text-center text-secondary">Station/Place <br/>of Assignment</th>
                        <th style={styles.td} className="text-center text-secondary">Division <br/>(3)</th>
                        <th style={styles.td} className="text-center text-secondary">w/out <br/> pay</th>
                        <th style={styles.td} className="text-center text-secondary">Division </th>
                        <th style={styles.td} className="text-center text-secondary">(4) <br/> Date</th>
                        <th style={styles.td} colSpan={2} className="text-center  text-secondary">Cause</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td1}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                        <td style={styles.td1}><input type="text" style={styles.textArea}  className="form-control text-center"/></td>
                        <td style={styles.td1}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                        <td style={styles.td1}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                        <td style={styles.td1}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                        <td style={styles.td1}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                        <td style={styles.td1}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                        <td style={styles.td1}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                        <td style={styles.td1}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                        <td style={styles.td1}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                        <td style={styles.td1} colSpan={2}><input type="text" style={styles.textArea} className="form-control text-center"/></td>
                    </tr>
                </tbody>
            </table>
              <p className="text-center">
                Issued in compliance with the Executive Order No. 54, dated August 10, 1954 and in accordance with Circular No. 58, dated August 10, 1954 of the System.
            </p>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-4">
                    <input placeholder="_____________________________________________________________________" type="text"
                    style={styles.input} className="form-control text-center"/>
                </div>
                <div className="col-md-4">
                    <input type="text" placeholder="_____________________________________________________________________" 
                    style={styles.input} className="form-control text-center"/>
                    </div>
                <div className="col-md-4">
                    <input type="text" placeholder="_____________________________________________________________________" 
                    style={styles.input} className="form-control text-center"/>
                </div>
            </div>
               <div className="row">
                   <div className="col-md-4 text-center">CERTIFIED CORRECT:</div>
                   <div className="col-md-4 text-center">Chief of Head of Office</div>
                   <div className="col-md-4 text-center">Designation</div>
               </div>
        </div>
    )
}

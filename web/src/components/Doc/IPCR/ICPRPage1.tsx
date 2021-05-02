import React, { CSSProperties } from 'react'

export default function ICPRPage1() {
    
      interface StylesDictionary{
        [Key: string]: CSSProperties;
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
        
        table:{
        },
        tr:{
            
        },
        textArea:{
            border:'none'
        },
        td:{
             border:'1px solid rgba(150,150,150,.5)',
            
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
        <div style={styles.page} className="bg-white">
            <h6 style={{fontWeight:'bold'}} className="text-center">OFFICE PERFORMANCE EVALUATION AND REVIEW (IPCR)</h6>
            <br/>
            <p>I, 
                <input type="text" style={styles.input} className=" form-control w-auto" placeholder="_______________________________"/>
                of the 
               <input type="text" style={styles.input} className="form-control w-auto" placeholder="_______________________________"/>
                , of ISCOF BAROTAC NUEVO CAMPUS commit to deliver and agree to be rated on the attainment of the following targets in accordance with the indicated measures for the period January to June 2020.
            </p>
            
            <div style={styles.asignatory}>  
                <input type="text" style={styles.input} className="text-center form-control w-100   " placeholder="_______________________________"/>
                <h6 style={styles.ratee}  >Ratee</h6>
            </div>
            
            <table className="w-100 table" style={styles.table}>
                <thead className="thead-dark">
                    <tr>
                        <th style={styles.td} >Reviewed by:</th>
                        <th style={styles.td} >Date</th>
                        <th style={styles.td} >Approved by:</th>
                        <th style={styles.td} >Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea} className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea}  className="form-control"/></td>
                        <td style={styles.td}><textarea style={styles.textArea}  className="form-control"/></td>
                    </tr>
                </tbody>
                <tfoot>
                      <tr>
                        <td  className="text-secodary" style={styles.td}>Immediate Supervisor</td>
                        <td  className="text-secodary" style={styles.td}></td>
                        <td  className="text-secodary" style={styles.td}>Head of Office</td>
                        <td  className="text-secodary" style={styles.td}></td>
                    </tr>
                </tfoot>
            </table>
            <br/>
            <br/>
            <br/>
           <div className="row">
               <div className="col-md-7"></div>
               <div className="col-md-5 ">
                    <div style={{border:'1px solid rgba(150,150,150,0.7)'}}className="rating card  p-3">
                    <p className="text-center">Rating Scale</p>
                    <p className="text-secodary">5- OUTSANDING</p>
                    <p className="text-secodary">4- VERY SATISFACTORY</p>
                    <p className="text-secodary">3- SATISFACTORY</p>
                    <p className="text-secodary">2- UNSATISFACTORY</p>
                    <p className="text-secodary">1-POOR</p>
                </div>
               </div>
           </div>
        </div>
    )
}

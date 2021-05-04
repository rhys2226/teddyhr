import React from 'react'
import LeaveCardTable from './LeaveCardTable'

export default function LeaveCard() {
    
    interface StylesDictionary{
        [Key: string]: React.CSSProperties;
    }
    const styles:StylesDictionary = {
        page:{
            // width: '21cm',  height: '29.7cm', 
            width: '33.02cm',
            height:'21cm',
            display: 'block',
            boxShadow: '0 0 0.1cm rgba(0,0,0,0.1)',
            padding:'3rem 1rem',
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
        <div style={styles.page} className="bg-white" >
            <p className="text-center">Republic of the Philippines</p>
            <p className="text-center">ILOILO STATE COLLEGE OF FISHERIES - MAIN POBLACION CAMPUS</p>
            <p className="text-center">Poblacion, Barotac Nuevo, Iloilo</p>
            <br/>
            <p className="text-center">EMPLOYEE LEAVE CARD</p>
            <br/>
            <br/>
            <br/>
            
            <div className="row">
                <div className="col-md-5 row">
                    <div className="col-md-2">
                        Name:
                    </div>
                    <div className="col-md-9">
                        <input className="form-control" style={styles.input} type="text" placeholder="______________________________"/>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 row">
                   <div className="col-md-5">
                        Date of Birth:
                    </div>
                    <div className="col-md-7">
                        <input className="form-control" style={styles.input} type="text" placeholder="______________________________"/>
                    </div>
                </div>
            </div>
             <div className="row">
                <div className="col-md-5 row">
                    <div className="col-md-2">
                      Position:
                    </div>
                    <div className="col-md-9">
                        <input className="form-control" style={styles.input} type="text" placeholder="______________________________"/>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 row">
                   <div className="col-md-5">
                      First day of Service:
                    </div>
                    <div className="col-md-7">
                        <input className="form-control" style={styles.input} type="text" placeholder="______________________________"/>
                    </div>
                </div>
            </div>
            <LeaveCardTable />
        </div>
    )
}

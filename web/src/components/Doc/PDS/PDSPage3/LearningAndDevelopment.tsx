import React from 'react'

export default function LearningAndDevelopment() {
    
    const learningAndDevelopment = [
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
        1
    ]
    
    return (
        <div>
             <div className="title ">
                <i className="text-white main">VII. LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED <br />
                <span className="text-white" style={{fontSize:'.6em'}}>
                (Start from the most recent L&D/training program and include only the relevant L&D/training taken for the last five (5) years for Division Chief/Executive/Managerial positions)
                </span>
                </i>
            </div>
            
            <div className="box row sub-title m-0 p-0 m-0 p-0">
                <div className="col-md-5 row sub-title m-0 p-0 d-flex aic jcc nbb nbt">
                    <p className="m-0 mb-0 pb-0 text-center fs-sm">30. &nbsp;TITLE OF LEARNING AND DEVELOPMENT INTERVENTIONS/TRAINING PROGRAMS <br />(Write in full)</p>
                </div>
                
                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc nbl nbr nbb nbt">
                    <div className="row p-0 m-0">
                        <p className="m-0 mb-0 text-center fs-sm col-md-12 border-bottom p-1 nbt mt-0 " >
                            26.&nbsp;INCLUSIVE DATES <br /> 
                            (mm/dd/yyyy)
                        </p>
                        <p className="m-0 mb-0 text-center fs-sm col-md-6 box nbl nbr nbb nbt">&nbsp;From</p>
                        <p className="m-0 mb-0 text-center fs-sm col-md-6 box nbr nbb nbt">&nbsp;To</p>
                    </div>
                </div>
                
                <div className="col-md-1 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt">
                    <p className="m-0 mb-0 pb-0 text-center fs-sm">&nbsp;NUMBER OF HOURS</p>
                </div>
                
                <div className="col-md-1 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt">
                    <p className="m-0 mb-0 pb-0 text-center fs-sm">&nbsp;Type of LD <br /> ( Managerial/<br/> Supervisory/<br/>Technical/etc)</p>
                </div>
                
                <div className="col-md-3 row sub-title m-0 p-0 d-flex aic jcc nbb nbt">
                    <p className="m-0 mb-0 pb-0 text-center fs-sm">&nbsp;CONDUCTED/ SPONSORED BY <br />(Write in full/Do not abbreviate)</p>
                </div>
                
                {
                    learningAndDevelopment.map(()=>(
                        <div className="col-md-12 row p-0 m-0">
                            <div className="col-md-5 row  m-0 p-0 d-flex aic nbr jcc bt bl br  p-1i bg-white">
                                <p className="m-0 mb-0 pb-0 text-center fs-sm">
                                    N/A
                                </p>
                            </div>
                            
                            <div className="col-md-2 m-0 p-0 row m-0 p-0 d-flex aic nbr jcc bt blp-1i bg-white">
                                <div className="row p-0 m-0">
                                    <p className="m-0 mb-0 text-center fs-sm col-md-6  nbl nbr nbb nbt">N/A</p>
                                    <p className="m-0 mb-0 text-center fs-sm col-md-6  nbr nbb nbt">N/A</p>
                                </div>
                            </div>  
                            
                            <div className="col-md-1 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                                <p className="m-0 mb-0 pb-0 text-center fs-sm">N/A</p>
                            </div>
                            
                            <div className="col-md-1 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                                <p className="m-0 mb-0 pb-0 text-center fs-sm">N/A</p>
                            </div>
                            
                            <div className="col-md-3 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                                <p className="m-0 mb-0 pb-0 text-center fs-sm">N/A</p>
                            </div>
                        </div>
                    ))
                }
                <div className="col-md-12 m-0 p-0 row border-bottom  cl sub-title  nbr nbb aic jcc d-flex bt" style={{flex:1,maxWidth:'100%'}}>
                    <p className="m-0 p-0 text-center d-flex aic jcc">
                        <i  className="text-center text-danger bold">(Continue on separate sheet if necessary)</i>
                    </p>
                </div>
            </div>
        </div>
    )
}
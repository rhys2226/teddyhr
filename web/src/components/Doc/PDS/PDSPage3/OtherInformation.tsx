import React from 'react'

export default function OtherInformation() {
    
    const OtherInformation = [1,2,3,4,5,6,7]
    
    return (
            <div>
                <div className="title ">
                    <i className="text-white main">
                        VIII. OTHER INFORMATION
                    </i>
                </div>
                <div className="box row sub-title m-0 p-0 m-0 p-0">
                    <div className="col-md-4 row sub-title m-0 p-0 d-flex aic jcc nbb nbt nbr">
                        <p className="m-0 mb-0 pb-0 text-center fs-sm">31. &nbsp;SPECIAL SKILLS and HOBBIES</p>
                    </div>
                    
                    <div className="col-md-5 row sub-title m-0 p-0 d-flex aic jcc nbb nbt nbr">
                        <p className="m-0 mb-0 pb-0 text-center fs-sm">31. &nbsp;NON-ACADEMIC DISTINCTIONS / RECOGNITION <br />(Write in full)</p>
                    </div>
                    
                    <div className="col-md-3 row sub-title m-0 p-0 d-flex aic jcc nbb nbt nbr">
                        <p className="m-0 mb-0 pb-0 text-center fs-sm">32. &nbsp;MEMBERSHIP IN ASSOCIATION/ORGANIZATION <br />(Write in full)</p>
                    </div>
                    
                    {
                        OtherInformation.map(()=>(
                             <div className="col-md-12 row p-0 m-0">
                                <div className="col-md-4 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                                    <p className="m-0 mb-0 pb-0 text-center fs-sm">N/A</p>
                                </div>
                                
                                <div className="col-md-5 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
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
                    
                    <div className="row col-md-12 ">
                        <div className="col-md-2 m-0 p-0 row m-0 p-0 box  d-flex aic jcc  sig nbr nbb nbl">
                            <p className="m-0 mb-0 p-1 text-center bold"><i>SIGNATURE</i></p>
                        </div>
                        <div className="col-md-4 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc sig1  nbb">
                            <p className="m-0 mb-0 p-1 text-center bold underlined">N/A</p>
                        </div>
                        <div className="col-md-2 m-0 p-0 row m-0 p-0 box  d-flex aic jcc sig2  nbb bl">
                            <p className="m-0 mb-0 p-1 text-center bold"><i>DATE</i></p>
                        </div>
                        <div className="col-md-4 m-0 p-0 row m-0 p-0 box  d-flex aic jcc  bg-white sig3  nbb">
                            <p className="m-0 mb-0 p-1 text-center bold underlined">N/A</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

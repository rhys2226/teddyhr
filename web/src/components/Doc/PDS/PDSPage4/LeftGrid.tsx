import React from 'react'

export default function LeftGrid() {
    
    const references = [
        1,2,3
    ]
    
    return (
        <div className="row p-0 m-0">
           <div className="col-md-12 sub-title pb-1 pt-1">41. REFERENCES &nbsp;
                <span>
                    <i className="text-danger bold">
                        (Person not related by consanguinity or affinity to applicant /appointee)
                    </i>
                </span>
           </div>
            <div className="col-md-6 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt p-1">
                    <p className="m-0 mb-0 pb-0 text-center fs-sm">NAME</p>
            </div>
            <div className="col-md-4 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt p-1">
                    <p className="m-0 mb-0 pb-0 text-center fs-sm">ADDRESS</p>
                </div>
            <div className="col-md-2 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt br p-1">
                <p className="m-0 mb-0 pb-0 text-center fs-sm">TEL. NO.</p>
            </div>
            {
                references.map(()=>(
                    <div className="col-md-12 row p-0 m-0">
                        <div className="col-md-6 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                            <p className="m-0 mb-0 pb-0 text-center fs-sm bold underlined">N/A</p>
                        </div>
                         <div className="col-md-4 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                            <p className="m-0 mb-0 pb-0 text-center fs-sm bold underlined">N/A</p>
                        </div>
                         <div className="col-md-2 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white br">
                            <p className="m-0 mb-0 pb-0 text-center fs-sm bold underlined">N/A</p>
                        </div>
                    </div>
                ))
            }
            <div className="col-md-12 sub-title pb-1 pt-1">
                42. I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I  agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.
           </div>
            <div className="col-md-12 m-0 p-0 pb-1 pt-2 pl-2 row pb-2">
                <div className="col-md-6 box  p-0 m-0">
                        <div className="col-md-12 sub-title p-0 m-0 nbr nbt nbl">
                            Government Issued ID (i.e.Passport, GSIS, SSS, PRC, Driver's License, etc)PLEASE INDICATE ID Number and Date of Issuance
                        </div>
                        <div className="col-md-12  p-1 m-0">
                            Government Issued ID: 
                        </div>
                        <div className="col-md-12 p-1 m-0 bt">
                           ID/License/Passport No.: 
                        </div>
                        <div className="col-md-12 p-1 m-0 bt">
                           Date/Place of Issuance:
                        </div>
                </div>
                <div className="col-md-6 box m-0 p-0">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="col-md-12 sub-title p-0 m-0  box text-center">
                        Signature (Sign inside the box)
                    </div>
                    <br />
                    <div className="col-md-12 sub-title p-0 m-0  box text-center">
                        Date Accomplished
                    </div>
                </div>
            </div>
        </div>
    )
}

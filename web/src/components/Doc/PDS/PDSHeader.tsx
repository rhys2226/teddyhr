import React from 'react'

export default function PDSHeader() {
    return (
        <div>
            <p>CS Form No. 212</p>
            <p>Revised 2017</p>
            <h1>PERSONAL DATA SHEET</h1>
            <p>
                WARNING: Any misrepresentation made in the Personal Data Sheet and the Work Experience Sheet shall cause the filing of administrative/criminal case/s against the person concerned
                .</p>
            <p>
                READ THE ATTACHED GUIDE TO FILLING OUT THE PERSONAL DATA SHEET (PDS) BEFORE ACCOMPLISHING THE PDS FORM.
            </p>
            <div className="row">
                <div className="col-md-9">
                    Print legibly. Tick appropriate boxes (     ) and use separate sheet if necessary. Indicate N/A if not applicable.  DO NOT ABBREVIATE.
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-3">1. CS ID No.
                        </div>
                        <div className="col-md-3">
                             (Do not fill up. For CSC use only)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

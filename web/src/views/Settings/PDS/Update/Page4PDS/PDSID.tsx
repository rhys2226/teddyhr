import React from 'react'
import { Fire } from '../../../../../components/Alerts/Alert'

export default function PDSID( props: any ) {
    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-4">IDENTIFICATION</h5>

            <h6 className="bold mt-4 mb-4 text-info">Government Issued ID (i.e.Passport, GSIS, SSS, PRC, Driver's License, etc)PLEASE INDICATE ID Number and Date of Issuance</h6>

            <div className="row mb-4">
                <div className="col-md-4 mb-4">
                    <label htmlFor="">Government Issued ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-4 mb-4">
                    <label htmlFor="">ID/License/Passport No</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-4 mb-4">
                    <label htmlFor="">Date/Place of IssuancE</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="mt-2 mb-4 d-flex aij jcc">
                <button onClick={() => {
                    Fire(
                        'Update Identification?',
                        ' I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
                        'info',
                        () => { }
                    )
                }} className="btn btn-outline-primary">Update Identification</button>
            </div>
        </div>
    )
}

import React from 'react'
import { Fire } from '../../../../../components/Alerts/Alert'

export default function PDSEligibility( props: any ) {
    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-4">CIVIL SERVICE ELIGIBILITY</h5>
            <h6 className="bold mt-4 mb-4 text-info">CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER
            SPECIAL LAWS/ CES/ CSEEBARANGAY ELIGIBILITY / DRIVER'S LICENSE</h6>

            <div className="col-md-6 mb-4 p-0 m-0">
                <button className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span> Add Eligibility</span>
                </button>
            </div>

            <h6 className="bold mt-4 mb-4 text-info">ELIGIBILITY 1</h6>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">ELIGIBILITY TITILE</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">RATING(If Applicable)</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">DATE OF EXAMINATION / CONFERMENT</label>
                    <input type="text" className="form-control" />
                </div>  <div className="col-md-12 mb-4">
                    <label htmlFor=""> PLACE OF EXAMINATION</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">LICENSE NUMBER</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">DATE OF VALIDITY</label>
                    <input type="date" className="form-control" />
                </div>
            </div>

            <div className="mt-2 mb-4 d-flex aij jcc">
                <button onClick={() => {
                    Fire(
                        'Update Personal Data Sheet?',
                        ' I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
                        'info',
                        () => { }
                    )
                }} className="btn btn-outline-primary">Update Eligibility</button>
            </div>
        </div>
    )
}

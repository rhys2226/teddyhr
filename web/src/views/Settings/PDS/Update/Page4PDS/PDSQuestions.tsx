import React from 'react'
import { Fire } from '../../../../../components/Alerts/Alert'

export default function PDSQuestions( props: any ) {
    return (
        <div className="card-body card">
            <h6 className="bold mt-4 mb-4 text-info">Are you related by consanguinity or affinity to the appointing or recommending authority, or to the chief of bureau or office or to the person who has immediate supervision over you Bureau or Department where you will be apppointed.</h6>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Within the third degree?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Within the fourth degree (for Local Government Unit - Career Employees)?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <br />
            <br />
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Have you ever been found guilty of any administrative offense?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Have you been criminally charged before any court?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <br />
            <br />
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Have you ever been convicted of any crime or violation of any law, decree, ordinance or regulation by any court or tribunal?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <br />
            <br />
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Have you ever been separated from the service in any of the following modes: resignation, retirement, dropped from the rolls, dismissal, termination, end of term, finished contract or phased out (abolition) in the public or private sector?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <br />
            <br />
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor=""> Have you ever been a candidate in a national or local election held within the last year (except Barangay election)?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <br />
            <br />
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Have you resigned from the government service during the three (3)-month period before the last election to promote/actively campaign for a national or local candidate?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <br />
            <br />
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Have you acquired the status of an immigrant or permanent resident of another country?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <h6 className="bold mt-4 mb-4 text-info"> Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare Act of 2000 (RA 8972), please answer the following items:</h6>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor=""> Are you a member of any indigenous group?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor=""> Are you a person with disability?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Are you a solo parent?</label>
                    <select className="form-control">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">If YES, give details</label>
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
                }} className="btn btn-outline-primary">Update Answers</button>
            </div>
        </div>
    )
}

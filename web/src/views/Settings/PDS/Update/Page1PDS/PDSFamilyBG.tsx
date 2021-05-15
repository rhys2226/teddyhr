import React from 'react'
import { Fire } from '../../../../../components/Alerts/Alert'

export default function PDSFamilyBG() {
    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-4">FAMILY BACKGROUND</h5>
            <div className="row mb-4">
                <div className="col-md-3">
                    <label htmlFor="">SPOUSE'S  SURNAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">FIRST NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">MIDDLE  NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">NAME EXTENSION</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-3">
                    <label htmlFor="">OCCUPATION</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">EMPLOYER/BUSINESS NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">BUSINESS ADDRESS</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">TELEPHONE NO.</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-3">
                    <label htmlFor="">FATHERS'S  SURNAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">FIRST NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">MIDDLE  NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">NAME EXTENSION</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-3">
                    <label htmlFor="">MOTHERS'S  SURNAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">FIRST NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">MIDDLE  NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">NAME EXTENSION</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <h5 className="col-md-12 bold m-0 p-0  mt-3 mb-3">CHILDRENS</h5>
            <div className="col-md-6 mb-4 p-0 m-0">
                <button className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span> Add Child</span>
                </button>
            </div>
            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="">NAME OF CHILD</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="">DATE OF BIRTH </label>
                    <input type="date" className="form-control" />
                </div>
            </div>

            <div className="mt-5 mb-4 d-flex aij jcc">
                <button onClick={() => {
                    Fire(
                        'Update Personal Data Sheet?',
                        ' I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
                        'info',
                        () => { }
                    )
                }}
                    className="btn btn-outline-primary">Update Family Background</button>
            </div>
        </div>
    )
}

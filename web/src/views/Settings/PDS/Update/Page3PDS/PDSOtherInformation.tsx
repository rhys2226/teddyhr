import React from 'react'

export default function PDSOtherInformation() {
    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-4">OTHER INFORMATION</h5>

            <div className="col-md-6 mb-4 p-0 m-0">
                <button className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span> Add Other Info</span>
                </button>
            </div>

            <h6 className="bold mt-4 mb-4 text-info">OTHER INFO 1</h6>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">SPECIAL SKILLS and HOBBIES</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">NON-ACADEMIC DISTINCTIONS / RECOGNITION (Write in full)</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor=""> MEMBERSHIP IN ASSOCIATION/ORGANIZATION(Write in full)</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="mt-2 mb-4 d-flex aij jcc">
                <button className="btn btn-outline-primary">Update Other Information</button>
            </div>
        </div>
    )
}

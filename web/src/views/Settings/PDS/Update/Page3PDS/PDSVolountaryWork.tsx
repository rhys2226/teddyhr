import React from 'react'

export default function PDSVolountaryWork() {
    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-4">VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERNMENT / PEOPLE / VOLUNTARY ORGANIZATION/S</h5>

            <div className="col-md-6 mb-4 p-0 m-0">
                <button className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span> Add Voluntary Work or Involvement</span>
                </button>
            </div>

            <h6 className="bold mt-4 mb-4 text-info">VOLUNTARY WORK OR INVOLVEMENT 1</h6>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor="">NAME & ADDRESS OF ORGANIZATION (Write in full)</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">FROM</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">TO</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="col-md-3 mb-4">
                    <label htmlFor="">NUMBER OF HOURS</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="col-md-9 mb-4">
                    <label htmlFor=""> DEPARTMENT / AGENCY / OFFICE / COMPANY (Write in full/Do not abbreviate)</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="mt-2 mb-4 d-flex aij jcc">
                <button className="btn btn-outline-primary">Update Voluntary Work or Involvement</button>
            </div>

        </div>
    )
}

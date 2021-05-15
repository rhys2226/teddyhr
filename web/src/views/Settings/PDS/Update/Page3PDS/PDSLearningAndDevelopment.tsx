import React from 'react'

export default function PDSLearningAndDevelopment() {
    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-4">LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED
            <br />
                <small className="text-muted" style={{ fontSize: '.8rem' }}> (START FROM THE MOST RECENT L&D/TRAINING PROGRAM AND INCLUDE ONLY THE RELEVANT L&D/TRAINING TAKEN FOR THE LAST FIVE (5) YEARS FOR DIVISION CHIEF/EXECUTIVE/MANAGERIAL POSITIONS)</small>
            </h5>

            <div className="col-md-6 mb-4 p-0 m-0">
                <button className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span> Add L&D</span>
                </button>
            </div>

            <h6 className="bold mt-4 mb-4 text-info">L&D INTERVENTIONS/TRAINING PROGRAMS ATTENDED 1</h6>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <label htmlFor=""> TITLE OF LEARNING AND DEVELOPMENT INTERVENTIONS/TRAINING PROGRAMS (Write in full)</label>
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
                <div className="col-md-12 mb-4">
                    <label htmlFor="">NUMBER OF HOURS</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">Type of LD ( Managerial/ Supervisory/ Technical/etc) CONDUCTED/ SPONSORED BY</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor=""> CONDUCTED/ SPONSORED BY(Write in full/Do not abbreviate)</label>
                    <input type="text" className="form-control" />
                </div>
            </div>


            <div className="mt-2 mb-4 d-flex aij jcc">
                <button className="btn btn-outline-primary">Update L&D Attended</button>
            </div>
        </div>
    )
}

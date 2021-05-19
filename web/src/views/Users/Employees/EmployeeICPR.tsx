import React from 'react'
import { Alert, Fire } from '../../../components/Alerts/Alert'

export default function EmployeeICPR() {
    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-0 text-center">OFFICE PERFORMANCE EVALUATION AND REVIEW (IPCR)</h5>
            <p className="text-info small mb-5 mt-0 text-center">This form will generate ICPR. Please review before submitting</p>
            <div className="row mb-4">
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Reviewed by (Immediate Supervisor)</label>
                    <input value="Ryan Agsaluna" type="text" disabled className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Reviewed Date</label>
                    <input type="date" disabled className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Approved by (Head of Office)</label>
                    <input value="Jamel Yassin" type="text" disabled className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Approved Date</label>
                    <input type="date" disabled className="form-control" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <p className="text-info small mt-0 ">Ratings:</p>
                    <ul >
                        <li className="small" ><span className="bold">5</span> - OUTSANDING</li>
                        <li className="small" ><span className="bold">4</span> - VERY SATISFACTORY</li>
                        <li className="small" ><span className="bold">3</span> - SATISFACTORY</li>
                        <li className="small" ><span className="bold">2</span> - UNSATISFACTORY</li>
                        <li className="small" ><span className="bold">1</span> - POOR</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <p className="text-info small mt-0 ">Legends:</p>
                    <ul >
                        <li className="small" ><span className="bold">Q</span> - Quality</li>
                        <li className="small" ><span className="bold">E</span> - EfficiencyY</li>
                        <li className="small" ><span className="bold">T</span> - Timeless</li>
                        <li className="small" ><span className="bold">A</span> - Average</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5 m-0">
                <p className="col-md-12 text-success  mt-0 ">STRATEGIC PRIORITY</p>
                <div className="col-md-12 row  pt-1">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">OUTPUT</label>
                        <textarea className="form-control" ></textarea>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">Success Indicators(Targets + Measures)</label>
                        <textarea className="form-control" ></textarea>
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Quality</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Efficiency</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Timeless</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Average</label>
                        <input type="number" className="form-control" />
                    </div>
                </div>
                <div className="col-md-12 row  pt-1">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">OUTPUT</label>
                        <textarea className="form-control" ></textarea>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">Success Indicators(Targets + Measures)</label>
                        <textarea className="form-control" ></textarea>
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Quality</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Efficiency</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Timeless</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Average</label>
                        <input type="number" className="form-control" />
                    </div>
                </div>
            </div>

            <div className="row mt-5 m-0">
                <p className="col-md-12 text-success  mt-0 ">CORE FUNCTIONS</p>
                <div className="col-md-12 row  pt-1">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">OUTPUT</label>
                        <textarea className="form-control" ></textarea>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">Success Indicators(Targets + Measures)</label>
                        <textarea className="form-control" ></textarea>
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Quality</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Efficiency</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Timeless</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Average</label>
                        <input type="number" className="form-control" />
                    </div>
                </div>
                <div className="col-md-12 row  pt-1">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">OUTPUT</label>
                        <textarea className="form-control" ></textarea>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">Success Indicators(Targets + Measures)</label>
                        <textarea className="form-control" ></textarea>
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Quality</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Efficiency</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Timeless</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">Average</label>
                        <input type="number" className="form-control" />
                    </div>
                </div>
            </div>


            <div className="row mt-5 m-0">
                <p className="col-md-12 text-info  mt-0 ">Comments and Recommendations for Development Purposes</p>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Discussed  by (Employee)</label>
                    <input value="Ryan Agsaluna" type="text" disabled className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Discussed Date</label>
                    <input type="date" disabled className="form-control" />
                </div>

                <div className="col-md-6 mb-4">
                    <label htmlFor="">Assessed   by (Supervisor)</label>
                    <input value="Ryan Agsaluna" type="text" disabled className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Assessment Date</label>
                    <input type="date" disabled className="form-control" />
                </div>

                <div className="col-md-6 mb-4">
                    <label htmlFor="">Final Rating by (Head of Agency)</label>
                    <input value="Ryan Agsaluna" type="text" disabled className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Final Rating Date</label>
                    <input type="date" disabled className="form-control" />
                </div>
            </div>

            <div className="mt-5 mb-4 d-flex aij jcc">
                <button onClick={() => {
                    Fire(
                        'Submit Rating Review',
                        'This form will generate ICPR. Make sure you have thourough review before submitting. Continue?',
                        'info',
                        () => {
                            Alert( 'Success', '', 'success' )
                        }
                    )
                }} className="btn btn-outline-primary">Submit Rating</button>
            </div>
        </div>
    )
}

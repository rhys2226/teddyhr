import React from 'react'
import Competencies from './Competencies'
import ContactClinets from './ContactClinets'

export default function AddVancancy() {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">

                <div className="card shadow mb-4">
                    <div className="card-header">
                        <strong className="card-title">Vacancy form</strong>
                    </div>
                    <div className="card-body">
                        <form>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Position/Title</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Item Number</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Salary Grade</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Governmental Unit
                                    <span className="text-info"> (optional)</span>
                                </label>
                                <div className="col-sm-9">
                                    <select className="form-control" >
                                        <option >Province</option>
                                        <option >City </option>
                                        <option >Municipality </option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Class
                                    <span className="text-info"> (optional)</span>
                                </label>
                                <div className="col-sm-9">
                                    <select className="form-control" >
                                        <option >1st</option>
                                        <option >2nd</option>
                                        <option >3rd</option>
                                        <option >4th</option>
                                        <option >5th</option>
                                        <option >6th</option>
                                        <option >Special</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Department, Corporation or Agency / Local Govt.</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Bureau OR Office</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Department / Branch / Dviision</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Workstation / Place of Work</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Present Approp Act</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Previous Approp Act</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Salary Authorized</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Other Compensation</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Position Title of Immediate Supervisor</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Position Title of Next Higher Supervisor</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Position Title, and Item of Those Directly Supervised</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Position Title, and Item of Those Directly Supervised</label>
                                <div className="col-sm-9">
                                    <button type="button" className="btn btn-outline-primary mb-5">Add</button>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label >POSITION TITLE</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label >ITEM NUMBER</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row mt-5">
                                <label className="col-sm-3 col-form-label">Machine, Equipement, Tools, etc., Used regularly in performance of work</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" ></textarea>
                                </div>
                            </div>

                            <h5 className="col-12 text-center col-form-label  bold mb-0">17.  CONTACTS / CLIENTS / STAKEHOLDERS</h5>

                            <div className="col-md-12 row p-1 mt-0 card mb-5">
                                <table className="table ">
                                    <thead className="table-info">
                                        <tr>
                                            <th className="text-info">Internal</th>
                                            <th className="text-center text-info">Occasional</th>
                                            <th className="text-center text-info">Frequent</th>
                                            <th className="text-info">External</th>
                                            <th className="text-center text-info">Occasional</th>
                                            <th className="text-center text-info">Frequent</th>
                                        </tr>
                                    </thead>
                                    <ContactClinets />
                                </table>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Unit or Section</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Job Summary</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" ></textarea>
                                </div>
                            </div>


                            <div className="form-group row mt-5">
                                <label className="col-sm-3 col-form-label bold">Qualifications
                                <br />
                                    <span style={{ fontWeight: 200 }} className="text-info">
                                        (Separated with comma (,))
                                </span> </label>
                                <div className="col-sm-9">
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Education</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" ></textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Experience</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" ></textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Training</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" ></textarea>
                                </div>
                            </div>

                            <div className="form-group row mb-5">
                                <label className="col-sm-3 col-form-label">Eligibility</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" ></textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Core Competencies</label>
                                <div className="col-sm-4">
                                    <textarea className="form-control" ></textarea>
                                </div>
                                <label className="col-sm-2 col-form-label">Competency Level</label>
                                <div className="col-sm-4">
                                    <textarea className="form-control" ></textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Leadership Competencies</label>
                                <div className="col-sm-4">
                                    <textarea className="form-control" ></textarea>
                                </div>
                                <label className="col-sm-2 col-form-label">Competency Level</label>
                                <div className="col-sm-4">
                                    <textarea className="form-control" ></textarea>
                                </div>
                            </div>

                            <h5 className="col-12 text-center col-form-label  bold mb-0">Statement of Dutioes and Responsibilitiese (Technical Competencies)</h5>

                            <div className="col-md-12 row p-1 mt-0 card mb-5">
                                <table className="table ">
                                    <thead className="table-success">
                                        <tr>
                                            <th className="text-success">Percentage of Working Time </th>
                                            <th className="text-success">(State the duties and responsibilities here:)</th>
                                            <th className="text-success">Competency Level</th>
                                            <th className="text-success">
                                                <button type="button" className="btn btn-success d-flex">
                                                    <i className="fe fe-plus"></i> Add
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <Competencies />
                                </table>
                            </div>




                            <div className="form-group mb-2 float-right mt-5">
                                <button type="submit" className="btn btn-primary">Post Vacancy</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

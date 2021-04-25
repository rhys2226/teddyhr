import React from 'react'

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
                                <label className="col-sm-3 col-form-label">Vacancy Name</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Minimum Experience</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Office</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Seniority Level</label>
                                <div className="col-sm-9">
                                    <select className="form-control" >
                                        <option value="" selected disabled>Choose..</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Employment Type</label>
                                <div className="col-sm-9">
                                    <select className="form-control" >
                                        <option value="" selected disabled>Choose..</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Industry</label>
                                <div className="col-sm-9">
                                    <select className="form-control" >
                                        <option value="" selected disabled>Choose..</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >Qualifications</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control"  ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >Job Desicription</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control"  ></textarea>
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <button type="submit" className="btn btn-primary">Post Vacancy</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

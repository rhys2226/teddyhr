import React from 'react'

export default function WorkExperience() {
    return (
        <div className="col-md-12">
            <div className="card mb-4 shadow">
                <div className="card-body my-n3">
                    <div className="row align-items-center">
                        <div className="col-1 text-center">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-coffee fe-24 text-danger"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="h5 mt-4 mb-1">Work Experiences</h3>
                            </a>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="" className="d-flex justify-content-between text-muted"><span>Account Settings</span><i className="fe fe-chevron-right"></i></a>
                </div>
            </div>
        </div>
    )
}

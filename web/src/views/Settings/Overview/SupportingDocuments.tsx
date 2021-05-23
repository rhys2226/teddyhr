import React from 'react'

export default function SupportingDocuments() {
    return (
        <div className="col-md-12  mt-4">
            <br />
            <h6 className="mb-3">Supporting Documents</h6>
            <table className="table table-borderless table-striped ">
                <thead className="table-info">
                    <tr role="row">
                        <th className="text-info">..</th>
                        <th className="text-info">Name</th>
                        <th className="text-info">Date Uploaded</th>
                        <th className="text-info">Last Updated</th>
                        <th className="text-info"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">
                            <div className="circle circle-sm bg-light">
                                <i className="fe fe-hard-drive text-muted"></i>
                            </div>
                            <span className="dot dot-md bg-warning mr-1"></span>
                        </th>
                        <td>Curriculum Vitae.pdf</td>
                        <td>2020-12-26 01:32:21</td>
                        <td>2020-12-26 01:32:21</td>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-sm dropdown-toggle more-vertical" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="text-muted sr-only">Action</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Download</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col">
                            <div className="circle circle-sm bg-light">
                                <i className="fe fe-hard-drive text-muted"></i>
                            </div>
                            <span className="dot dot-md bg-warning mr-1"></span>
                        </th>
                        <td>Application Letter.docx</td>
                        <td>2020-12-26 01:32:21</td>
                        <td>2020-12-26 01:32:21</td>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-sm dropdown-toggle more-vertical" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="text-muted sr-only">Action</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Download</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

import React from 'react'
import {formatImageUrl, toDate} from '../../../helpers'

export default function SupportingDocuments(props: any) {
    return (
        <div className="mt-4 col-md-12">
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
                    {props.data.length !== 0 ? (
                        ''
                    ) : (
                        <tr>
                            <td className="text-center text-muted" colSpan={5}>
                                No supporting documents yet..
                            </td>
                        </tr>
                    )}
                    {props.data.map((attachment: any, index: any) => (
                        <tr>
                            <th scope="col">
                                <div className="circle circle-sm bg-light">
                                    <i className="fe fe-hard-drive text-muted"></i>
                                </div>
                                <span className="mr-1 dot dot-md bg-warning"></span>
                            </th>
                            <td>{attachment.Name}</td>
                            <td>{toDate(attachment.created_at)}</td>
                            <td>{toDate(attachment.updated_at)}</td>
                            <td>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-sm dropdown-toggle more-vertical"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        <span className="sr-only text-muted">
                                            Action
                                        </span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a
                                            className="dropdown-item"
                                            target="_blank"
                                            href={formatImageUrl(
                                                attachment.URL,
                                            )}>
                                            View
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

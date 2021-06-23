import React from 'react'

export default function PersonalForms( props: any ) {
    return (
        <div className="col-md-12  mt-2">
            <br />
            <h6 className="mb-3">Personal Forms</h6>
            <table className="table table-borderless table-striped ">
                <thead className="table-success">
                    <tr role="row">
                        <th className="text-success">..</th>
                        <th className="text-success">Name</th>
                        <th className="text-success">Date Uploaded</th>
                        <th className="text-success">Last Updated</th>
                        <th className="text-success"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center text-muted" colSpan={5}>No personal forms yet..</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

import React from 'react'
import Pagination from '../../components/Table/Pagination'
import Subordinates from './Subordinates'


export default function Supervisor() {

	const [ add, setAdd ] = React.useState( false )

	return (
		<div>
			<div className="col-md-12 my-4">
				<h2 className="h4 mb-1">Supervisors</h2>
				<p className="mb-3 text-muted">Displaying List of Supervisors and their subordinates</p>
				<div className="card shadow">
					<div className="card-body">
						<div className="toolbar">
							<div className="form-row">
								<div className="form-group col-auto">
									<label className="sr-only">Search</label>
									<input type="text" className="form-control" id="search1" value="" placeholder="Search" />
								</div>
								<div className="form-group col-auto">
									<button
										onClick={() => {
											setAdd( add === false ? true : false )
										}}
										className="btn btn-outline-primary">New Subordinate</button>
								</div>
							</div>
						</div>
						<table className="table table-borderless table-hover">
							<thead>
								<tr>
									<th className="text-dark">Department</th>
									<th className="text-primary">Supervisor</th>
									<th className="text-info">Subordiante</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr style={{ display: add === true ? 'table-row' : 'none' }}>
									<td> <input className="form-control" /></td>
									<td>
										<select className="form-control">
											<option selected disabled>Choose..</option>
										</select>
									</td>
									<td>
										<select className="form-control">
											<option selected disabled>Choose..</option>
										</select>
									</td>
									<td>
										<button
											onClick={() => {
												setAdd(
													add === false ? true : false
												)
											}}
											className="btn btn-primary">Submit</button>
									</td>
								</tr>
								<tr>
									<td> <i className="fe fe-rss"></i> &nbsp; Management Information System</td>
									<td>
										<div className="avatar avatar-sm">
											<img src="http://localhost:3000/assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
										</div>
										<p>Ryan Agsaluna</p>
									</td>
									<td>
										<button className="btn btn-outline-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Subordinates
                                        </button>
										<div className="dropdown-menu dropdown-menu-right mt-2">
										</div>
									</td>
									<td></td>
								</tr>
							</tbody>
						</table>
						<br />
						<Pagination
							Pages={() => {
								let pages = []
								for ( let index in [ 1, 2, 3, 4, 5, 6 ] ) {
									pages.push( parseInt( index ) + 1 )
								}
								return pages
							}}
							callback={( callback: Function ) => {
								callback()
							}}
						/>
					</div>
				</div>
			</div>
		</div >
	)
}
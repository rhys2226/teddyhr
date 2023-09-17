import React from 'react'
import {Alert, Fire, noData} from '../../../components/Alerts/Alert'
import {Auth} from '../../../services/auth.service'
import SupervisorPlaceholder from '../../Supervisor/SupervisorPlaceholder'
import LargeModal from './../../../components/Modals/LargeModal'
import ApplicantSupportingDocument from '../../Users/Applicants/ApplicantSupportingDocument'
import ScholarshipTableButtons from './ScholarshipTableButtons'
import {ScholarShipAvailabilityEnum} from '../../../core/enum/scholarship-availability.enum'

export default function Scholarship() {
    const [scholarships, setscholarships] = React.useState([])
    const [filteredData, setFilteredData] = React.useState([])
    const [modal, setmodal] = React.useState(<div></div>)
    const [fetched, setfetched]: any = React.useState(false)
    const user: any = localStorage.getItem('user')
    const id = JSON.parse(user).id
    const userData: any = localStorage.getItem('user')
    const type = JSON.parse(userData).Type

    React.useEffect(() => {
        getScholarships()
    }, [])

    async function getScholarships() {
        const auth = new Auth('scholarships')
        auth.fetch({}).then((data: any) => {
            setscholarships(data)
            setFilteredData(data)
            setfetched(true)
        })
    }

    const search = (e: any) => {
        const keyword = e.target.value
        keyword === ''
            ? setFilteredData(scholarships)
            : setFilteredData(
                  scholarships.filter((data: any) =>
                      data.Title.toLowerCase().includes(keyword),
                  ),
              )
    }

    const renderData = () => {
        noData()
        if (scholarships.length === 0) {
            return (
                <tr>
                    <td className="text-center text-muted" colSpan={4}>
                        No sholarships yet...
                    </td>
                </tr>
            )
        }
    }

    return (
        <div>
            <div className="my-4 col-md-12">
                <h2 className="mb-1 ">Scholarships</h2>
                <p className="mb-3 text-muted">
                    Displaying List of Sholarship in descending order
                </p>
                <div className="shadow card">
                    <div className="card-body">
                        <div className="toolbar">
                            <div className="form-row">
                                <div className="col-auto form-group">
                                    <label className="sr-only">Search</label>
                                    <input
                                        onChange={(e) => {
                                            search(e)
                                        }}
                                        type="text"
                                        className="form-control"
                                        id="search1"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-success">#</th>
                                    <th className="text-success"></th>
                                    <th className="text-success">
                                        Title of Scholarship
                                    </th>
                                    <th className="text-success">
                                        Availability
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <SupervisorPlaceholder show={!fetched} />
                                {renderData()}
                                {filteredData.map(
                                    (scholarship: any, index: any) => (
                                        <tr>
                                            <td>{index + 1}</td>

                                            <td>
                                                <div className="circle circle-sm bg-light">
                                                    <i className="fe fe-columns text-muted"></i>
                                                </div>
                                                <span className="mr-1 dot dot-md bg-success"></span>
                                            </td>

                                            <td>{scholarship.Title}</td>

                                            <td>
                                                <span
                                                    className={`badge t-text-white ${
                                                        scholarship.isAvailable ===
                                                        null
                                                            ? 't-bg-red-500'
                                                            : scholarship.isAvailable ===
                                                              ScholarShipAvailabilityEnum.ENDED
                                                            ? 't-bg-blue-500'
                                                            : scholarship.isAvailable ===
                                                              ScholarShipAvailabilityEnum.LIMITED
                                                            ? 't-bg-amber-500'
                                                            : scholarship.isAvailable ===
                                                              ScholarShipAvailabilityEnum.OPEN
                                                            ? 't-bg-emerald-500'
                                                            : 't-bg-gray-500'
                                                    }`}>
                                                    {scholarship.isAvailable}
                                                </span>
                                            </td>

                                            <td>
                                                <ScholarshipTableButtons
                                                    scholarship={scholarship}
                                                    getScholarships={
                                                        getScholarships
                                                    }
                                                    setmodal={setmodal}
                                                />
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <LargeModal>{modal}</LargeModal>
        </div>
    )
}

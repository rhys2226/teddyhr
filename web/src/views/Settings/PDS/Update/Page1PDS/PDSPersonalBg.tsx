import React from 'react'
import { Fire } from '../../../../../components/Alerts/Alert'
import { countryList } from '../../../../../components/Doc/PDS/PDSPage1/countryList'

export default function PDSPersonalBg() {
    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-4">PERSONAL INFORMATION</h5>
            <div className="row mb-4">
                <div className="col-md-3">
                    <label htmlFor="">SURNAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">FIRST NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">MIDDLE  NAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">NAME EXTENSION</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-3">
                    <label htmlFor="">DATE OF BIRTH</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">SEX</label>
                    <select className="form-control" >
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor=""> CIVIL STATUS</label>
                    <select className="form-control" >
                        <option>Single</option>
                        <option>Widow</option>
                        <option>Married</option>
                        <option>Separated</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">HEIGHT (m)</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-3">
                    <label htmlFor="">WEIGHT (kg)</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">BLOOD TYPE</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">GSIS ID NO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">PAG-IBIG ID NO</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-3">
                    <label htmlFor="">PHILHEALTH NO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">SSS NO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">TIN NO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">AGENCY EMPLOYEE NO</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4">
                    <label htmlFor="">CITIZENSHIP</label>
                    <select className="form-control" >
                        <option>Filipino</option>
                        <option>Dual Citizenship</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="" style={{ textTransform: 'uppercase' }}>if holder of dual citizenship</label>
                    <select className="form-control" >
                        <option>By Birth</option>
                        <option>By Naturalization</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="" style={{ textTransform: 'uppercase' }}>please indicate details</label>
                    <select className="form-control" >
                        <option selected>Philippines</option>
                        {
                            countryList.map( ( country ) => (
                                <option >{country}</option>
                            ) )
                        }
                    </select>
                </div>
            </div>
            <h5 className="col-md-12 bold m-0 p-0 mt-4">RESIDENTIAL ADDRESS</h5>
            <div className="row mt-3">
                <div className="col-md-6 mb-4">
                    <label htmlFor="">House/Block/Lot No.</label>
                    <input type="text" className="form-control" />
                </div> <div className="col-md-6 mb-4">
                    <label htmlFor="">Street</label>
                    <input type="text" className="form-control" />
                </div> <div className="col-md-6 mb-4">
                    <label htmlFor="">Subdivision/Village</label>
                    <input type="text" className="form-control" />
                </div> <div className="col-md-6 mb-4">
                    <label htmlFor="">Barangay</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">City/Municipality</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Province</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="">ZIP CODE</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <h5 className="col-md-12 bold m-0 p-0  mt-5">PERMANENET  ADDRESS</h5>
            <div className="row mt-3">
                <div className="col-md-6 mb-4">
                    <label htmlFor="">House/Block/Lot No.</label>
                    <input type="text" className="form-control" />
                </div> <div className="col-md-6 mb-4">
                    <label htmlFor="">Street</label>
                    <input type="text" className="form-control" />
                </div> <div className="col-md-6 mb-4">
                    <label htmlFor="">Subdivision/Village</label>
                    <input type="text" className="form-control" />
                </div> <div className="col-md-6 mb-4">
                    <label htmlFor="">Barangay</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">City/Municipality</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Province</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="">ZIP CODE</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4 mt-3">
                <div className="col-md-4">
                    <label htmlFor="">TELEPHONE NO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="">MOBILE NO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="">EMAIL ADDRESS (if any)</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="mt-5 mb-4 d-flex aij jcc">
                <button onClick={() => {
                    Fire(
                        'Update Personal Data Sheet?',
                        ' I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
                        'info',
                        () => { }
                    )
                }} className="btn btn-outline-primary">Update Personal Information</button>
            </div>
        </div>
    )
}

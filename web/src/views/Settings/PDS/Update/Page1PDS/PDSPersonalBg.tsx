import React from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Fire } from '../../../../../components/Alerts/Alert'
import { countryList } from '../../../../../components/Doc/PDS/PDSPage1/countryList'
import { Auth } from '../../../../../services/auth.service';

type Inputs = {
    employee_id: undefined
    Sex: undefined
    CivilStatus: undefined
    DOB: undefined
    Height: undefined
    Weight: undefined
    BLOODTYPE: undefined
    GSIS: undefined
    PAGIBIG: undefined
    PHILHEALTH: undefined
    SSS: undefined
    TIN: undefined
    EmployeeNumber: undefined
    Citizenship: undefined
    DualCititizenship: undefined
    Details: undefined
    Telephone: undefined
    residential: {
        HouseNumber: undefined
        Street: undefined
        Village: undefined
        Barangay: undefined
        Municipality: undefined
        Province: undefined
        ZipCode: undefined
        Type: undefined
        employee_id: undefined
    }
    permanent: {
        HouseNumber: undefined
        Street: undefined
        Village: undefined
        Barangay: undefined
        Municipality: undefined
        Province: undefined
        ZipCode: undefined
        Type: undefined
        employee_id: undefined
    }
}

export default function PDSPersonalBg() {
    const userData: any = localStorage.getItem( 'user' )
    const { register, handleSubmit } = useForm<Inputs>();

    const submit = async ( data: Inputs ) => {
        Fire(
            'Update Personal Data Sheet?',
            ' I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {

                let api = new Auth( 'personal-information' )
                api.create( data, {} ).then( () => {
                    console.log( data )
                    Alert(
                        'PDS Successfully Updated',
                        'You have successfully updated your Personal Data Sheet',
                        'success',
                    )
                } )
                    .catch( () => {
                        Alert(
                            'Error',
                            'Erro updating Personal Data Sheet. Try Again',
                            'error',
                        )
                    } )
            }
        )
    }

    const [ user, setuser ]: any = React.useState( {} )

    React.useEffect( () => {
        getC1()
    }, [] )

    function getC1() {
        let api = new Auth( 'personal-information' )
        api.fetchOne( JSON.parse( userData ).id ).then( ( data ) => {
            setuser( data )
        } )
    }

    return (
        <div className="card-body card">
            <form onSubmit={handleSubmit( submit )}>
                <h5 className="bold mt-4 mb-4">PERSONAL INFORMATION</h5>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <label htmlFor="">SURNAME</label>
                        <input disabled value={JSON.parse( userData ).Last} type="text" className="form-control" />
                    </div>
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'employee_id' )} />
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'permanent.employee_id' )} />
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'residential.employee_id' )} />
                    <div className="col-md-3">
                        <label htmlFor="">FIRST NAME</label>
                        <input disabled value={JSON.parse( userData ).First} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">MIDDLE  NAME</label>
                        <input disabled value={JSON.parse( userData ).Middle} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">NAME EXTENSION</label>
                        <input disabled value={JSON.parse( userData ).NameExtension} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <label htmlFor="">DATE OF BIRTH</label>
                        <input {...register( 'DOB' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">SEX</label>
                        <select {...register( 'Sex' )} className="form-control" >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor=""> CIVIL STATUS</label>
                        <select {...register( 'CivilStatus' )} className="form-control" >
                            <option>Single</option>
                            <option>Widow</option>
                            <option>Married</option>
                            <option>Separated</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">HEIGHT (m)</label>
                        <input {...register( 'Height' )} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <label htmlFor="">WEIGHT (kg)</label>
                        <input {...register( 'Weight' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">BLOOD TYPE</label>
                        <input {...register( 'BLOODTYPE' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">GSIS ID NO</label>
                        <input {...register( 'GSIS' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">PAG-IBIG ID NO</label>
                        <input {...register( 'PAGIBIG' )} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-3">
                        <label htmlFor="">PHILHEALTH NO</label>
                        <input {...register( 'PHILHEALTH' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">SSS NO</label>
                        <input {...register( 'SSS' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">TIN NO</label>
                        <input {...register( 'TIN' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">AGENCY EMPLOYEE NO</label>
                        <input {...register( 'EmployeeNumber' )} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-4">
                        <label htmlFor="">CITIZENSHIP</label>
                        <select {...register( 'Citizenship' )} className="form-control" >
                            <option>Filipino</option>
                            <option>Dual Citizenship</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" style={{ textTransform: 'uppercase' }}>if holder of dual citizenship</label>
                        <select {...register( 'DualCititizenship' )} className="form-control" >
                            <option>By Birth</option>
                            <option>By Naturalization</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" style={{ textTransform: 'uppercase' }}>please indicate details</label>
                        <select {...register( 'Details' )} className="form-control" >
                            <option selected>Philippines</option>
                            {
                                countryList.map( ( country ) => (
                                    <option >{country}</option>
                                ) )
                            }
                        </select>
                    </div>
                </div>
                <br />
                <h5 className="col-md-12 bold m-0 p-0 mt-4">RESIDENTIAL ADDRESS</h5>
                <div className="row mt-3">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">House/Block/Lot No.</label>
                        <input  {...register( 'residential.HouseNumber' )} type="text" className="form-control" />
                    </div> <div className="col-md-6 mb-4">
                        <label htmlFor="">Street</label>
                        <input  {...register( 'residential.Street' )} type="text" className="form-control" />
                    </div> <div className="col-md-6 mb-4">
                        <label htmlFor="">Subdivision/Village</label>
                        <input  {...register( 'residential.Village' )} type="text" className="form-control" />
                    </div> <div className="col-md-6 mb-4">
                        <label htmlFor="">Barangay</label>
                        <input  {...register( 'residential.Barangay' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">City/Municipality</label>
                        <input  {...register( 'residential.Municipality' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">Province</label>
                        <input  {...register( 'residential.Province' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="">ZIP CODE</label>
                        <input  {...register( 'residential.ZipCode' )} type="text" className="form-control" />
                    </div>
                    <input type="hidden"  {...register( 'residential.Type' )} value="ResidentialAddress" />
                </div>

                <h5 className="col-md-12 bold m-0 p-0  mt-5">PERMANENET  ADDRESS</h5>
                <div className="row mt-3">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">House/Block/Lot No.</label>
                        <input  {...register( 'permanent.HouseNumber' )} type="text" className="form-control" />
                    </div> <div className="col-md-6 mb-4">
                        <label htmlFor="">Street</label>
                        <input  {...register( 'permanent.Street' )} type="text" className="form-control" />
                    </div> <div className="col-md-6 mb-4">
                        <label htmlFor="">Subdivision/Village</label>
                        <input  {...register( 'permanent.Village' )} type="text" className="form-control" />
                    </div> <div className="col-md-6 mb-4">
                        <label htmlFor="">Barangay</label>
                        <input  {...register( 'permanent.Barangay' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">City/Municipality</label>
                        <input  {...register( 'permanent.Municipality' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">Province</label>
                        <input  {...register( 'permanent.Province' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="">ZIP CODE</label>
                        <input  {...register( 'permanent.ZipCode' )} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-4 mt-3">
                    <div className="col-md-4">
                        <label htmlFor="">TELEPHONE NO</label>
                        <input   {...register( 'Telephone' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">MOBILE NO</label>
                        <input disabled value={JSON.parse( userData ).Phone} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="">EMAIL ADDRESS (if any)</label>
                        <input disabled value={JSON.parse( userData ).Email} type="text" className="form-control" />
                    </div>
                    <input type="hidden"  {...register( 'permanent.Type' )} value="PermanentAddress" />
                </div>

                <div className="mt-5 mb-4 d-flex aij jcc">
                    <button type='submit' className="btn btn-outline-primary">Update Personal Information</button>
                </div>
            </form>
        </div>
    )
}

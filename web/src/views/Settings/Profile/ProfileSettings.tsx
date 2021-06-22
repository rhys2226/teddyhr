import React from 'react'
import { useForm } from 'react-hook-form';
import { Alert, Fire } from '../../../components/Alerts/Alert'
import { Auth } from '../../../services/auth.service';

type Inputs = {
    Last: any
    Middle: any
    Email: any
    First: any
    Phone: any
    Old: any
    OldEmail: any
    ConfirmPassword: any
    New: any
}
export default function ProfileSettings( props: any ) {

    const { employee } = props
    const { register, handleSubmit, setValue } = useForm<Inputs>();
    const userData: any = localStorage.getItem( 'user' )

    React.useEffect( () => {
        setValue( 'Last', employee.user.Last )
        setValue( 'First', employee.user.First )
        setValue( 'Middle', employee.user.Middle )
        setValue( 'Email', employee.user.Email )
        setValue( 'Phone', employee.user.Phone )
        setValue( 'OldEmail', JSON.parse( userData ).Email )

    }, [] )

    const submit = ( data: Inputs ) => {
        Fire( 'Update Account', 'Are you sure you want to Update your Account?', 'info', () => {
            if ( data.New !== data.ConfirmPassword ) {
                Alert( 'Error', 'Password does not match', 'warning' )
                return
            }
            const api = new Auth( 'update-profile' )
            api.create( data ).then( () => {
                Alert( 'Account Updated', 'Account Successfully Updated. Please re-login if you wish to change your email', 'success' )
                props.reload()
            } )
                .catch( () => {
                    Alert( 'Error', 'Something went wrong. Try Again', 'error' )
                } )
        } )
    }

    return (
        <div>
            <form onSubmit={handleSubmit( submit )}>
                <div className="row mt-5 align-items-center">
                    <div className="col-md-3 text-center mb-5">
                        <div className="avatar avatar-xl">
                            <img style={{ cursor: 'pointer' }} src={employee.user.Avatar} alt="..." className="avatar-img   rounded-circle " />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <h4 className="mb-1">{employee.user.Last}, {employee.user.First} {employee.user.Middle}</h4>
                                <p className="small mb-3"><span className="badge bg-primary-lighter text-primary p-1 br-2" style={{ fontWeight: 900, }}>{employee.Position}</span></p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <p className="small mb-0 text-muted">{employee.user.Email}</p>
                                <p className="small mb-0 text-muted">{employee.Alignment}</p>
                                <p className="small mb-0 text-muted">+{employee.user.Phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="my-4">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label>Lastname</label>
                            <input  {...register( 'Last' )} type="text" id="lastname" className="form-control" />
                            <input  {...register( 'OldEmail' )} type="hidden" value={JSON.parse( userData ).Email} className="form-control" />
                        </div>
                        <div className="form-group col-md-3">
                            <label>
                                Middle Name</label>
                            <input  {...register( 'Middle' )} type="text" id="lastname" className="form-control" />
                        </div>
                        <div className="form-group col-md-3">
                            <label >Phone</label>
                            <input  {...register( 'Phone' )} type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-3">
                            <label >Email</label>
                            <input  {...register( 'Email' )} type="email" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Old Password</label>
                            <input {...register( 'Old' )} type="password" className="form-control" id="inputPassword5" />
                            <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input {...register( 'New' )} type="password" className="form-control" id="inputPassword5" />
                            <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input {...register( 'ConfirmPassword' )} type="password" className="form-control" id="inputPassword6" />
                            <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <br />
                        <p className="mb-2 text-info">Password requirements</p>
                        <p className="small text-muted mb-2"> To create a new password, you have to meet all of the following requirements: </p>
                        <ul className="small text-muted pl-4 mb-0">
                            <li> Minimum 8 character </li>
                            <li>At least one special character</li>
                            <li>At least one number</li>
                            <li>Can’t be the same as a previous password </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex aic jcc">
                    <button type="submit" className="btn btn-dark">Save Changes</button>
                </div>
            </form>
        </div>
    )
}

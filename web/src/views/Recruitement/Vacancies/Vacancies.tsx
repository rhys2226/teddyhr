import React, { useState, useEffect } from 'react'
import { Alert, Fire } from '../../../components/Alerts/Alert'
import { Auth } from '../../../services/auth.service'
import VacanciesPlaceholders from './VacanciesPlaceholders'
import { useForm } from 'react-hook-form';
export default function Vacancies() {

    const [ vacancies, setVacancies ]: any = useState( [] )

    useEffect( () => {
        getVacancies()
    }, [] )


    function getVacancies() {
        const auth = new Auth( 'vacancies' );
        auth.fetch( {} ).then( ( data: any ) => {
            setVacancies( data )
        } )
    }


    return (
        <div className="col-md-12 my-4">
            <h2 className=" mb-1">Available Vacancies</h2>
            <p className="mb-3 text-muted">Displaying List of Vacancies in descending order</p>
            <div className="card shadow">
                <div className="card-body">
                    <div className="toolbar">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="sr-only">Search</label>
                                <input type="text" className="form-control" id="search1" value="" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <table className="table table-borderless table-hover">
                        <thead className="table-info">
                            <tr>
                                <th className="text-info text-center"></th>
                                <th className="text-info">Bureau OR Office</th>
                                <th className="text-info">Position/Title</th>
                                <th className="text-info text-center">Department / Branch / Division</th>
                                <th className="text-info text-center">Salary Grade</th>
                                <th className="text-info text-center">Salary Authorized</th>
                                <th className="text-info text-center">Other Compensation</th>
                                <th className="text-info text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <VacanciesPlaceholders show={vacancies.length !== 0 ? false : true} />
                            {
                                vacancies.map( ( vacancy: any, index: any ) => (
                                    <tr >
                                        <td className="text-center"> <i className="fe fe-key"></i> </td>

                                        <td className={`vacancy${ index }`}>{vacancy.Bureau} </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" placeholder={vacancy.Bureau} id="Bureau" /></td>

                                        <td className={`vacancy${ index } text-info`}>
                                            <i className="fe fe-code"></i> {vacancy.Position}
                                        </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" placeholder={vacancy.Position} id="Position" /></td>


                                        <td className={`vacancy${ index } text-center`}> {vacancy.Department} </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" placeholder={vacancy.Department} id="Department" /></td>


                                        <td className={`vacancy${ index } text-center`}> {vacancy.SalaryGrade} </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" placeholder={vacancy.SalaryGrade} id="SalaryGrade" /></td>


                                        <td className={`vacancy${ index } text-center`}>{vacancy.SalaryAuthorized} </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" placeholder={vacancy.SalaryAuthorized} id="SalaryAuthorized" /></td>


                                        <td className={`vacancy${ index } text-center`}>{vacancy.OtherCompensation} </td>
                                        <td className={`vacancy1${ index }`} style={{ display: 'none' }}><input className="form-control" placeholder={vacancy.OtherCompensation} id="OtherCompensation" /></td>


                                        <td className={`vacancy${ index }`}>
                                            <button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted sr-only">Action</span>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                {/* <button onClick={() => {
                                                    $( `.vacancy${ index }` ).toggle()
                                                    $( `.vacancy1${ index }` ).toggle()
                                                }} className="dropdown-item" >Edit</button> */}

                                                <button
                                                    onClick={() => {
                                                        Fire( 'Delete Vacancy', 'Are you sure you want to Delete this Vacancy?', 'warning', () => {
                                                            const auth = new Auth( 'vacancies' );
                                                            auth.delete( vacancy.id )
                                                                .then( () => {
                                                                    getVacancies()
                                                                    Alert( 'Vacancy has been removed', '', 'success' )
                                                                } )
                                                                .catch( () => {
                                                                    Alert( 'Error', 'Something went wrong. Try Again', 'error' )
                                                                } )

                                                        } )
                                                    }}
                                                    className="dropdown-item" >Remove</button>
                                            </div>
                                        </td>
                                        <td className={`vacancy1${ index } `} style={{ display: 'none' }}>
                                            <div className="d-flex">
                                                <button
                                                    onClick={() => {
                                                        Fire( 'Update Vacancy', 'Are you sure you want to Update this Vacancy?', 'info', () => {
                                                            const data = {
                                                                Bureau: $( '#Bureau' ).val(),
                                                                Position: $( '#Position' ).val(),
                                                                Department: $( '#Department' ).val(),
                                                                SalaryGrade: $( '#SalaryGrade' ).val(),
                                                                SalaryAuthorized: $( '#SalaryAuthorized' ).val(),
                                                                OtherCompensation: $( '#OtherCompensation' ).val(),
                                                            }
                                                            const auth = new Auth( 'vacancies' );
                                                            auth.update( vacancy.id, data )
                                                                .then( () => {
                                                                    getVacancies()
                                                                    $( `.vacancy${ index }` ).toggle()
                                                                    $( `.vacancy1${ index }` ).toggle()
                                                                    Alert( 'Vacancy Updated', 'Vacancy has been succesfully updated', 'success' )
                                                                } )
                                                                .catch( () => {
                                                                    Alert( 'Error', 'Something went wrong. Try Again', 'error' )
                                                                } )
                                                        } )
                                                    }} className="btn btn-sm btn-outline-primary" type="button"  >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        $( `.vacancy${ index }` ).toggle()
                                                        $( `.vacancy1${ index }` ).toggle()
                                                    }} className="btn btn-sm btn-outline-dark ml-2" type="button"  >
                                                    Cancel
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ) )
                            }
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

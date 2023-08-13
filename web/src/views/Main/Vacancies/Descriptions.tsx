import React from 'react'
import {formatCurrency, toArray} from '../../../helpers'

export default function Descriptions(props: any) {
    return (
        <div className="shadow row card card-body">
            <div className="text-center col-md-12">
                <div
                    className="m-4 d-flex"
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <img src="./assets/placeholders/dev.png" alt="..." />
                </div>
                <h1 className="mt-3 mb-0 h5">{props.data.Position}</h1>
                <h3 className="mt-0 text-info">{props.data.Bureau}</h3>
                <h5 className="mt-0 text-dark">
                    Salary:{' '}
                    <span className="text-success">
                        {props.data.SalaryAuthorized}
                    </span>{' '}
                </h5>
            </div>
            <div className="p-5 mt-5 ">
                <h1 className="text-info">Job Summary</h1>
                <br />
                <br />
                <p className="text-muted">{props.data.Job}</p>
            </div>
            <h1 className="p-5 text-info">Qualifications</h1>
            <div className="p-1  row">
                <div className="p-0 m-0  col-md-12 row">
                    <div className="row d-flex card-body col-md-12 ">
                        <div className="p-3 ml-5 mr-5 text-center ">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-bookmark fe-32 text-success"></i>
                            </span>
                        </div>
                        <div>
                            <h3 className="mt-4 mb-1 h5">
                                Educational Attainments
                            </h3>
                            <ul>
                                {toArray(props.data.Education).map(
                                    (data: any, index: any) => (
                                        <li
                                            style={{wordBreak: 'break-all'}}
                                            key={index}>
                                            {data}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="row d-flex card-body col-md-12 ">
                        <div className="p-3 ml-5 mr-5 text-center ">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-coffee fe-32 text-danger"></i>
                            </span>
                        </div>
                        <div>
                            <h3 className="mt-4 mb-1 h5">Work Experiences</h3>
                            <ul>
                                {toArray(props.data.Experience).map(
                                    (data: any, index: any) => (
                                        <li key={index}>{data}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="row d-flex card-body col-md-12 ">
                        <div className="p-3 ml-5 mr-5 text-center ">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-briefcase fe-32 text-info"></i>
                            </span>
                        </div>
                        <div>
                            <h3 className="mt-4 mb-1 h5">Trainings</h3>
                            <ul>
                                {toArray(props.data.Training).map(
                                    (data: any, index: any) => (
                                        <li key={index}>{data}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="row d-flex card-body col-md-12 ">
                        <div className="p-3 ml-5 mr-5 text-center ">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-check-square fe-32 text-warning"></i>
                            </span>
                        </div>
                        <div>
                            <h3 className="mt-4 mb-1 h5">Eligibilities</h3>
                            <ul>
                                {toArray(props.data.Eligibility).map(
                                    (data: any, index: any) => (
                                        <li key={index}>{data}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

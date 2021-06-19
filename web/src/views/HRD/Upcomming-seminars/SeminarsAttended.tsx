import React from 'react'
import { LearningAndDevelopments } from '../../../components/Doc/PDS/PDSTypes';
import { toDate } from '../../../helpers';
import { Auth } from '../../../services/auth.service';
import SeminarsAttendedPlaceholder from './SeminarsAttendedPlaceholder';

export default function SeminarsAttended() {

    const [ seminars, setseminars ]: any = React.useState( [] )
    const userData: any = localStorage.getItem( 'user' )

    React.useEffect( () => {
        getSeminars()
    }, [] )


    function getSeminars() {
        const api = new Auth( 'learning-and-development' )
        api.fetchOne( JSON.parse( userData ).id )
            .then( ( data ) => {
                console.log( data )
                setseminars( data )
            } )
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="col-md-12 mb-4">
                    <div className="card timeline">
                        <div className="card-header">
                            <strong className="card-title">Seminars Attended </strong>
                        </div>
                        <div className="card-body row">

                            <SeminarsAttendedPlaceholder show={seminars.length !== 0 ? false : true} />

                            {
                                seminars.map( ( seminar: any, index: number ) => (
                                    <>
                                        <div className="pb-3 timeline-item item-success col-md-12">
                                            <div className="pl-5 w-100">
                                                <div className="d-flex w-100 row">
                                                    <div className="col-md-1 d-flex  jcc">
                                                        <div className="avatar avatar-lg">
                                                            <img src={seminar.user.Avatar} alt="..." className="avatar-img rounded-circle" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <strong>@{seminar.Title}  </strong>
                                                        <br />
                                                        <small>Attended by: {seminar.user.First} {seminar.user.Middle} {seminar.user.Last} </small>
                                                        <br />
                                                        <span className="text-info h5  ">
                                                            {seminar.SponsoredBy}
                                                        </span>
                                                        <br />
                                                        <small >
                                                            Total hrs:  <small className=''>{seminar.Hours} hrs</small>
                                                        </small>
                                                    </div>
                                                    <div className="col-md-4 text-right">
                                                        <small >
                                                            From:  <small className='text-danger'>{toDate( seminar.From )}</small>
                                                        </small>
                                                        <br />
                                                        <small >
                                                            To:  <small className='text-danger'>{toDate( seminar.To )}</small>
                                                        </small>
                                                        <br />
                                                        <span className="badge badge-danger">
                                                            {seminar.Type}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

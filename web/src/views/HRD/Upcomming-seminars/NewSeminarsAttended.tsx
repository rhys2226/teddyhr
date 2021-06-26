import React from 'react'

export default function NewSeminarsAttended() {

    const [ dateFilter, setdateFilter ] = React.useState( '' )
    const [ years, setyears ] = React.useState( [] )

    React.useEffect( () => {
        loopYears()
    }, [] )

    const loopYears = () => {
        let yearArray: any = []
        for ( let i = 2019; i < 2051; i++ ) {
            yearArray.push( i )
        }
        setyears( yearArray )
    }

    React.useEffect( () => {

    }, [ dateFilter ] )

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="col-md-12 mb-4">
                    <div className="card timeline">
                        <div className="card-header d-flex">
                            <strong className="card-title">Seminars  </strong>
                            <div className="ml-auto ">
                                <button className="btn btn-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter</button>
                                <div className="dropdown-menu dropdown-menu-right" >
                                    {
                                        years.map( ( year, index ) => (
                                            <button role="butoon" className="dropdown-item" >{year}</button>

                                        ) )
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="card-body row">
                            <>
                                <div className="pb-3 timeline-item item-success col-md-12">
                                    <div className="pl-5 w-100">
                                        <div className="d-flex w-100 row">
                                            <div className="col-md-1 d-flex  jcc">
                                                <div className="avatar avatar-lg">
                                                    <img src="seminar.user.Avatar" alt="..." className="avatar-img rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <strong>@seminar.Title  </strong>
                                                <br />
                                                <small>Attended by: seminar.user.First seminar.user.Middle seminar.user.Last </small>
                                                <br />
                                                <span className="text-info h5  ">
                                                    seminar.SponsoredBy
                                                </span>
                                                <br />
                                                <small >
                                                    Total hrs:  <small className=''>seminar.Hours hrs</small>
                                                </small>
                                            </div>
                                            <div className="col-md-4 text-right">
                                                <small >
                                                    From:  <small className='text-danger'>toDate( seminar.From )</small>
                                                </small>
                                                <br />
                                                <small >
                                                    To:  <small className='text-danger'>toDate( seminar.To )</small>
                                                </small>
                                                <br />
                                                <span className="badge badge-danger">
                                                    seminar.Type
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

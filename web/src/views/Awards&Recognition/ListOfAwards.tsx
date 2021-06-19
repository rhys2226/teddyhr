import React from 'react'
import { Alert, Fire } from '../../components/Alerts/Alert';
import { toDate } from '../../helpers';
import { Auth } from '../../services/auth.service';
import AwardListPlaceholder from './AwardListPlaceholder';

export default function ListOfAwards() {

    const [ awards, setawards ]: any = React.useState( [] )

    React.useEffect( () => {
        getAwards()
    }, [] )


    const getAwards = () => {
        const api = new Auth( 'awards' );
        api.fetch( {} )
            .then( ( data: any ) => setawards( data ) )
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="col-md-12 mb-4">
                    <div className="card timeline">
                        <div className="card-header">
                            <strong className="card-title">Awards</strong>
                        </div>
                        <div className="card-body row">
                            <AwardListPlaceholder show={awards.length !== 0 ? false : true} />

                            {
                                awards.map( ( award: any, index: any ) => (
                                    <>
                                        <div className="card">
                                            <div className="col-md-12  card-body">
                                                <strong> <span><i className="fe fe-award text-warning"></i></span> {award.user.First}  {award.user.Middle}  {award.user.Last}</strong>
                                                <br />
                                                <span className="badge badge-danger">   {award.title} </span>
                                                <div className="mb-2 mt-3 small">{award.description}</div>
                                                <div className="card mb-3 bg-light w-50">
                                                    {
                                                        award.files.map( ( file: any, index: any ) => (

                                                            <a href={file.URL} target="_blank" className="row no-gutters align-items-center">
                                                                <div className="col-md-2 text-center">
                                                                    <img src={file.URL} alt="..." className="img-fluid rounded m-1" />
                                                                </div>
                                                                <div className="col-md-10">
                                                                    <div className="card-body py-0">
                                                                        <p className="card-title text-muted mb-0">{file.Name}</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        ) )
                                                    }
                                                </div>
                                                <small className="text-muted">Awarded Last: {toDate( award.created_at )}</small>
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

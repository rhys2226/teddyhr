import {formatImageUrl, toArray} from '../../../helpers'
import WorkExperience from '../../Settings/Overview/WorkExperience'

export default function ApplicantINformation(props: any) {
    return (
        <div>
            <div className="mt-5 row align-items-center">
                <div className="mb-5 text-center col-md-3">
                    <img
                        style={{cursor: 'pointer'}}
                        src={formatImageUrl(props.data.user.Avatar)}
                        alt="..."
                        className=" t-object-contain h-[100px]"
                    />
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="mb-1">
                                {' '}
                                {`${props.data.user.Last} ${props.data.user.First} ${props.data.user.Middle}`}
                            </h4>
                            <h3 className="mt-0 text-muted">
                                Office of Management Information System
                            </h3>
                            <h2 className="mb-3 ">
                                <span
                                    className="p-1 badge bg-dark-lighter text-dark br-2"
                                    style={{fontWeight: 900}}>
                                    Applied as{' '}
                                    {props.data.Position || 'Developer'}
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="mb-4 row">
                        <div className="col-md-7">
                            <p className="text-muted">{props.data.Degrees}</p>
                        </div>
                        <div className="col">
                            <p className="mb-0 small text-muted">
                                {props.data.user.Email}
                            </p>
                            <p className="mb-0 small text-success">
                                {props.data.Alignment}
                            </p>
                            <p className="mb-0 small text-muted">
                                {props.data.user.Phone}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 row">
                    <WorkExperience
                        data={props.data.WorkExperience.split(',')}
                    />
                </div>
                <div
                    className="col-md-12 row"
                    style={{justifyContent: 'center'}}>
                    <div className="mb-4 shadow row align-items-center w-100">
                        <div className="text-center col-3">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-bookmark fe-24 text-success"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="mt-4 mb-1 h5">
                                    Educational Attainments
                                </h3>
                            </a>
                            <ul>
                                {toArray(props.data.EducationalAttainments).map(
                                    (EducationalAttainments, index) => (
                                        <li>{EducationalAttainments}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-12 row"
                    style={{justifyContent: 'center'}}>
                    <div className="mb-4 shadow row align-items-center w-100">
                        <div className="text-center col-3">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-check-square fe-24 text-warning"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="mt-4 mb-1 h5">Eligibilities</h3>
                            </a>
                            <ul>
                                {toArray(props.data.Eligibilities).map(
                                    (Eligibilities, index) => (
                                        <li>{Eligibilities}</li>
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

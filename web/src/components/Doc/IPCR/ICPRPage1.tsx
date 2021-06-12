import { toDate } from '../../../helpers'
import '../Doc.css'
import './ICPR.css'

type Props = {
    data: any
}

export default function ICPRPage1( props: Props ) {

    return (
        <div className="bg-white landscape docs">
            <h6 className="text-center bold">OFFICE PERFORMANCE EVALUATION AND REVIEW (IPCR)</h6>
            <p>I, <span className="bold underlined" >{props.data.user.Last}, {props.data.user.First} {props.data.user.Middle}</span> of the <span className="bold underlined">College of Information Technology</span>
                , of ISCOF BAROTAC NUEVO CAMPUS commit to deliver and agree to be rated on the attainment of the following targets in accordance with the indicated measures for the period  <span className="bold underlined">{toDate( props.data.created_at )}.</span>
            </p>

            <div className="float-right assignatory">
                <p className="underlined text-center">{props.data.supervisors.First} {props.data.supervisors.Middle} {props.data.supervisors.Last}</p>
                <h6 className=" text-center ratee">Ratee</h6>
            </div>

            <table className="w-100 table" >
                <thead className="table-info">
                    <tr>
                        <th className="bordered text-info"> Reviewed by:</th>
                        <th className="bordered text-info" > Date</th>
                        <th className="bordered text-info"> Approved by:</th>
                        <th className="bordered text-info" > Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bordered"><p className="underlined text-center mt-3">{props.data.ReviewedBy}</p></td>
                        <td rowSpan={2} className="bordered"><p className="underlined text-center mt-3">{props.data.ReviewedByDate}</p>  </td>
                        <td className="bordered"><p className="underlined text-center mt-3">{props.data.ApprovedBy}</p></td>
                        <td rowSpan={2} className="bordered"><p className="underlined text-center mt-3">{props.data.ApprovedByDate}</p>  </td>
                    </tr>
                    <tr>
                        <td className="text-secodary bordered" >Immediate Supervisor</td>
                        <td className="text-secodary bordered" >Head of Office</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5 ">
                    <div style={{ border: '1px solid rgba(150,150,150,0.7)' }} className="rating card  p-3">
                        <p className="text-center">Rating Scale</p>
                        <p className="text-secodary">5- OUTSANDING</p>
                        <p className="text-secodary">4- VERY SATISFACTORY</p>
                        <p className="text-secodary">3- SATISFACTORY</p>
                        <p className="text-secodary">2- UNSATISFACTORY</p>
                        <p className="text-secodary">1-POOR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

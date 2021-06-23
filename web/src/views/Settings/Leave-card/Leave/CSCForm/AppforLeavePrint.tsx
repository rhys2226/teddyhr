import React from 'react'
import { toDate } from '../../../../../helpers'
import { Auth } from '../../../../../services/auth.service'
import './Docs.css'

export default function AppforLeavePrint( props: any ) {

    const { data, leaves } = props

    function setCheck( value: Boolean ) {
        if ( value ) {
            return (
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<i className="fe fe-check ">&nbsp;&nbsp;&nbsp;</i>
                </div>
            )
        }
        return (
            <div className="underlined"> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</div>
        )
    }
    function specialCheck( value: Boolean ) {
        if ( value ) {
            return (
                <i className="fe fe-check-circle "></i>
            )
        }
        return <i className="fe fe-circle "></i>
    }

    return (
        <div className="applcation-for-leave 1 col-md-12 p-0 row m-0">
            <table className="bordered1 col-md-12 p-0 row m-0 w-100 mt-5 ">
                <tbody >
                    <tr><td colSpan={9}>CSC FORM NO. 6</td></tr>
                    <tr><td colSpan={9}>Revised 1984</td></tr>
                    <tr className="text-center bb"><td className="text-center h5" colSpan={9}>APPLICATION FOR LEAVE</td></tr>
                    <tr >
                        <td className="br p-0 pl-2" colSpan={3}>1. OFFICE/AGENCY</td>
                        <td className="p-0 pl-2">2. NAME</td>
                        <td className="p-0 pl-2">(Last)</td>
                        <td className="p-0 pl-2"></td>
                        <td className="p-0 pl-2">(Given)</td>
                        <td className="p-0 pl-2"></td>
                        <td className="p-0 pl-2">(Middle)</td>
                        <td className="p-0 pl-2"></td>
                    </tr>
                    <tr className="bb">
                        <td className="br bold pl-2" colSpan={3}>{data.Office}</td>
                        <td className=" pl-2  underlined" colSpan={3}>{data.user.Last}</td>
                        <td className=" pl-2 underlined" colSpan={2}>{data.user.First}</td>
                        <td className=" pl-2 underlined" colSpan={2}>{data.user.Middle}</td>
                    </tr>
                    <tr >
                        <td className="br" colSpan={3}>3. DATE OF FILING</td>
                        <td className="p-2">4. POSITION</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="br"></td>
                        <td className="p-2">5.  SALARY (Monthly</td>
                        <td className="p-2"></td>
                    </tr>
                    <tr className=" bb">
                        <td className="br pl-2 underlined" colSpan={3}>{toDate( data.created_at )}</td>
                        <td className="br pl-2 underlined" colSpan={5}>{data.employee.Position}</td>
                        <td className=" pl-2 underlined" colSpan={2}>50,000</td>
                    </tr>

                    <tr className="text-center"><td className="text-center bb pt-2" colSpan={10}>DETAILS OF APPLICATION</td></tr>
                    <tr>
                        <td colSpan={3}>6.  (A) TYPE OF LEAVE</td>
                        <td colSpan={2}></td>
                        <td colSpan={3}>6. (B) WHERE LEAVE WILL BE</td>
                        <td></td>
                    </tr>
                    <tr >
                        <td></td>
                        <td colSpan={9}>SPENT:</td>
                    </tr>
                    <tr>
                        <td className="text-right underlined">{setCheck( data.Spent === 'Vacation' )}</td>
                        <td colSpan={3}>Vacation</td>
                        <td></td>
                        <td colSpan={3}>In case of Vacation Leave</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={2}>{specialCheck( data.Vacation === 'To seek employment' )}  To seek employment</td>
                        <td colSpan={2}></td>
                        <td className="text-right underlined">{setCheck( data.IncaseofVacationLeave === 'Within the Philippines' )}</td>
                        <td colSpan={2}>within the Philippines</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={2}>{specialCheck( data.Vacation === 'Others, specify' )}  Others, specify:</td>
                        <td colSpan={2}></td>
                        <td className="text-right underlined">{setCheck( data.IncaseofVacationLeave === 'Specify Abroad' )}</td>
                        <td colSpan={2}>Abroad, specify:</td>
                    </tr>
                    <tr>
                        <td colSpan={1}></td>
                        <td className="underlined">{data.VacationDetails !== null ? data.VacationDetails : '___________________'}</td>
                        <td colSpan={4}></td>
                        <td className="underlined">{data.SpecifyLocationinAbroad !== null ? data.SpecifyLocationinAbroad : '___________________'}</td>
                    </tr>
                    <br />
                    <tr>
                        <td className="text-right underlined">{setCheck( data.Spent === 'Sick' )}</td>
                        <td colSpan={2}>Sick</td>
                        <td colSpan={2}></td>
                        <td colSpan={3}>In case of Sick Leave</td>
                    </tr>
                    <tr>
                        <td className="text-right underlined">{setCheck( data.Spent === 'Maternity' )}</td>
                        <td colSpan={2}>Maternity</td>
                        <td colSpan={2}></td>
                        <td className="text-right underlined">{setCheck( data.IncaseofSickLeave === 'Out Patient' )}</td>
                        <td colSpan={3}>Out Patient</td>
                    </tr>
                    <tr>
                        <td className="text-right underlined">{setCheck( data.Spent === 'Others, specify' )}</td>
                        <td colSpan={2}>Others, specify:</td>
                        <td colSpan={2}></td>
                        <td className="text-right underlined">{setCheck( data.IncaseofSickLeave === 'Specify Hospital' )}</td>
                        <td colSpan={3}>In Hospital,  specify:</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="underlined">{data.Specify !== null ? data.Specify : '___________________'}</td>
                        <td colSpan={4}></td>
                        <td className="underlined">{data.SpecifyHospital !== null ? data.SpecifyHospital : '___________________'}</td>
                    </tr>
                    <br />
                    <tr>
                        <td className="text-right underlined">{setCheck( data.Spent === 'Special Privilege' || data.SpecialPrivilegeVacation !== null )}</td>
                        <td colSpan={2}>Special Privilege</td>
                        <td colSpan={7}></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={3}> {specialCheck( data.SpecialPrivilege === 'Birthday' || data.SpecialPrivilegeVacation === 'Birthday' )} Birthday</td>
                        <td></td>
                        <td colSpan={3}>{specialCheck( data.SpecialPrivilege === 'Hospitalization' || data.SpecialPrivilegeVacation === 'Birthday' )} Hospitalization</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={3}>{specialCheck( data.SpecialPrivilege === 'Enrollment' || data.SpecialPrivilegeVacation === 'Enrollment' )} Enrollment</td>
                        <td></td>
                        <td colSpan={3}>{specialCheck( data.SpecialPrivilege === 'Mourning' || data.SpecialPrivilegeVacation === 'Mourning' )} Mourning</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={3}>{specialCheck( data.SpecialPrivilege === 'Filial' || data.SpecialPrivilegeVacation === 'Filial' )} Filial</td>
                        <td></td>
                        <td colSpan={3}>{specialCheck( data.SpecialPrivilege === 'Relocation' || data.SpecialPrivilegeVacation === 'Relocation' )} Relocation</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={3}>{specialCheck( data.SpecialPrivilege === 'Government Transaction' || data.SpecialPrivilegeVacation === 'Government Transaction' )} Government Transaction</td>
                        <td></td>
                        <td colSpan={3}>{specialCheck( data.SpecialPrivilege === 'Wedding Anniversary' || data.SpecialPrivilegeVacation === 'Wedding Anniversary' )} Wedding Anniversary</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={3}>{specialCheck( data.SpecialPrivilege === 'Graduation' || data.SpecialPrivilegeVacation === 'Graduation' )} Graduation</td>
                        <td colSpan={4}></td>
                    </tr>
                    <br />
                    <tr >
                        <td colSpan={3}>6.  ( C ) NUMBER OF DAYS APPLIED FOR</td>
                        <td colSpan={2}></td>
                        <td colSpan={3}>6. ( D ) COMUTATION</td>
                        <td></td>
                    </tr>
                    <tr>

                        <td colSpan={1} className="text-right bold underlined">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.Days}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td colSpan={2} className="bold underlined">day/s</td>
                        <td colSpan={2}></td>
                        <td colSpan={2}>{specialCheck( data.Comutation === 'Requested' )} Requested</td>
                        <td colSpan={2}>{specialCheck( data.Comutation !== 'Requested' )} Not Requested</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>&nbsp; Inclusive Days:</td>
                    </tr>
                    <tr>
                        <td colSpan={1} className="text-right">______________</td>
                        <td colSpan={3}></td>
                        <td className="text-center" colSpan={3}>____________________________</td>
                    </tr>
                    <tr className="bb">
                        <td></td>
                        <td colSpan={3}></td>
                        <td className="text-center" colSpan={3}>(Signature of Applicant)</td>
                    </tr>
                    <tr className="text-center bb"><td className="text-center" colSpan={9}>DETAILS OF ACTION TAKEN</td></tr>
                    <tr>
                        <td colSpan={3}>7. ( A ) LEAVE CREDITS CERTIFICATION</td>
                        <td colSpan={2}></td>
                        <td colSpan={3}>7. ( B ) RECOMMENDATION</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="text-center">As of </td>
                        <td className="underlined bold" colSpan={1}>&nbsp;&nbsp;{toDate( leaves.created_at )}</td>
                        <td colSpan={3}></td>
                        <td>_______</td>
                        <td colSpan={3}>Approval</td>
                    </tr>
                    <tr>
                        <td className="text-center">Vacation                  </td>
                        <td className="underlined bold" colSpan={1}>&nbsp;&nbsp;{leaves.BalanceVacation}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td colSpan={3}></td>
                        <td>_______</td>
                        <td colSpan={3}>Disapproved due to</td>
                    </tr>
                    <tr>
                        <td className="text-center"> Sick </td>
                        <td className="underlined bold" colSpan={1}>&nbsp;&nbsp;{leaves.BalanceLeave}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td colSpan={3}></td>
                        <td colSpan={4}>______________________</td>
                    </tr>
                    <tr>
                        <td className="text-center" colSpan={1}> Total </td>
                        <td className="underlined bold" colSpan={1}>&nbsp;&nbsp;{leaves.BalanceVacation + leaves.BalanceLeave}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                    <tr>
                        <td className="text-center" colSpan={5}>  </td>
                        <td className="text-center bold underlined" colSpan={4}> JOSE S. ARICAYA </td>
                    </tr>
                    <tr>
                        <td className="text-center" colSpan={5}>____________________________ </td>
                        <td className="text-center" colSpan={4}>Administrative Officer IV </td>
                    </tr>
                    <tr>
                        <td className="text-center" colSpan={5}>Personnel </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>7. ( C ) APPROVED FOR:</td>
                        <td colSpan={2}></td>
                        <td colSpan={3}>7. ( D ) DISAPPROVED DUE TO:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="text-right"> _______ </td>
                        <td colSpan={2}>days with pay</td>
                        <td colSpan={3}></td>
                        <td colSpan={4}></td>
                    </tr>
                    <tr>
                        <td className="text-right"> _______ </td>
                        <td colSpan={2}>days without pay</td>
                        <td colSpan={3}></td>
                        <td colSpan={4}>______________________</td>
                    </tr>
                    <tr>
                        <td className="text-right"> _______ </td>
                        <td colSpan={2}>others, specify</td>
                        <td colSpan={3}></td>
                        <td colSpan={4}>______________________</td>
                    </tr>
                    <br />
                    <tr><td colSpan={9} className="text-center"><i>Approved:</i></td></tr>
                    <br />
                    <tr><td colSpan={9} className="text-center bold underlined">EMELYN B. LIGASAN, PhD</td></tr>
                    <tr><td colSpan={9} className="text-center"><i>Campus Administrator</i></td></tr>
                    <br />
                    <br />
                </tbody>
            </table>

        </div>

    )
}

import React from 'react'

export default function ContactClinets( props: any ) {
    return (
        <tbody>
            <tr>
                <td>Executive / Managerial</td>
                <td className="text-center"><input name="Executive" type="radio" value="true" /></td>
                <td className="text-center"><input name="Executive" type="radio" value="false" /></td>
                <td>General Public</td>
                <td className="text-center"><input name="GeneralPublic" type="radio" value="true" /></td>
                <td className="text-center"><input name="GeneralPublic" type="radio" value="false" /></td>
            </tr>
            <tr>
                <td>Supervisors</td>
                <td className="text-center"><input name="Supervisors" type="radio" value="true" /></td>
                <td className="text-center"><input name="Supervisors" type="radio" value="false" /></td>
                <td>Other Agencies</td>
                <td className="text-center"><input name="OtherAgencies" type="radio" value="true" /></td>
                <td className="text-center"><input name="OtherAgencies" type="radio" value="false" /></td>
            </tr>
            <tr>
                <td>Non-Supervisors</td>
                <td className="text-center"><input name="NonSupervisors" type="radio" value="true" /></td>
                <td className="text-center"><input name="NonSupervisors" type="radio" value="false" /></td>
                <td >Others (Please Specify):</td>
                <td colSpan={2} className="text-center"><input name="Others" className="form-control" type="text" /></td>
            </tr>
            <tr>
                <td>Staff</td>
                <td className="text-center"><input name="Staff" type="radio" value="true" /></td>
                <td className="text-center"><input name="Staff" type="radio" value="false" /></td>
                <td colSpan={3}></td>
            </tr>
        </tbody>
    )
}

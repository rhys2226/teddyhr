import React from 'react'

export default function ContactClinets(props:any) {
    return (
        <tbody>
            <tr>
                <td>Executive / Managerial</td>
                <td className="text-center"><input name="m" type="radio" /></td>
                <td className="text-center"><input name="m" type="radio" /></td>
                <td>General Public</td>
                <td className="text-center"><input name="gp" type="radio" /></td>
                <td className="text-center"><input name="gp" type="radio" /></td>
            </tr>
            <tr>
                <td>Supervisors</td>
                <td className="text-center"><input name="s" type="radio" /></td>
                <td className="text-center"><input name="s" type="radio" /></td>
                <td>Other Agencies</td>
                <td className="text-center"><input name="oa" type="radio" /></td>
                <td className="text-center"><input name="oa" type="radio" /></td>
            </tr>
            <tr>
                <td>Non-Supervisors</td>
                <td className="text-center"><input name="ns" type="radio" /></td>
                <td className="text-center"><input name="ns" type="radio" /></td>
                <td >Others (Please Specify):</td>
                <td colSpan={2} className="text-center"><input name="ops" className="form-control" type="text" /></td>
            </tr>
            <tr>
                <td>Staff</td>
                <td className="text-center"><input name="st" type="radio" /></td>
                <td className="text-center"><input name="st" type="radio" /></td>
                <td colSpan={3}></td>
            </tr>
        </tbody>
    )
}

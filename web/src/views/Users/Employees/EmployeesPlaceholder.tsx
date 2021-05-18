import React, { FC } from 'react';
import ShimmerEffect from '../../../components/Shimmer/ShimmerEffect';

type Props = {
    show: Boolean
};

const EmployeesPlaceholder: FC<Props> = ( props ) => {
    return (
        <tr style={{ display: props.show === true ? 'table-row' : 'none' }} >
            <td>
                <div className="avatar avatar-sm">
                    <ShimmerEffect type='circle' />
                </div>
            </td>
            <td>
                <ShimmerEffect type='title' />
                <ShimmerEffect type='line' />
            </td>
            <td>
                <ShimmerEffect type='line' />
            </td>
            <td><ShimmerEffect type='line' /></td>
            <td className=" text-center"> <ShimmerEffect type='line' /></td>
            <td className="text-muted text-right"><ShimmerEffect type='line' /></td>
            <td className="text-center pl-5">
                <ShimmerEffect type='circle' />
            </td>
            <td>
                <ShimmerEffect type='title' />
                <ShimmerEffect type='line' />
            </td>
            <td>
                <ShimmerEffect type='line' />
            </td>
        </tr>
    )
}

export default EmployeesPlaceholder;

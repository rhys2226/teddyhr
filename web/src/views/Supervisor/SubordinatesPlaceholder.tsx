import React, { FC } from 'react';
import ShimmerEffect from '../../components/Shimmer/ShimmerEffect';

type Props = {
    show: Boolean
};

const SubordinatesPlaceholder: FC<Props> = ( props ) => {
    const rows = [ 1, 2, 3, 4, 5, 6 ]
    return (
        <div style={{ display: props.show === true ? 'block' : 'none' }}>
            {
                rows.map( () => (
                    <div className="p-3 w-100 d-flex shadow" >
                        <ShimmerEffect type='circle' />
                    </div>
                ) )
            }
        </div>
    )
}
export default SubordinatesPlaceholder

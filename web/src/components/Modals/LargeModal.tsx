import React, { FC } from 'react';

type Props = {};

const LargeModal: FC<Props> = ( props ) => {
    return (
        <div className="modal fade large-modal">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-body"> {props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default LargeModal;

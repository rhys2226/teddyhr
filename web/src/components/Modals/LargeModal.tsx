import React, { FC } from 'react';

type Props = {};

const LargeModal: FC<Props> = ( props ) => {
    return (
        <div className="modal fade modal-shortcut bd-example-modal-lg" tabIndex={1} role="dialog" aria-hidden="true" id="large-modal">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-body"> {props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default LargeModal;

import React, {FC} from 'react'

type Props = {
    callback: Function
    buttonName: String
    title: String
}

const SlideModal: FC<Props> = (props) => {
    return (
        <div
            className="modal fade modal-notif slide-modal"
            role="dialog"
            aria-labelledby="defaultModalLabel"
            aria-hidden="true">
            <div
                className="modal-dialog modal-sm modal-dialog-centered"
                role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="defaultModalLabel">
                            {props.title}
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-body"> {props.children}</div>
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={() => {
                                props.callback()
                            }}
                            type="button"
                            className="btn btn-primary btn-block t-bg-blue-500 t-text-white"
                            data-dismiss="modal">
                            {props.buttonName}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideModal

import React from 'react'

export default function FullScreenModal( props: any ) {
    return (
        <div className="modal fade modal-full" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <button aria-label="" type="button" className="close px-2" data-dismiss="modal" aria-hidden="true">
                <span aria-hidden="true">×</span>
            </button>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body text-center w-100">
                        {props.Component}
                    </div>
                </div>
            </div>
        </div>
    )
}

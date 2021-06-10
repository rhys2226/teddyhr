import React from 'react'
import SupportingDocuments from '../../Settings/Overview/SupportingDocuments'

export default function ApplicantSupportingDocument( props: any ) {
    return (
        <div>
            <SupportingDocuments data={props.data} />
        </div>
    )
}

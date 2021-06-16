import React from 'react'
import LearningAndDevelopment from './LearningAndDevelopment'
import OtherInformation from './OtherInformation'
import VolountaryWork from './VolountaryWork'
import '../PDS.css'
import '../../Doc.css'
import * as interfaces from '../PDSInterface'

export default function PDSPage3( props: {
    VolunteerInvolvements: interfaces.VolunteerInvolvements[]
    LearningAndDevelopments: interfaces.LearningAndDevelopments[]
    Others: interfaces.Others[]
} ) {
    return (
        <div className="bg-white portrait-pds pds">
            <div className="PDSBorder" >
                <VolountaryWork VolunteerInvolvements={props.VolunteerInvolvements} />
                <LearningAndDevelopment LearningAndDevelopments={props.LearningAndDevelopments} />
                <OtherInformation Others={props.Others} />
            </div>
        </div>
    )
}

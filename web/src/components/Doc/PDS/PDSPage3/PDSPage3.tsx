import React from 'react'
import LearningAndDevelopment from './LearningAndDevelopment'
import OtherInformation from './OtherInformation'
import VolountaryWork from './VolountaryWork'

export default function PDSPage3() {
    return (
         <div className="bg-white portrait-pds pds" >
              <div className="PDSBorder" >
                <VolountaryWork />
                <LearningAndDevelopment />
                <OtherInformation />
            </div>
        </div>
    )
}

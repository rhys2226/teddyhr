import React from 'react'
import PDSEducBG from './PDSEducBG'
import PDSFamilyBG from './PDSFamilyBG'
import PDSPersonalBg from './PDSPersonalBg'

export default function PDSUpdatePage1( props: any ) {
    return (
        <div>
            <PDSPersonalBg />
            <PDSFamilyBG />
            <PDSEducBG />
        </div>
    )
}

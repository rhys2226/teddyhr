import React from 'react'
import IpCR from '../../../components/Doc/IPCR/IPCR'
import LeaveCard from '../../../components/Doc/Leave-Card/LeaveCard'
import PDS from '../../../components/Doc/PDS/PDS'
import ApplicationForLeave from '../../Settings/Leave-card/Leave/ApplicationForLeave'

export default function ViewApprovableDocument() {
    return (
        <div className="d-flex aic jcc" style={{ flexDirection: 'column' }}>


            {/* <IpCR /> */}
            <PDS />
            {/* <LeaveCard /> */}
            {/* <ApplicationForLeave /> */}
        </div>
    )
}

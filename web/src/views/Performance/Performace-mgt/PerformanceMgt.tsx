import React from 'react'
import EmployeeGraph from './EmployeeGraph'
import EmployeesAndPerformance from './EmployeesAndPerformance'
import TopEmployee from './TopEmployee'
import Analytics from './Analytics'

export default function PerformanceMgt() {
    return (
        <div className="row">
            <Analytics />

            <EmployeesAndPerformance />
            <TopEmployee />
            <EmployeeGraph />
        </div>
    )
}

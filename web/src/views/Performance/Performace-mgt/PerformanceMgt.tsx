import React from 'react'
import EmployeeGraph from './EmployeeGraph'
import EmployeesAndPerformance from './EmployeesAndPerformance'
import TopEmployee from './TopEmployee'

export default function PerformanceMgt() {
    return (
        <div className="row">
            <EmployeesAndPerformance />
            <TopEmployee />
            <EmployeeGraph />
        </div>
    )
}

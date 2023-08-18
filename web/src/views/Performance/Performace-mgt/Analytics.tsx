import React from 'react'
import {PositionsEnum} from '../../../core/enum/staff'
import {Auth} from '../../../services/auth.service'
import {renderChart} from './AnalyticsChart'

declare var Chart: any

export default function Analytics() {
    const [positions, setPositions] = React.useState(
        Object.values(PositionsEnum).map((p) => {
            return {position: p, count: 0}
        }),
    )

    const [misc, setMisc] = React.useState<any>({
        non_vertical_count: 0,
        seminars_this_year: 0,
        total_seminars: 0,
        vertical_count: 0,
    })

    React.useEffect(() => {
        getPositions()
        getMisc()
    }, [])

    function getPositions() {
        const api = new Auth('analytics')
        api.fetch({}).then((data) => {
            setPositions(data)

            setTimeout(() => {
                renderCharts(data)
            }, 1500)
        })
    }

    const renderCharts = (data: {position: string; count: string}[]) => {
        if (typeof Chart !== 'undefined') {
            renderChart(
                'administrative-chart',
                'Administrative Officers',
                ['Administrative'],
                data,
            )
            renderChart('accountant-chart', 'Accountants', ['Accountant'], data)
            renderChart('professor-chart', 'Professors', ['Professor'], data)
            renderChart('instructor-chart', 'Instructors', ['Instructor'], data)
            renderChart('other-chart', 'Others', ['Job', 'Guard'], data)
        }
    }

    function getMisc() {
        const api = new Auth('misc')
        api.fetch({}).then((data) => {
            setMisc(data)
        })
    }

    return (
        <div className="my-4 col-md-12 t-grid md:t-grid-cols-6 t-gap-4">
            <div className="t-col-span-6 t-font-bold">Analytics</div>

            <div className="p-4 t-bg-white t-col-span-2">
                <div className="t-text-xs">Total Applicants</div>
                <div className="t-text-md t-text-emerald-500">
                    {misc.total_applicants}
                </div>
            </div>

            <div className="p-4 t-bg-white t-col-span-2">
                <div className="t-text-xs">Applicants Today</div>
                <div className="t-text-md t-text-emerald-500">
                    {misc.applicants_this_year}
                </div>
            </div>

            <div className="t-col-span-6 t-grid md:t-grid-cols-8 t-gap-4">
                <div className="p-4 t-bg-white t-col-span-2">
                    <div className="t-text-xs">Vertically Aligned</div>
                    <div className="t-text-md t-text-emerald-500">
                        {misc.vertical_count}
                    </div>
                </div>

                <div className="p-4 t-bg-white t-col-span-2">
                    <div className="t-text-xs ">Non-vertically Aligned</div>
                    <div className="t-text-md t-text-rose-500">
                        {misc.non_vertical_count}
                    </div>
                </div>

                <div className="p-4 t-bg-white t-col-span-2">
                    <div className="t-text-xs ">Total Number of Seminars</div>
                    <div className="t-text-md t-text-sky-500">
                        {misc.total_seminars}
                    </div>
                </div>

                <div className="p-4 t-bg-white t-col-span-2">
                    <div className="t-text-xs ">Seminars this Year</div>
                    <div className="t-text-md t-text-teal-500">
                        {misc.seminars_this_year}
                    </div>
                </div>
            </div>

            <div className="p-3 bg-white t-col-span-6">
                <div className="t-col-span-6 t-font-bold">
                    Administrative Officers
                </div>
                <canvas
                    id="administrative-chart"
                    style={{width: '100%', height: '30vh'}}></canvas>
            </div>

            <div className="p-3 bg-white t-col-span-3">
                <div className="t-col-span-6 t-font-bold">Accountant</div>
                <canvas
                    id="accountant-chart"
                    style={{width: '100%', height: '30vh'}}></canvas>
            </div>

            <div className="p-3 bg-white t-col-span-3">
                <div className="t-col-span-6 t-font-bold">Instructors</div>
                <canvas
                    id="instructor-chart"
                    style={{width: '100%', height: '30vh'}}></canvas>
            </div>

            <div className="p-3 bg-white t-col-span-6">
                <div className="t-col-span-6 t-font-bold">Professors</div>
                <canvas
                    id="professor-chart"
                    style={{width: '100%', height: '30vh'}}></canvas>
            </div>

            <div className="p-3 bg-white t-col-span-6">
                <div className="t-col-span-6 t-font-bold">Others</div>
                <canvas
                    id="other-chart"
                    style={{width: '100%', height: '20vh'}}></canvas>
            </div>
        </div>
    )
}

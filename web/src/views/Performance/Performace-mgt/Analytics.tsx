import React from 'react'
import {PositionsEnum} from '../../../core/enum/staff'
import {Auth} from '../../../services/auth.service'

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
        })
    }

    function getMisc() {
        const api = new Auth('misc')
        api.fetch({}).then((data) => {
            setMisc(data)
        })
    }

    return (
        <div className="col-md-12 my-4 t-grid t-grid-cols-6 t-gap-4">
            <div className="t-col-span-6 t-font-bold">Analytics</div>

            <div className="t-bg-white p-4 t-col-span-2">
                <div className="t-text-xs">Vertically Aligned</div>
                <div className="t-text-md t-text-emerald-500">
                    {misc.vertical_count}
                </div>
            </div>

            <div className="t-bg-white p-4  t-col-span-2">
                <div className="t-text-xs ">Non-vertically Aligned</div>
                <div className="t-text-md t-text-rose-500">
                    {misc.non_vertical_count}
                </div>
            </div>

            <div className="t-bg-white p-4  t-col-span-2">
                <div className="t-text-xs ">Total Number of Seminars</div>
                <div className="t-text-md t-text-sky-500">
                    {misc.total_seminars}
                </div>
            </div>

            <div className="t-bg-white p-4 t-col-span-2">
                <div className="t-text-xs ">Seminars this Year</div>
                <div className="t-text-md t-text-teal-500">
                    {misc.seminars_this_year}
                </div>
            </div>

            <div className="t-col-span-6"> </div>

            {positions.map((data, index) => (
                <React.Fragment key={index}>
                    <div className="t-bg-white p-4 ">
                        <div className="t-text-xs">{data.position}</div>
                        <div className="t-text-md t-text-blue-900 ">
                            {data.count}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

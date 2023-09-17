import {sentencify} from '../../../helpers'

declare var Chart: any

export const renderChart = (
    chartId: string,
    label: string,
    filterKeywords: string[],
    positions: {
        position: string
        count: string
        part_time: string
        regular: string
        job_order: string
    }[],
) => {
    const filteredPositions = positions.filter((p) =>
        filterKeywords.some((keyword) => p.position.includes(keyword)),
    )

    new Chart(chartId, {
        type: 'bar',
        data: {
            labels: filteredPositions.map((p) => p.position),
            datasets: [
                ...['job_order', 'regular', 'part_time', 'count'].map(
                    (v: any) => ({
                        label: sentencify(v),
                        backgroundColor: generateColorPalette(v),
                        data: filteredPositions.map((p: any) => p[v]),
                    }),
                ),
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    })
}

const generateColorPalette = (
    v: 'job_order' | 'regular' | 'part_time' | 'count',
) => {
    const colorMap = {
        job_order: '#CF2933',
        regular: '#2ecc71',
        part_time: '#0183E7',
        count: 'black',
    }

    return colorMap[v] || 'black'
}

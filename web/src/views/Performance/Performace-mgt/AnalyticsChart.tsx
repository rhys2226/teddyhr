declare var Chart: any

export const renderChart = (
    chartId: string,
    label: string,
    filterKeywords: string[],
    positions: {position: string; count: string}[],
) => {
    const filteredPositions = positions.filter((p) =>
        filterKeywords.some((keyword) => p.position.includes(keyword)),
    )

    const colorPalette = generateColorPalette(filteredPositions.length)

    new Chart(chartId, {
        type: 'bar',
        data: {
            labels: filteredPositions.map((p) => p.position),
            datasets: [
                {
                    label: label,
                    backgroundColor: colorPalette,
                    data: filteredPositions.map((p) => p.count),
                },
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

const generateColorPalette = (length: number) => {
    const palette = ['black', '#0282E1', '#001651', '#37A76D', '#D72011']

    while (palette.length < length) {
        palette.push(...palette)
    }

    return palette.slice(0, length)
}

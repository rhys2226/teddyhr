const userData: any = localStorage.getItem( 'user' )


export const performanceManagement = [
    {
        title: 'Top Employees',
        route: '/home/',
        icon: 'fe-bar-chart-2'
    },
]

export const usersNav = [
    {
        title: 'Applicants',
        route: '/home/applicants',
        icon: 'fe-mail'
    },
    {
        title: 'Employees',
        route: '/home/employees',
        icon: 'fe-user-check'
    },
    {
        title: 'Add Employee',
        route: '/home/employees-add',
        icon: 'fe-user-plus'
    },
]


export const supervisions = [
    {
        title: 'Supervisors',
        route: '/home/supervisors',
        icon: 'fe-hexagon'
    },
]

export const recruitmentProcess = [
    {
        title: 'Add Vacancy',
        route: '/home/vancancy-add',
        icon: 'fe-key'
    },
    {
        title: 'View Vacancies',
        route: '/home/vacancies',
        icon: 'fe-layers'
    },
]




export const HRDLearningAndDevelopment = [
    // {
    //     title: 'Upcomming Seminars',
    //     route: '/home/seminars',
    //     icon: 'fe-calendar'
    // },
    {
        title: 'Seminars Attended',
        route: '/home/seminars-attended/' + JSON.parse( userData ).id,
        icon: 'fe-mic'
    },
]

export const awardsAndRecognition = [
    {
        title: 'Add Award',
        route: '/home/awards',
        icon: 'fe-award'
    },
    {
        title: 'List of Awards',
        route: '/home/awards-lists',
        icon: 'fe-list'
    },
]


export const managenentOfLeaveCard = [
    {
        title: 'Application for Leave',
        route: '/home/leave-application',
        icon: 'fe-edit-3'
    },
    {
        title: 'Leave Balances',
        route: '/home/leave-balances',
        icon: 'fe-credit-card'
    },
    {
        title: 'Leaves',
        route: '/home/leaves',
        icon: 'fe-truck'
    },
    {
        title: 'Leave Settings',
        route: '/home/leave-settings',
        icon: 'fe-tool'
    },
]


export const employemtStatus = [
    {
        title: 'Employment Status',
        route: '/home/employment-Status',
        icon: 'fe-battery'
    },
]

export const Forms = [
    {
        title: 'Forms',
        route: '/home/',
        icon: 'fe-folder'
    },

]



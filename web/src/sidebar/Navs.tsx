

export const applicantNav = ( id: Number ) => {
    return [
        {
            title: 'Dashboard',
            route: '/home/',
            icon: 'fe-bar-chart-2'
        },
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
            title: 'Employment Status',
            route: '/home/employment-Status',
            icon: 'fe-battery'
        },
        {
            title: 'View Vacancies',
            route: '/home/vacancies',
            icon: 'fe-layers'
        },
    ]
}


export const employeeNav = ( id: Number ) => {
    return [
        {
            title: 'Dashboard',
            route: '/home/',
            icon: 'fe-bar-chart-2'
        },
        { Heading: 'Users' },
        {
            title: 'Employees',
            route: '/home/employees',
            icon: 'fe-user-check'
        },
        {
            title: 'Applicants',
            route: '/home/applicants',
            icon: 'fe-mail'
        },
        { Heading: 'Supervisions' },
        {
            title: 'Supervisors',
            route: '/home/supervisors',
            icon: 'fe-hexagon'
        },
        { Heading: 'Recruitment' },
        {
            title: 'View Vacancies',
            route: '/home/vacancies',
            icon: 'fe-layers'
        },
        { Heading: 'Leave' },
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
        { Heading: 'Learning and Development' },
        {
            title: 'Seminars Attended',
            route: '/home/seminars-attended/' + id,
            icon: 'fe-mic'
        },
        { Heading: 'Awards & Recognition' },
        {
            title: 'List of Awards',
            route: '/home/awards-lists',
            icon: 'fe-list'
        },
    ]
}


export const adminNav = ( id: Number ) => {
    return [
        {
            title: 'Dashboard',
            route: '/home/',
            icon: 'fe-bar-chart-2'
        },
        { Heading: 'Users' },
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
        { Heading: 'Supervisions' },
        {
            title: 'Supervisors',
            route: '/home/supervisors',
            icon: 'fe-hexagon'
        },
        { Heading: 'Leave' },
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
        { Heading: 'Awards & Recognition' },
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
}

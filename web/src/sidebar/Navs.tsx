

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
            route: '/home/employment-status/' + id,
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
        { Heading: 'System Users' },
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
        { Heading: 'Recruitment' },
        {
            title: 'Vacancies',
            route: '/home/vacancies',
            icon: 'fe-layers'
        },
        { Heading: 'Leaves' },
        {
            title: 'Leave Balances',
            route: '/home/leave-balances',
            icon: 'fe-credit-card'
        },
        {
            title: 'Leaves',
            route: '/home/my-leaves/' + id,
            icon: 'fe-truck'
        },
        {
            title: 'Application for Leave',
            route: '/home/leave-application',
            icon: 'fe-edit-3'
        },
        { Heading: 'HRD' },
        {
            title: 'Seminars',
            route: '/home/hrd/seminars',
            icon: 'fe-airplay'
        },
        {
            title: 'Scholarships',
            route: '/home/hrd/scholarships',
            icon: 'fe-columns'
        },
        { Heading: 'Seminars' },
        {
            title: 'My Seminars',
            route: '/home/seminars-attended/' + id,
            icon: 'fe-mic'
        },
        { Heading: 'Awards & Recognition' },
        {
            title: 'List of Awards',
            route: '/home/awards-lists',
            icon: 'fe-list'
        },
        { Heading: 'Department' },
        {
            title: 'Supervisors',
            route: '/home/supervisors',
            icon: 'fe-shield'
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
            title: 'Add an employee',
            route: '/home/employees-add',
            icon: 'fe-user-plus'
        },
        { Heading: 'Recruitment' },
        {
            title: 'Add a vacancy',
            route: '/home/vancancy-add',
            icon: 'fe-layers'
        },
        { Heading: 'Leaves' },
        {
            title: 'Leave Settings',
            route: '/home/leave-settings',
            icon: 'fe-tool'
        },
        {
            title: 'Leaves',
            route: '/home/leaves',
            icon: 'fe-truck'
        },
        { Heading: 'HRD' },
        {
            title: 'Add as Seminar',
            route: '/home/hrd/seminars-add',
            icon: 'fe-mic'
        },
        {
            title: 'Seminars',
            route: '/home/hrd/seminars',
            icon: 'fe-airplay'
        },
        {
            title: 'Add as Scholarship',
            route: '/home/hrd/scholarships-add',
            icon: 'fe-copy'
        },
        {
            title: 'Scholarships',
            route: '/home/hrd/scholarships',
            icon: 'fe-columns'
        },

        { Heading: 'Awards & Recognition' },
        {
            title: 'List of Awards',
            route: '/home/awards-lists',
            icon: 'fe-list'
        },
        {
            title: 'Add Award',
            route: '/home/awards',
            icon: 'fe-award'
        },
        { Heading: 'Department' },
        {
            title: 'Supervisors',
            route: '/home/supervisors',
            icon: 'fe-hexagon'
        },
    ]
}

import React from 'react'

const userData: any = localStorage.getItem( 'user' )
let user: any = 0
if (userData != undefined) {
    user = JSON.parse( userData )[ 'id' ]
}

export const settingsNav = [
    {
        title:  'Profile',
        route:'/home/settings/' + user
    },
    {
        title:  'Settings',
        route:'/home/settings/profile/'  + user
    },
    {
        title:  'Personal Data Sheet',
        route:'/home/settings/personal-data-sheet/'  + user
    },
        {
        title:  'IPCR',
        route:'/home/settings/ipcr/'  + user
    },
    {
        title:  'Service Record',
        route:'/home/settings/service-record/'  + user
    },
    {
        title:  'Leave Card',
        route:'/home/settings/leave-card/'  + user
    },
 ]
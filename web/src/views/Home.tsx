import React from 'react'
import Content from '../components/main/Content'
import Forms from '../components/Modals/Forms'
import HomeNav from '../headers/HomeNav'
import Sidebar from '../sidebar/Sidebar'

export default function Home() {
    return (
        <div>
            <HomeNav />
            <Sidebar />
            <Content />
            <Forms />
        </div>
    )
}

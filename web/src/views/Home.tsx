import React from 'react'
import Content from '../components/main/Content'
import HomeNav from '../headers/HomeNav'
import Sidebar from '../sidebar/Sidebar'

export default function Home() {
    return (
        <div>
            <HomeNav />
            <Sidebar />
            <Content />
        </div>
    )
}

import React from 'react'

import MainHeader from './MainHeader'
import './MainNavigation.css'

const MainNavigation = props =>{
    return <MainHeader>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
        </button>
        <h1 className="main-navigation__title">
            Your Places
        </h1>

    </MainHeader>
}

export default MainNavigation
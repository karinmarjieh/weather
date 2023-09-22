import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function MainNavBar() {
  return (
  
        <div className='main-navbar'>
            <header>
                <nav>
                    <h1>Weather App</h1>
                    <NavLink to="/">Dashboard</NavLink>
                    <NavLink to="favorites">Favorites</NavLink>
                    <NavLink to="forecast">Forecast</NavLink>
                    <NavLink to="signIn">SignIn</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>

  )
}

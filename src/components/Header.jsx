import React from 'react'
import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom'
import { LogOut, LogIn } from 'react-feather'
// import logo from './../../images/logo.png'; 

const Header = () => {
    const {user, handleLogout} = useAuth()
  return (
    <div id="header--wrapper">
      {/* <img src={logo} alt="logo" /> */}

        {user ? (
            <>
                Welcome {user.name}
                <LogOut className="header--link" onClick={handleLogout}/>
            </>
        ): (
            <>
                <Link to="/">
                    <LogIn className="header--link"/>
                </Link>
            </>
        )}
    </div>
  )
}

export default Header

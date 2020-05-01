import React from 'react';
import navStyle from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    
    return (
        <nav className={navStyle.nav}>
            <div className={navStyle.item}>
                <NavLink to='/profile' activeClassName = {navStyle.active}>Profile</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to='/users' activeClassName = {navStyle.active}>Users</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to='/dialogs' activeClassName = {navStyle.active}>Messages</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to='/news' activeClassName = {navStyle.active}>News</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to='/music' activeClassName = {navStyle.active}>Music</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to='/settings' activeClassName = {navStyle.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;
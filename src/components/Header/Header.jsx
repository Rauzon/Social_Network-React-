import React from 'react';
import headerStyle from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    
    return (
            <header className = {headerStyle.header}>
                <div>
                    <img src = "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" />
                </div>
                <div className={headerStyle.header__loginLink}>
                    {(props.authData.isLogining) ? props.authData.login :
                        <NavLink to={'/login'}>Login</NavLink>}
                    {<div className={headerStyle.header__loginLink_button}>
                        {(props.isLogining) ? <button onClick={props.logOut}>Log out</button> : ''}
                    </div>}
                </div>
            </header>
    );
}

export default Header;
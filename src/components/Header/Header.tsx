import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AuthType} from "./Header-container";
import {FC} from "react";


export type HeaderType = AuthType

const Header:FC<HeaderType> = ({isAuth,login,logout,...props}) => {
    return <header className={s.header}>

        <div className={s.login_block}>
            {isAuth
                ? <div>{login} - <button onClick={logout}>Log out</button></div>
                :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;
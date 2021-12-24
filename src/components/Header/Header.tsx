import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AuthType} from "./Header-container";


export type HeaderType = AuthType

const Header = (props: HeaderType) => {
    return <header className={s.header}>

        <div className={s.login_block}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;
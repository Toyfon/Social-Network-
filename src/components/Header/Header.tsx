import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AuthType} from "./Header-container";


export type HeaderType = AuthType

const Header = (props: HeaderType) => {
    return <header className={s.header}>

        <div className={s.login_block}>
            {props.isAuth ? props.login
                :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>

    </header>
}

export default Header;
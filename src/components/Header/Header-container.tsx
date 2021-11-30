import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC, toggleIsFetching} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Preloader} from "../common/Preloader/Preloader";


export type AuthType = {
    login:string | null
    isAuth:boolean
    setAuthUserDataAC: (id:number,email:string,login:string) => void
    isFetching:boolean
    toggleIsFetching: (isFetching:boolean)=>void
}

class HeaderContainer  extends React.Component<AuthType>{

componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials:true
    }) //Ajax запрос на сервер (side-effect)
        .then(response => {
            this.props.toggleIsFetching(false)
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserDataAC(id,email,login)
            }
        })
}

    render() {
         return <>
             {this.props.isFetching? <Preloader/> : null}
        <Header {...this.props}/>
    </>

    }
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching:state.auth.isFetching
})

export default connect (mapStateToProps,{setAuthUserDataAC,toggleIsFetching}) (HeaderContainer)



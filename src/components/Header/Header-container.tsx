import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataAC, toggleIsFetching} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Preloader} from "../common/Preloader/Preloader";
import {authAPI, Result} from "../../api/api";


export type AuthType = {
    login: string | null
    isAuth: boolean
    setAuthUserDataAC: (id: number, email: string, login: string) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}



type AuthDataType = {
    id: number,
    email: string,
    login: string
}

export type AuthMeResponseType = Result<AuthDataType>



class HeaderContainer extends React.Component<AuthType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        authAPI.getAuth().then((response) => {
            debugger
            this.props.toggleIsFetching(false)
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserDataAC(id, email, login)
            }
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props}/>
        </>

    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {
    setAuthUserDataAC, toggleIsFetching
})(HeaderContainer)



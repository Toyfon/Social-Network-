import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reducer";
import {RootReducerType} from "../../Redux/redux-store";
import {Preloader} from "../common/Preloader/Preloader";
import {Result} from "../../api/api";


export type AuthType = {
    login: string | null
    isAuth: boolean
    isFetching: boolean
    getAuthUserData:() => void
}


type AuthDataType = {
    id: number,
    email: string,
    login: string
}

export type AuthMeResponseType = Result<AuthDataType>



class HeaderContainer extends React.Component<AuthType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props}/>
        </>

    }
}

const mapStateToProps = (state: RootReducerType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)



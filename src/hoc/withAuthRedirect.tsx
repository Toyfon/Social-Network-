import {Redirect} from "react-router-dom";
import React from "react";
import {RootReducerType} from "../Redux/redux-store";
import {connect} from "react-redux";


type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootReducerType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})



export function withAuthRedirect<T>(Component: React.ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T} />
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}


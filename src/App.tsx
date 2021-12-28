import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import React from "react";
import UsersContainer from "./components/Users/usersContainer";

import HeaderContainer from "./components/Header/Header-container";
import {LoginFormReactHookForm} from "./login/LoginFormReactHookForm";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {RootReducerType} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')) // lazy loading
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')) // lazy loading


type AppType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           // Lazy loading Components
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginFormReactHookForm/>}/>

                </div>
            </div>

        )
    }
}


const mapStateToProps = (state: RootReducerType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)


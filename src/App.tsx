import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/usersContainer";


const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                {/*  <Route path='/friends' render={() => <Friends friends={props.store.getState().friendsBar.friends}/>}/>*/}
                <Route path='/users' render={() => <UsersContainer/>}/>

            </div>
        </div>

    )
}


export default App;

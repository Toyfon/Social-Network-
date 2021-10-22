import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import React from "react";
import  {StoreType} from "./Redux/State";
import {Friends} from "./components/Navbar/Friends/Friends";


type AppType = {
    store: StoreType
}

const App: React.FC<AppType> = (props) => {



    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path ='/dialogs' render={ () => <Dialogs
                    dialogsPage={props.store.state.dialogsPage}
                    dispatch={props.store.dispatch.bind(props.store)} />} />
                <Route path = '/profile' render={ () => <Profile
                    profilePage={props.store.state.profilePage}
                    dispatch={props.store.dispatch.bind(props.store)}/>} />
                <Route path = '/news' render={ () => <News/>} />
                <Route path = '/music' render={ () => <Music/>} />
                <Route path = '/settings' render={ () => <Settings/>} />
                <Route path = '/friends' render={ () => <Friends friends={props.store.state.friendsBar.friends}/>} />

            </div>
        </div>

    )
}


export default App;

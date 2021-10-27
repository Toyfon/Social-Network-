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
import {Friends} from "./components/Navbar/Friends/Friends";
import {AppStateType} from "./Redux/redux-store";
import {Store} from "redux";
import {ActionsType} from "./Redux/dialogsPage-reducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppType = {
    store: Store<AppStateType, any>
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends friends={props.store.getState().friendsBar.friends}/>}/>

            </div>
        </div>

    )
}


export default App;

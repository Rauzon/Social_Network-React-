import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContent from './components/ProfileContent/ProfileContent';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";





    const App = (props) => {
        return (
                <div className="wrapper">
                    <Header/>
                    <Nav/>
                    <div className="wrapper-dialog">
                        <Route path='/profile' render={() => <ProfileContent dataPost={props.store.ProfileData} dispatch={props.dispatch} />}/>
                        <Route path='/dialogs'
                               render={() => <Dialogs message={props.store.DialogData} dispatch= {props.dispatch} />}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                    </div>
                </div>
        );
    }

export default App;

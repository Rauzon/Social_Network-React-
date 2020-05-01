import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContent from './components/ProfileContent/ProfileContent';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";



    const App = (props) => {
        return (
                <div className="wrapper">
                    <Header/>
                    <Nav/>
                    <div className="wrapper-dialog">
                        <Route path='/profile' render={() => <ProfileContent  />}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer  />}/>
                        <Route path='/users' render={() =><UsersContainer /> } />
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                    </div>
                </div>
        );
    }

export default App;

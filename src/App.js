import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersCompose} from "./components/Users/UsersContainer";
import {ProfileContentAPI} from "./components/ProfileContent/ProfileContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginComponent} from "./components/Header/LoginComponent";




    const App = (props) => {
        return (
                <div className="wrapper">
                    <HeaderContainer />
                    <Nav/>
                    <div className="wrapper-dialog">
                        <Route path='/profile/:userId?' render={() => <ProfileContentAPI />}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer  />}/>
                        <Route path='/users' render={() =><UsersCompose /> } />
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/login' render={() => <LoginComponent />}/>
                    </div>
                </div>
        );
    }

export default App;

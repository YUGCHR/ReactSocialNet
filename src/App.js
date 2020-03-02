import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {

  let CallProfile = () => <Profile />;
  let CallDialogs = () => <DialogsContainer />;
  let CallUsers = () => <UsersContainer />;
  
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
 
      <div className='app-wrapper-content'>
        <Route path='/profile' render={CallProfile} />
        <Route path='/dialogs' render={CallDialogs} />
        <Route path='/news' render={News} />
        <Route path='/music' render={Music} />        
        <Route path='/users' render={CallUsers} />        
        <Route path='/settings' render={Settings} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';

const App = (props) => {

  let CallProfile = () => <Profile
    profilePage={props.substance.profilePage}
    addPost={props.addPost}
    updateNewPostText={props.updateNewPostText} />;

  let CallDialogs = () => <Dialogs
    substance={props.substance.dialogsPage}
    addMessage={props.addMessage} />;

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
     
      <div className='app-wrapper-content'>
        <Route path='/profile' render={CallProfile} />
        <Route path='/dialogs' render={CallDialogs} />
        <Route path='/news' render={News} />
        <Route path='/music' render={Music} />
        <Route path='/settings' render={Settings} />
      </div>
    </div>
  );
}

export default App;

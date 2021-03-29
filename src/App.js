import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/usersContainer';
import {withSuspense} from './hoc/withSuspense';
import { initializeApp } from './redux/app-reducer';
import store from './redux/redux-store';
import { Redirect, Switch } from "react-router";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    //console.log("Some error occured");
    //console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Switch>
              <Route exact  path='/' render={() => <Redirect to={'/profile'}/>}/>
              <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
              <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
              <Route path='/news' render={ () => <News /> } />
              <Route path='/music' render={ () => <Music /> } />
              <Route path='/setting' render={ () => <Setting /> } />
              <Route path='/users' render={ () => <UsersContainer /> } />
              <Route path='/login' render={ () => <Login /> } />
              <Route path='*' render={ () => <div>404 NOT FOUND</div> } />
            </Switch> 
         </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) => {
    return  <BrowserRouter>
    <Provider store={store}>
        <AppContainer />           
    </Provider>
</BrowserRouter>
  }

export default SamuraiJSApp;
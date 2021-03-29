import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


const Header = (props) => {
  return <header className={classes.header}>
          <img src='http://www.pngall.com/wp-content/uploads/2017/01/Colored-Smoke-PNG.png'/>
          <div className={classes.loginBlock}>
            { props.isAuth 
            ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to = {'./login'}>Login</NavLink>}
          </div>
        </header>
}
export default Header;
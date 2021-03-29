import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user1.png';
import classes from './users.module.css';



let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
            <div className={classes.user}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button className={classes.btn} disabled={followingInProgress
                            .some(id => id === user.id)} 
                                onClick={() => { unfollow(user.id) }}>
                            Unfollow</button>
                        : <button className={classes.btn} disabled={followingInProgress
                            .some(id => id === user.id)} 
                                onClick={() => { follow(user.id) }}>
                            Follow</button>}
                </div>
                <div className={classes.userInfo}>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={classes.location}>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </div>
                </div>
            </div>
        </div>
}


export default User;
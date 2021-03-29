import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0 },
        {id: 2, message: 'It is my first post', likesCount: 23},
        {id: 3, message: 'It is so happy day', likesCount: 100},
        {id: 4, message: 'Best day of my life', likesCount: 10500}
        ]
};

test('length of post should be incremented', () => {
   
    //1. test data
    let action = addPostActionCreator('IT kamasutra.com');
 
    //2. action
    let newState = profileReducer(state, action);
    
    //3.expectation
    expect(newState.posts.length).toBe(5);
});


test('message of new post of should be correct', () => {
   
    //1. test data
    let action = addPostActionCreator('IT kamasutra.com');
 
    //2. action
    let newState = profileReducer(state, action);
    
    //3.expectation
    expect(newState.posts[4].message).toBe('IT kamasutra.com');
});

test('after deleting length of messages should be decrement', () => {
   
    //1. test data
    let action = deletePost(1);
 
    //2. action
    let newState = profileReducer(state, action);
    
    //3.expectation
    expect(newState.posts.length).toBe(3);
});

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';



let store = {
    _state: {
        profilePage: {
            posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 0 },
            {id: 2, message: 'It is my first post', likesCount: 23}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
            {id: '1', name: 'Dim'},
            {id: '2', name: 'Kat'},
            {id: '3', name: 'Alo'},
            {id: '4', name: 'Ole'},
            {id: '5', name: 'Dem'},
            {id: '6', name: 'Tania'},
            {id: '7', name: 'Slav'}
        ],
            messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Good'},
            {id: 4, message: 'Good day'},
            {id: 5, message: 'Good evening'},
            {id: 6, message: 'Good afternoon'},
            {id: 7, message: 'Good year'}
        ],
            newMessageBody: "", 
           
            sidebar: [
            {id: 1, name: 'Katia'},
            {id: 1, name: 'Dima'},
            {id: 1, name: 'Tania'}
            ]
        },
        sidebar: {}
    }, 
    _callSubscriber () {
        console.log('State changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}
window.store = store;
export default store;

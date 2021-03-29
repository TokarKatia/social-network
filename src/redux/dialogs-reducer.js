const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type ) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: body}]
            };
        default: 
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
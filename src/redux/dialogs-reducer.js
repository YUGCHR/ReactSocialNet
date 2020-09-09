const ADD_MESSAGE = "ADD-MESSAGE";
/* const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"; */

let intialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I am fine!" },
    { id: 4, message: "(tattered cat)" },
    { id: 5, message: "And how are you?" },
    { id: 6, message: "I am fine also" },
  ],
};

const dialogsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let messageBody = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 8, message: messageBody }],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;

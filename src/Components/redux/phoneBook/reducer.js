// import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";
import types from "./types";

const initialState = {
  contacts: [],
  filter: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: ( state, action ) => {
      state.contacts.push(action.payload);
    },

    deleteContact: ( state, action ) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },

    filterContact: ( state, action ) => {
      state.filter = action.payload
    },
  },
});

export const { addContact, deleteContact, filterContact } = contactSlice.actions;
export default contactSlice.reducer;

// const items = ( state = initialState.contacts, action ) => {
//   const { type, payload } = action;
//   switch (type) {
//     case types.ADD_CONTACT:
//       return {
//         ...state,
//         state.
//       };
//   }
// };

// export default combineReducers({
//   items,
// });
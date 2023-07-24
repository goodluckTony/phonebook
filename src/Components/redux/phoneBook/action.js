import { type } from "@testing-library/user-event/dist/type";

import { createAction } from "@reduxjs/toolkit";
import types from "./types";

export const addContact = createAction(types.ADD_CONTACT);
export const deleteContact = createAction(types.DELETE_CONTACT);
export const filterContact = createAction(types.FILTER_CONTACT);

// export const contactAdd = () => ({
//   type: types.ADD_CONTACT,
//   payload
// });

// export const contactDelete = () => ({
//   type: types.DELETE_CONTACT,
//   payload
// });

// export const contactFilter = () => ({
//   type: types.FILTER_CONTACT,
//   payload
// });
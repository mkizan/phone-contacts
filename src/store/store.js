import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

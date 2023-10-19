import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
  getContactsThunk,
} from "./operations";
import { contactsInitialState } from "./initialState";

const handlePending = (state) => {
  state.isloading = true;
  state.error = "";
};

const handleFulfilled = (state) => {
  state.isloading = false;
  state.error = "";
};

const handleFulfilledGetContacts = (state, { payload }) => {
  state.contacts = payload;
};

const handleFulfilledAddContact = (state, { payload }) => {
  state.contacts.push(payload);
};

const handleFulfilledEditContact = (state, { payload }) => {
  state.contacts = state.contacts.map((contact) => {
    if (contact.id === payload.id) {
      contact = payload;
    }
    return contact;
  });
};

const handleFulfilledDeleteContact = (state, { payload }) => {
  state.contacts = state.contacts.filter(
    (contact) => contact.id !== payload.id
  );
};

const handleRejected = (state, { payload }) => {
  state.isloading = false;
  state.error = payload;
};

const arrayOfThunks = [
  getContactsThunk,
  addContactThunk,
  editContactThunk,
  deleteContactThunk,
];

export const STATUS = Object.freeze({
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
});

const iterateThunks = (thunks, fetchStatus) =>
  thunks.map((thunk) => thunk[fetchStatus]);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGetContacts)
      .addCase(addContactThunk.fulfilled, handleFulfilledAddContact)
      .addCase(editContactThunk.fulfilled, handleFulfilledEditContact)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDeleteContact)
      .addMatcher(
        isAnyOf(...iterateThunks(arrayOfThunks, PENDING)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...iterateThunks(arrayOfThunks, FULFILLED)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...iterateThunks(arrayOfThunks, REJECTED)),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;

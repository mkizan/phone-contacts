import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "services/api";

export const getContactsThunk = createAsyncThunk(
  "contacts/get",
  async () => await getContacts()
);

export const addContactThunk = createAsyncThunk(
  "contacts/add",
  async (data) => await addContact(data)
);

export const editContactThunk = createAsyncThunk(
  "contacts/edit",
  async (data) => await editContactThunk(data)
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/delete",
  async (id) => await deleteContact(id)
);

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004";

export const addContact = async (values) => {
  const response = await axios.post("/contacts", values);
  return response.data;
};

export const getContacts = async () => {
  const response = await axios.get("/contacts");
  return response.data;
};

export const deleteContact = async (id) => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

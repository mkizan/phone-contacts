import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004";

export const getContacts = async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addContact = async (values) => {
  try {
    const response = await axios.post("/contacts", values);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const editContact = async (values) => {
  try {
    const response = await axios.put(`/contacts/${values.id}`, {
      name: values.name,
      phone: values.phone,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

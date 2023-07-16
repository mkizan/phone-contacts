import { useState, useEffect } from "react";
import * as API from "../services/api";

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
  );

  const fetchContacts = async () => {
    try {
      const fetchedContacts = await API.getContacts();
      setState(fetchedContacts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(window.localStorage);
    window.localStorage.setItem(key, JSON.stringify(state));

    if (window.localStorage.contacts === "[]") fetchContacts();
  }, [key, state]);

  return [state, setState];
};

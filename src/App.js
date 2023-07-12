import { useState, useEffect } from "react";
import Phonebook from "./Components/Phonebook";
import Contacts from "./Components/Contacts";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState({
    contacts: [],
    filter: "",
    name: "",
    number: "",
  });

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    // setContacts(storedContacts);
    if (storedContacts.length !== 0) {
      setContacts((prev) => ({
        ...prev,
        contacts: storedContacts,
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts.contacts));
    // localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleContacts = (newContact) => {
    const id = nanoid();
    console.log(newContact, "newContact");
    const contactWithId = { ...newContact, id };
    console.log(contactWithId, "contactWithId");

    const { name } = newContact;
    const isContactAlreadyExist = contacts.contacts.some(
      (contact) => contact.name === name
    );
    if (isContactAlreadyExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts((prev) => ({
      ...prev,
      contacts: [...prev.contacts, contactWithId],
    }));
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => ({
      ...prev,
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  return (
    <div className="App">
      <Phonebook handleContacts={handleContacts} />
      <Contacts contacts={contacts.contacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;

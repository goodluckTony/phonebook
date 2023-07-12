import React, { useState } from "react";

const Contacts = ({ contacts, onDelete }) => {
  const [search, setSearch] = useState('');

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const filteredContacts = contacts.filter(contact => {
    console.log(contact);
    return contact.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div>
      <h2>Contacts</h2>
      <div>
        <label htmlFor="search">Find contacts by name:</label>
        <input type="text" id="search" onChange={handleSearch} />
      </div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Contacts;
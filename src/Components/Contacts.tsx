import React, { useState } from "react";
import Contact from "./Contact";

interface IContact {
  name: string;
  email?: string;
}

export default function Contacts() {
  const [contacts, setContacts] = useState<IContact>({} as IContact);
  const [contactList, setContactsList] = useState<IContact[]>([]);
  const onClick = () => {
    setContactsList([...contactList, contacts]);
    setContacts({
      name: "",
      email: "",
    });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };
  const handleRemove = (email: string) => {
    const newSetContact = contactList.filter(
      (contact) => contact.email !== email
    );
    setContactsList(newSetContact);
  };
  return (
    <div>
      <h1>Contact list</h1>
      <div>
        <input
          type="text"
          value={contacts.name}
          name="name"
          placeholder="Enter Your Name"
          onChange={onChange}
        />
        <input
          type="text"
          value={contacts.email}
          name="email"
          placeholder="Enter your Email"
          onChange={onChange}
        />
        <button onClick={onClick}>Add</button>
      </div>
      {contactList.map((c) => (
        <Contact
          key={c.name}
          name={c.name}
          email={c.email}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
}

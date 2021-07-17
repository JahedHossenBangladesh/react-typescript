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
  //   const handleRemove =
  return (
    <div>
      <h1>Contact list</h1>
      <div>
        <input type="text" value={contacts.name} onChange={onChange} />
        <input type="text" value={contacts.email} onChange={onChange} />
        <button onClick={onClick}>Add</button>
        {contactList.map((contact) => (
          <Contact key={contact.name} name={contact.name} />
        ))}
      </div>
      \//.,
    </div>
  );
}

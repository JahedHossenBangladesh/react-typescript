import React from "react";
interface Iprops {
  name: string;
  email?: string;
  handleRemove: (email: string) => void;
}
function Contact({ name, email = "N/A", handleRemove }: Iprops) {
  return (
    <div>
      <h1>Name :{name}</h1>
      <h2>{email}</h2>
      <button onClick={() => handleRemove(email)}>Remove</button>
    </div>
  );
}

export default Contact;

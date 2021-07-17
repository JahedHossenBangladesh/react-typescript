import React from "react";
interface Iprops {
  name: string;
  email?: string;
}
function Contact({ name, email = "N/A" }: Iprops) {
  return (
    <div>
      <h1>Name :{name}</h1>
      <h2>{email}</h2>
    </div>
  );
}

export default Contact;

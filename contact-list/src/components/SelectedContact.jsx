import { useState, useEffect } from 'react'

function SelectedContact({ selectedContactId, setSelectedContactId }) {

  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchOneContactDetails() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchOneContactDetails()
  }, []);

  return (
    <>
      <h4>Contact Details</h4>
      { contact && (
        <ul>
          <li>Name: {contact.name}</li>
          <li>Email: {contact.email}</li>
          <li>Phone: {contact.phone}</li>
          <li>Company: {contact.company.name}</li>
        </ul>
      )}
      <button onClick={() => {setSelectedContactId(null)}}>Back</button>
    </>
  )
}

export default SelectedContact
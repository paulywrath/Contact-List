import { useState } from 'react';
import ContactList from './components/ContactList.jsx';
import SelectedContact from "./components/SelectedContact";

function App() {

  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {
        selectedContactId ? <p>Selected contact</p> : <ContactList setSelectedContactId={setSelectedContactId}/>
      }
    </>
  )
}

export default App

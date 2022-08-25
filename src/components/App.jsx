import { useState } from 'react';
import Form from './Form/form';
import Chats from './Chats/Chats';
import Message from './CurrentContact/CurrentContact';
import data from 'data/data.json'
import { Box, StyleDiv } from './Box/Box';
import { useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentContact, setCurrentContact] = useState(null);

  useEffect(() => {
    const localStorageContacts = localStorage.getItem('contacts');
    if (localStorageContacts && localStorageContacts.length > 0) {
      setContacts(JSON.parse(localStorageContacts));
      return;
    }
    setContacts(data);
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    setCurrentContact(contacts[0]);
  }, [contacts]);

  useEffect(() => {
    if (currentContact) {
      setContacts(prevState => {
        return [
          currentContact,
          ...prevState.filter(item => {
            return item.id !== currentContact.id;
          }),
        ];
      });
    }
  }, [currentContact]);

  const changeInput = name => {
    setFilter(name);
  };

   const onChangeInput = contacts.filter(item => (item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())));

  const onContactClick = contact => {
    setCurrentContact(contact);
  };

  return (
    contacts.length > 0 && (
      <Box display="flex" width={1} flexDirection="row">
        <Box width={1 / 3} >
          <StyleDiv>
          <img src="*" alt="Foto"></img>
          <Form
          onClick={changeInput}
            />
            </StyleDiv>
          <Chats data={onChangeInput} onContactClick={onContactClick} />
        </Box>
        <Box>
          {currentContact && (
            <Message
              currentContact={currentContact}
              setCurrentContact={setCurrentContact}
            />
          )}
        </Box>
      </Box>
    )
  );
}

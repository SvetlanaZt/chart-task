import { useState, useEffect } from 'react';
import { fetchMessage } from 'fetch/fetch';
import { StyledDiv, StyledDivContact, StyledImg, StyledUl, StyledLi } from './CurrentContact.style';
import { StyledInput, StyledForm } from '../Form/Form.style'

export default function Message({ currentContact, setCurrentContact }) {
  const [newMessage, setNewMessage] = useState('');

  function onSubmit(evt) {
    evt.preventDefault();
    const currentMessage = evt.target.elements[0].value;
    setCurrentContact(prevState => {
      return {
        ...prevState,
        messages: [...prevState.messages, currentMessage],
      };
    });
    setNewMessage(currentMessage);
    evt.target.reset();
  }


  useEffect(() => {
    if (newMessage) {
      fetchMessage().then(data => {
        setCurrentContact(prevState => {
          return {
            ...prevState,
            messages: [...prevState.messages, data.value],
          };
        });
      });
    }
  }, [newMessage, setCurrentContact]);

    return (
      <StyledDiv>
        <StyledDivContact>
      <StyledImg
        src={currentContact.img}
        alt={currentContact.name}
        width="20px"
      ></StyledImg>
          <p>{currentContact.name}</p>
          </StyledDivContact>
      {currentContact.messages.length > 0 && (
        <StyledUl>
          {currentContact.messages.map(item => (
            <StyledLi key={item}>{item}</StyledLi>
          ))}
        </StyledUl>
      )}
      <StyledForm onSubmit={onSubmit}>
        <label>
          <StyledInput
            type="text"
            name="name"
            placeholder="Type your massege"
          />
          </label>
          
        <button type="submit">Send</button>
      </StyledForm>
    </StyledDiv>
  );
}
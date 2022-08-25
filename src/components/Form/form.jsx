import { useState } from 'react';
import { StyledInput, StyledForm } from './Form.style'

export default function Form({ onClick }) {
  const [name, setName] = useState('');

  const entryName = evt => {
    setName();
    onClick(evt.target.value);
  };

  return (
    <StyledForm>
      <label>
        <StyledInput
          onChange={entryName}
          type="text"
          name="name"
          // id={idName}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          autoComplete="off"
          autoFocus
          placeholder="Search or start new chat"
        />{' '}
      </label>
    </StyledForm>
  );
}

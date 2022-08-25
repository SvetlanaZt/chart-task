import ChatsItem from './ChatsItem';
import { StyledUl } from './Chats.styled'

export default function Chats({ data, onContactClick }) {
  return (
    <>
      <h1>Chats</h1>
      <StyledUl>
        {data.map(item => (
          <ChatsItem
            key={item.id}
            onClick={() => onContactClick(item)}
            src={item.img}
            name={item.name}
          />
        ))}
      </StyledUl>
    </>
  );
}

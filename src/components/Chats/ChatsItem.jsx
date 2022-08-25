import { StyledLi, StyledImg, StyledPName, StyledPData } from './Chats.styled'

const dataTime = new Date().toDateString();
const dataActive = dataTime.slice(4, 15);

export default function ChatsItem({ id, onClick, src, name }) {
  return (
    <StyledLi id={id} onClick={onClick}>
      <StyledImg src={src} alt={name} width="30px"></StyledImg>
      <StyledPName>{name}</StyledPName>
      <StyledPData>{dataActive}.</StyledPData>
    </StyledLi>
  );
}

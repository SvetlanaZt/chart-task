import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin-left: 20px;
`;
export const StyledDivContact = styled.div`
  display: flex;
  background-color: #dfd7d7;
`;
export const StyledImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 30px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export const StyledLi = styled.li`
  margin-top: 30px;
  &:nth-child(2n + 1) {
    background-color: #dfd7d7;
    text-align: right;
  }
`;

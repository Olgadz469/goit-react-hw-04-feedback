import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: blue;
    cursor: pointer;
  }
`;

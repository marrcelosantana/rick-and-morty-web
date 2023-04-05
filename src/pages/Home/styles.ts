import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 20%;
  margin-top: 1.25rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 2%;
  font-size: 14px;
  border-radius: 8px;
  border: 0;

  background-color: ${({ theme }) => theme.BODY_BACKGROUND};
  color: ${({ theme }) => theme.TEXT_WHITE};
`;

export const CardList = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

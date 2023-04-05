import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 10%;
  margin-top: 1.25rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  svg {
    position: absolute;
    margin-right: 1rem;
    color: ${({ theme }) => theme.GRAY_500};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 4% 0 2%;
  border-radius: 8px;
  border: 0;

  background-color: ${({ theme }) => theme.BODY_BACKGROUND};
  color: ${({ theme }) => theme.TEXT_WHITE};

  position: relative;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Select = styled.select`
  height: 3rem;
  width: 10rem;
  border-radius: 8px;
  border: 0;
  font-size: 13px;

  background-color: ${({ theme }) => theme.BODY_BACKGROUND};
  color: ${({ theme }) => theme.TEXT_WHITE};
  padding: 0 10px;
`;

export const CardList = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
`;

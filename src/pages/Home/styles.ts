import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 10%;
  margin-top: 1.25rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-family: Kanit;
  font-weight: bold;
  font-size: 42px;

  @media (max-width: 414px) {
    font-size: 24px;
  }
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

  &::placeholder {
    color: ${({ theme }) => theme.GRAY_500};
  }

  @media (max-width: 414px) {
    font-size: 14px;
    padding: 0 4% 0 4%;
  }
`;

export const CardList = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  @media (max-width: 414px) {
    align-items: center;
    justify-content: center;
    grid-template-columns: auto !important;
  }

  @media (max-width: 920px) {
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto;
    gap: 50px;
  }

  @media (min-width: 1920px) {
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto auto auto;
    gap: 20px;
  }
`;

export const PageInfo = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin-top: 2rem;
  margin-bottom: 4rem;

  svg {
    width: 22px;
    height: 22px;
  }

  button {
    color: ${({ theme }) => theme.TEXT_WHITE};
    background-color: ${({ theme }) => theme.CARD_BACKGROUND};
    border: 0;
    border-radius: 8px;
    padding: 2%;

    @media (max-width: 414px) {
      font-size: 14px;
      padding: 5%;
    }
  }
`;

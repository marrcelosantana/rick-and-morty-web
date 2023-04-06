import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.25rem;
  padding: 0 10%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    gap: 10px;
    background-color: ${({ theme }) => theme.CARD_BACKGROUND};
    color: ${({ theme }) => theme.TEXT_WHITE};
    border-radius: 8px;
    border: none;
    padding: 20px 0;
    font-weight: bold;

    @media (max-width: 414px) {
      font-size: 14px;
      padding: 10px 0;
    }

    svg {
      color: ${({ theme }) => theme.TEXT_WHITE};
    }
  }
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 414px) {
    font-size: 14px;
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
    grid-template-columns: auto;
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

import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 15.625rem;
  object-fit: cover;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.425rem;
    border: 0;
    border-radius: 9999px;
    margin-top: -26rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

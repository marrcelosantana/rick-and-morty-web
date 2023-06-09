import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0%, 20%, 60%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
`;

export const Container = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.CARD_BACKGROUND};

  &:hover {
    animation: ${bounceAnimation} 0.8s;
    box-shadow: 4px 6px 6px #111111;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 200px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 15px;
  margin-top: 10px;
`;

export const FirstInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 22px;
  font-weight: bolder;
  margin-bottom: 3px;
  font-family: Kanit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-size: 14px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.TEXT_GRAY};
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 2px;
`;

export const DetailInfo = styled.span`
  font-size: 14px;
`;

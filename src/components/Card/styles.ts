import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.CARD_BACKGROUND};
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

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

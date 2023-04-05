import avatar from "@/assets/images.png";

import {
  Avatar,
  Container,
  Details,
  FirstInfo,
  Info,
  Name,
  Status,
  Label,
  DetailInfo,
} from "./styles";

export function Card() {
  return (
    <Container>
      <Avatar src={avatar} />

      <Info>
        <FirstInfo>
          <Name>Morty</Name>
          <Status>Dead - Alien</Status>
        </FirstInfo>

        <Details>
          <Label>Gender:</Label>
          <DetailInfo>Male</DetailInfo>
        </Details>

        <Details>
          <Label>Location:</Label>
          <DetailInfo>Earth</DetailInfo>
        </Details>
      </Info>
    </Container>
  );
}

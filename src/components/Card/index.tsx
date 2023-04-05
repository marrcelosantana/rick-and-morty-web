import { CharacterDTO } from "@/models/CharacterDTO";
import { Loading } from "../Loading";

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

interface CardProps {
  character: CharacterDTO;
}

export function Card({ character }: CardProps) {
  return (
    <Container>
      {!character ? (
        <Loading />
      ) : (
        <>
          <Avatar src={character.image} />

          <Info>
            <FirstInfo>
              <Name>{character.name}</Name>
              <Status>
                {character.status} - {character.species}
              </Status>
            </FirstInfo>

            <Details>
              <Label>Origin:</Label>
              <DetailInfo>{character.origin.name}</DetailInfo>
            </Details>

            <Details>
              <Label>Location:</Label>
              <DetailInfo>{character.location.name}</DetailInfo>
            </Details>
          </Info>
        </>
      )}
    </Container>
  );
}

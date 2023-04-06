import { CharacterDTO } from "@/models/CharacterDTO";
import { Loading } from "../Loading";
import { StatusCircle } from "../StatusCircle";

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
      {character ? (
        <>
          <Avatar src={character.image} alt={character.name} />

          <Info>
            <FirstInfo>
              <Name title={character.name}>{character.name}</Name>
              <Status>
                <StatusCircle
                  color={
                    character.status === "Alive"
                      ? "green"
                      : character.status === "Dead"
                      ? "red"
                      : "gray"
                  }
                />
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
      ) : (
        <Loading />
      )}
    </Container>
  );
}

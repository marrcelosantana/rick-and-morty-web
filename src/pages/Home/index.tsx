import { useEffect, useState } from "react";

import { Card } from "@/components/Card";
import { CharacterDTO } from "@/models/CharacterDTO";
import { api } from "@/services/api";

import { CardList, Container, Input } from "./styles";

export function Home() {
  const [characters, setCharacters] = useState<CharacterDTO[]>([]);

  async function loadCharacters() {
    try {
      const response = await api.get("/character");
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <Container>
      <Input placeholder="Search character by name" />
      <CardList>
        {characters.map((character) => (
          <Card character={character} />
        ))}
      </CardList>
    </Container>
  );
}

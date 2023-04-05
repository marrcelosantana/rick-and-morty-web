import { useEffect, useState } from "react";

import { Card } from "@/components/Card";
import { CharacterDTO } from "@/models/CharacterDTO";
import { api } from "@/services/api";

import { FiSearch } from "react-icons/fi";

import { CardList, Container, Form, Input, Select } from "./styles";

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
      <Form>
        <div>
          <Input placeholder="Search character by name" />
          <FiSearch />
        </div>
        <Select>
          <option selected disabled value="">
            Select a option...
          </option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="all">All</option>
        </Select>
      </Form>

      <CardList>
        {characters.map((character) => (
          <Card character={character} />
        ))}
      </CardList>
    </Container>
  );
}

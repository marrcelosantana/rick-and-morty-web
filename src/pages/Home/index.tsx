import { useEffect, useState } from "react";

import { Card } from "@/components/Card";
import { CharacterDTO } from "@/models/CharacterDTO";
import { api } from "@/services/api";

import { FiSearch } from "react-icons/fi";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CardList, Container, Form, Input, Select } from "./styles";

type FormDataProps = {
  character_name: string;
};

const formSchema = yup.object({
  character_name: yup.string().trim().required("Enter the character name"),
});

export function Home() {
  const [characters, setCharacters] = useState<CharacterDTO[]>([]);

  const { control, handleSubmit, reset } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

  async function loadCharacters() {
    try {
      const response = await api.get("/character");
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch({ character_name }: FormDataProps) {
    console.log(character_name);
    reset({ character_name: "" });
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSearch)}>
        <div>
          <Controller
            control={control}
            name="character_name"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Search character by name"
                value={value}
                onChange={onChange}
                type="text"
              />
            )}
          />
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

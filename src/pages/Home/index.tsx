import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CharacterDTO } from "@/models/CharacterDTO";

import { api } from "@/services/api";

import { FiSearch } from "react-icons/fi";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  CardList,
  Container,
  Form,
  Input,
  ButtonsContainer,
  PageInfo,
  Title,
} from "./styles";

type FormDataProps = {
  character_name: string;
};

const formSchema = yup.object({
  character_name: yup.string().trim().required("Enter the character name"),
});

export function Home() {
  const [characters, setCharacters] = useState<CharacterDTO[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { control, handleSubmit, reset } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  async function loadCharacters() {
    try {
      const response = await api.get(`/character?page=${page}`);
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (error) {
      toast.error("Cant load characters!");
    }
  }

  async function handleSearch({ character_name }: FormDataProps) {
    try {
      const query = character_name.toLowerCase();
      navigate(`/results/${query}`);
      reset({ character_name: "" });
    } catch (error) {
      toast.error("Character does not exists!");
      reset({ character_name: "" });
    }
  }

  useEffect(() => {
    loadCharacters();
  }, [page]);

  return (
    <Container>
      <Toaster />
      <Title>THE RICK AND MORTY API</Title>
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
      </Form>

      <CardList>
        {characters.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </CardList>

      <PageInfo>
        <span>Page {page}</span>
      </PageInfo>

      <ButtonsContainer>
        <Button
          disabled={page <= 1}
          onClick={() => {
            setPage(1);
          }}
        >
          <MdKeyboardDoubleArrowLeft />
        </Button>

        <Button
          disabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <span>Previous</span>
        </Button>

        <Button
          disabled={page >= 42}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <span>Next</span>
        </Button>

        <Button
          disabled={page === totalPages}
          onClick={() => {
            setPage(totalPages);
          }}
        >
          <MdKeyboardDoubleArrowRight />
        </Button>
      </ButtonsContainer>
    </Container>
  );
}

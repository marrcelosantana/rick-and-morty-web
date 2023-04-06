import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Loading } from "@/components/Loading";

import { CharacterDTO } from "@/models/CharacterDTO";
import { api } from "@/services/api";

import {
  CardList,
  Container,
  Header,
  Title,
  PageInfo,
  ButtonsContainer,
} from "./styles";

export function Results() {
  const [characters, setCharacters] = useState<CharacterDTO[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { name } = useParams();
  const navigate = useNavigate();

  async function loadResults() {
    try {
      const response = await api.get(`/character/?name=${name}&page=${page}`);
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (error) {
      toast.error("Character does not exists");
      navigate("/");
    }
  }

  useEffect(() => {
    loadResults();
  }, [page]);

  return (
    <>
      {characters ? (
        <Container>
          <Toaster />
          <Header>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              <FaRegArrowAltCircleLeft />
              <span>Go back</span>
            </Button>

            <Title>Results for: {name}</Title>
          </Header>

          <CardList>
            {name &&
              characters.map((character) => (
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
                setPage(page - 1);
              }}
            >
              <span>Previous</span>
            </Button>

            <Button
              disabled={page === totalPages}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <span>Next</span>
            </Button>
          </ButtonsContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

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
import { Loading } from "@/components/Loading";

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
      console.log("Cant load data");
    }
  }

  useEffect(() => {
    loadResults();
  }, [page]);

  return (
    <>
      {characters ? (
        <Container>
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
              <MdKeyboardArrowLeft />
              <span>Previous</span>
            </Button>

            <Button
              disabled={page === totalPages}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <span>Next</span>
              <MdKeyboardArrowRight />
            </Button>
          </ButtonsContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

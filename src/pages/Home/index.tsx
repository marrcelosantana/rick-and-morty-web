import { Card } from "@/components/Card";
import { CardList, Container, Input } from "./styles";

export function Home() {
  return (
    <Container>
      <Input placeholder="Search character by name" />
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </Container>
  );
}

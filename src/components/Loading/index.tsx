import Spinner from "react-bootstrap/Spinner";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}

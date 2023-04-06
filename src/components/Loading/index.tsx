import loadingGif from "@/assets/portal-rick-and-morty.gif";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <img src={loadingGif} />
    </Container>
  );
}

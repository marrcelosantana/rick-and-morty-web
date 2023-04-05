import headerImage from "@/assets/header.png";
import { Container, Image } from "./styles";

export function Header() {
  return (
    <Container>
      <Image src={headerImage} />
    </Container>
  );
}

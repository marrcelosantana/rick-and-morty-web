import headerImage from "@/assets/header.png";
import lightHeader from "@/assets/light-header.png";

import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

import { Actions, Container, Image } from "./styles";

interface HeaderProps {
  isDarkTheme: boolean;
  handleChangeTheme: () => void;
}

export function Header({ isDarkTheme, handleChangeTheme }: HeaderProps) {
  return (
    <Container>
      <Image src={isDarkTheme ? headerImage : lightHeader} />
      <Actions>
        <button onClick={handleChangeTheme}>
          {isDarkTheme ? (
            <BsSunFill color="#f2af00 " />
          ) : (
            <BsFillMoonStarsFill color="#312f99" />
          )}
        </button>
      </Actions>
    </Container>
  );
}

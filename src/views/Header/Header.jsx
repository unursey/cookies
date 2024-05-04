import NavDesktop from "../../components/NavDesktop/NavDesktop";
import Logo from "../../components/Logo/Logo";
import { Container } from "../Container/Container";
import "./Header.scss";

export const Header = () => (
  <Container className="header__container">
    <div className="header__container">
      <div className="header__block">
        <Logo />
        <NavDesktop />
      </div>
    </div>
  </Container>
);

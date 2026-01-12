import { Logo } from "./components/Logo";
import { Container } from "./components/Container";

import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";

export function App() {
  console.log("App component rendered");
  return (
    <>
      <Container>
          <Logo />
      </Container>

      <Container>
          <Heading> MENU </Heading>
      </Container>

    </>
  );
}

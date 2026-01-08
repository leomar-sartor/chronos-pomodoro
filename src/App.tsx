import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";

export function App() {
  console.log("App component rendered");
  return (
    <>
      <Container>
        <section>
          LOGO
        </section>
      </Container>

      <Container>
        <section>
          MENU
        </section>
      </Container>

    </>
  );
}

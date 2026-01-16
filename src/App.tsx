import { Logo } from "./components/Logo";
import { Container } from "./components/Container";

import "./styles/theme.css";
import "./styles/global.css";

import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

export function App() {
  console.log("App component rendered");
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">

          <div className="formRow">
            <DefaultInput labelText="Task" id="meuInput" type="text"/>
          </div>

          <div className="formRow">
            <p>Qualquer coisa só pra ter valor</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>

        </form>
      </Container>
    </>
  );
}

import { Logo } from "./components/Logo";
import { Container } from "./components/Container";

import "./styles/theme.css";
import "./styles/global.css";

import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";

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
            <DefaultInput labelText="Task" id="meuInput" type="text" placeholder="Digite algo"/>
          </div>

          <div className="formRow">
            <p>Qualquer coisa só pra ter valor</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>

        </form>
      </Container>
    </>
  );
}

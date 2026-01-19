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
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Heading } from "./components/Heading";

export function App() {

  const [numero, setNumero] = useState(0);

  //Lazing inicialization/Instaciantion
  //Operação custosa - posso usar função
  const [numero2, setNumero2] = useState(() =>{
    console.log('Lazing inicialization/Instaciantion');
    //Vai processar somente a primeira vez, depois tem que ser atualizado por
    //um useEffect, por exemplo
    return 0;// Valor do state
  });


  function handleClick() {
    setNumero(prevState => prevState + 1); //Garante que o valor vai incrementar
    setNumero(numero + 1); //Não Garante que o valor vai incrementar
  }

  


  return (
    <>
      <Heading>
        Número: {numero}
      </Heading>

      <button onClick={handleClick}> Aumentar </button>

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
            <DefaultInput labelText="Task" id="meuInput" type="text" placeholder="Digite algo" />
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

      <Container>
        <Footer />
      </Container>
    </>
  );
}

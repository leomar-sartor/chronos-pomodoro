import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("App component rendered");
  return (
    <>
      <Heading> Olá Mundo 
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum temporibus, iste labore ipsum voluptate. Qui, necessitatibus sequi ex aspernatur quibusdam quia adipisci dolor veritatis porro atque, distinctio accusamus quo?
      </p>
    </>
  );
}

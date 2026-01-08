import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("App component rendered");
  return (
    <>
      <Heading/>
      <p>Welcome to Chronos Pomodoro</p>
    </>
  );
}

// export default App;
// export { App };
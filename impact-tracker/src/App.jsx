import { useState } from "react";
import SignIn from "./LandingPage/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignIn />
    </>
  );
}

export default App;

import { createContext, useEffect, useState } from "react";
import "./App.css";
import Root from "./components/Root";
export const Mycontext = createContext();
function App() {
  const [usertoken, setUsertoken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      setUsertoken(token);
    } else {
      setUsertoken(null);
    }
  }, []);
  return (
    <>
      <Mycontext.Provider value={{ usertoken, setUsertoken }}>
        <Root />
      </Mycontext.Provider>
    </>
  );
}

export default App;

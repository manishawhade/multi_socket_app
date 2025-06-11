import { useContext, useEffect, useRef, useState } from "react";
import { Mycontext } from "../App";
import SocketComponent from "./SocketComponent";

const Webhook = () => {
  const [count, setCount] = useState(1);
  const { setUsertoken } = useContext(Mycontext);

  return (
    <div className="webhook-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Websocket</h3>
        <button
          style={{ height: "fit-content" }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Add New
        </button>
        <button
          style={{ height: "fit-content" }}
          onClick={() => {
            localStorage.removeItem("usertoken");
            setUsertoken(null);
          }}
        >
          Logout
        </button>
      </div>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <h4>Session {index + 1}</h4>
          <SocketComponent />
        </div>
      ))}
    </div>
  );
};
export default Webhook;

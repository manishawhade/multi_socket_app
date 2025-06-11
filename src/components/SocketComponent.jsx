import { useContext, useEffect, useRef, useState } from "react";
import { Mycontext } from "../App";

const SocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);
  const lastItemRef = useRef(null);
  const { usertoken, setUsertoken } = useContext(Mycontext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    return () => {
      console.log("Cleaning up WebSocket connection");
      ws?.current?.close();
    };
  }, []);
  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: "smooth" });
      lastItemRef.current.focus(); // Ensures focus on the new item
    }
  }, [messages]);
  const handleClick = () => {
    if (!inputValue) {
      alert("Please enter a message");
      return;
    }
    let yourToken = `Bearer ${usertoken}`;
    ws.current = new WebSocket(
      `ws://localhost:8080/ws/message?token=${yourToken}`
    );

    ws.current.onopen = () => {
      console.log("WebSocket connected");
      ws.current.send(inputValue);
    };

    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  };
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <div style={{ justifySelf: "start" }}>
        <input
          id="SocketMessage"
          type="text"
          placeholder="Enter first message"
          required
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={() => handleClick()}>Create Session</button>
      </div>
      <ol style={{ height: "90px", overflowY: "auto" }}>
        {messages &&
          messages.map((msg, i) => (
            <li ref={i === messages.length - 1 ? lastItemRef : null} key={i}>
              {msg}
            </li>
          ))}
      </ol>
    </div>
  );
};
export default SocketComponent;

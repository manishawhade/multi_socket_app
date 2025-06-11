import { useContext } from "react";
import { Mycontext } from "../App";

const Loginform = () => {
  const { setUsertoken } = useContext(Mycontext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;
    if (userName && password) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        username: "yagnesh",
        password: "yagnesh",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/v1/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUsertoken(result?.successResponse?.data?.token);
          localStorage.setItem(
            "usertoken",
            result?.successResponse?.data?.token
          );
        })
        .catch((error) => console.error(error));

      //   alert("Login Successful");
    }
  };
  return (
    <>
      <div>Login</div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">User Name</label>
          <input
            type="text"
            placeholder="Enter User Name"
            defaultValue={"yagnesh"}
            required
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter Passsword"
            defaultValue={"yagnesh"}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Loginform;

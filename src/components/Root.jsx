import { useContext, useEffect } from "react";
import Loginform from "./Loginform";
import Webhook from "./Webhook";
import { Mycontext } from "../App";

const Root = () => {
  const { usertoken } = useContext(Mycontext);
  return <>{usertoken ? <Webhook /> : <Loginform />}</>;
};

export default Root;

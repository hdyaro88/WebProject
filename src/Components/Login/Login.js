import React, { useRef, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { getAuthentication } from "../../Hooks/api";
import useHTTP from "../../Hooks/use-http";
import Header from "../Header/Header";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const { sendRequest, status, data, error } = useHTTP(getAuthentication);
  let Content = <Button className={styles.Login_button}>Login</Button>;
  if (status === "pending") {
    Content = <p>Loading..</p>;
  }
  const { onLoggin } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onLoggin();
      dispatch({type : "LOGGER" , payload : data.userId.toString()})
      localStorage.setItem("userId" , data.userId);
      localStorage.setItem("isLoggedIn" , "1");
    }
  }, [status, history, data , error, dispatch, onLoggin]);

  if (error) {
    window.alert(error);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const authObject = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    sendRequest(authObject);
  };
  return (
    <React.Fragment>
      <Header onClick={props.onSignUp} ShowSignIn={false} ShowSignUp={true} />
      <div className={styles.card}>
        <Card>
          <form onSubmit={submitHandler}>
            <div className={styles.item}>
              <label>Email</label>
              <input ref={emailRef} type="email" required="@"></input>
            </div>
            <div className={styles.item}>
              <label>PassWord</label>
              <input ref={passwordRef} type="password" required></input>
            </div>
            <div className={styles.buttonItem}>{Content}</div>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
};
export default Login;

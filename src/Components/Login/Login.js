import React, { useRef , useState } from "react";
import Header from "../Header/Header";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Login.module.css";

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [showLoading , setShowLoading] = useState(false);
  const submitHandler = (event) => { 
      
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        setShowLoading(true)
        console.log(process.env.API)
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY}`;
        console.log(url)
    fetch(
      url ,
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setShowLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
           //show error
          let errorMessage = "Authentication Error";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
        if(data.registered) {
            props.onLoggin();
            localStorage.setItem("isLoggedIn" , "1");
        }
    }).catch(err => {
        alert(err.message);
    });
  };
  return (
    <React.Fragment>
    <Header onClick={props.onSignUp} ShowSignIn={false} ShowSignUp ={true} />
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
          <div className={styles.buttonItem}>
          {showLoading &&  <p>Logging ...</p>}
           {!showLoading && <Button className={styles.Login_button}>Login</Button>}
          </div>
        </form>
      </Card>
    </div>
    </React.Fragment>
  );
};
export default Login;

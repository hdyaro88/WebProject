import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./SignUp.module.css"

const SignUp = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [showLoading , setShowLoading] = useState(false);
    const submitHandler = (event) => {
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        event.preventDefault();
        setShowLoading(true);
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAz3RXmmWWjOWJqInL8kZslzfOhPUUpSBs';
        fetch(url ,
          {
              method : 'POST',
              body : JSON.stringify(
                  {
                      email : enteredEmail ,
                      password : enteredPassword ,
                      returnSecureToken : true,
                  }
              ),
              headers : {
                  'Content-Type' : "application/json"
              }
          }
        ).then(res => {
            setShowLoading(false);
            if(res.ok) {
                props.onSubmit();
            }
            else {
                return res.json().then(data => {
                    //show error
                    let errorMessage = "Authentication Error";
                    if(data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    alert(errorMessage);
                })
            }
        })
    }
    return(
        <React.Fragment>
        <Header onClick={props.onSignIn} ShowSignIn={true} ShowSignUp ={false} />
        <div className={styles.card}>
        <Card>
        <form onSubmit={submitHandler} >
            <div className={styles.item}>
            <label>Email</label>
            <input type="email" ref={emailRef} required></input>
            </div>
            <div className={styles.item}>
            <label >PassWord</label>
            <input type="password" ref={passwordRef} required></input>
            </div>
            <div className={styles.buttonItem}>
            {showLoading &&  <p>Please Wait ...</p>}
            {!showLoading && <Button className={styles.Login_button}>Register</Button>}
            </div>
        </form>
        </Card>
        </div>
        </React.Fragment>
    )

}
export default SignUp;
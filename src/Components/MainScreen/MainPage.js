import React, { useState } from "react";
import Login from "../Login/Login";
import styles from "./MainPage.module.css"
import SignUp from "./SignUp";
const MainPage = (props) => {
    const [ShowSignUp , setShowSignUp] = useState(false);
    const [ShowSignIn , setShowSignIn] = useState(true);
    const signUpHandler = () => {
        setShowSignUp(!ShowSignUp)
        setShowSignIn(false);
    }
    const signInHandler = ()=> {
        setShowSignIn(true);
        setShowSignUp(false)

    }
    const submitHandler =() => {
        setShowSignIn(true);
        setShowSignUp(false);
    }
    document.body.style.marginTop = "6rem"
     return (
        <React.Fragment>
         <div className={styles.flex_container}>
         <div className = {styles.ActionButton}>
        {ShowSignUp && <SignUp onSignIn={signInHandler} onSubmit={submitHandler}  onSignUp={signUpHandler}/>}
        {ShowSignIn && <Login onSignUp={signUpHandler} onLoggin={props.onSignIn} />}
         </div>
         </div>
         </React.Fragment>
     )
}
export default MainPage;
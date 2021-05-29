import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Login.module.css"

const Login = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        props.onLoggin();
    }
    return(
        <div className={styles.card}>
        <Card>
        <form onSubmit={submitHandler} >
            <div className={styles.item}>
            <label>Email</label>
            <input type="email"></input>
            </div>
            <div className={styles.item}>
            <label >PassWord</label>
            <input type="password"></input>
            </div>
            <div className={styles.buttonItem}>
            <Button className={styles.Login_button}>Login</Button>
            </div>
            
        </form>
        </Card>
        </div>
    )

}
export default Login;
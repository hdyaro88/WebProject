import styles from "./Header.module.css";
import Button from "../UI/Button"
const Header = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.favbar}><h1 className={styles.Appname}>FaceBar</h1></div>
    
  <div className={styles.buttons}>
  {props.ShowSignUp && <Button onClick={props.onClick} className={styles.navbar_button}>SignUp</Button>}
  {props.ShowSignIn && <Button onClick={props.onClick} className={styles.navbar_button}>SignIn</Button>}
  {props.isLoggedIn && <Button onClick={props.onShowPost} className={styles.navbar_button}>Post</Button>}
  {props.isLoggedIn && <Button onClick={props.onLogout} className={styles.navbar_button}>Logout</Button>}
  </div>
</div>
  );
};
export default Header;

import styles from "./Header.module.css";
import Button from "../UI/Button"
const Header = (props) => {
  return (
    <div className={styles.navbar}>
  <h1 style={{color : "white"}}>FaceBar</h1>
  <div className={styles.buttons}>
  {props.isLoggedIn && <Button onClick={props.onShowPost} className={styles.navbar_button}>Post</Button>}
  {props.isLoggedIn && <Button onClick={props.onLogout} className={styles.navbar_button}>Logout</Button>}
  </div>
</div>
  );
};
export default Header;

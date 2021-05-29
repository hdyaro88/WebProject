import styles from "./Button.module.css"
const Button = (props) => {
    return (
        <button onClick={props.onClick} className={`${props.className} ${styles.Button}`}>
            {props.children}
        </button>
    )
}
export default Button;
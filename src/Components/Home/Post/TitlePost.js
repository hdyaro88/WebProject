import Card from "../../UI/Card";
import styles from "./PostItem.module.css"
const TitlePost = () => {
    return (
        <div className={styles.card}>
            <Card>
                <div className={styles.flex_container}>
                <div>
                <label><b>Name</b></label>
                </div>
                <div>
                <label><b>Age</b></label>
                </div>
                <div>
                <label><b>Relation</b></label>
                </div>
                </div>
            </Card>
        </div>
    )
}
export default TitlePost;
import classes from "./404.module.css"
import Card from "../UI/Card"
const PageNotFound = () => {
    return (
        <div className={classes.errorBox}>
            <Card>
                <p>404 NOT FOUND</p>
            </Card>
        </div>
    )
}
export default PageNotFound;
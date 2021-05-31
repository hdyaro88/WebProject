import React, { useContext, useState } from "react";
import ListContext from "../../Context/List-Context";
import Modal from "../../modal/Modal";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./PostItem.module.css";
const PostItem = (props) => {
    const listCtx = useContext(ListContext)
   const[isClicked , setisClicked] =  useState(false)
   const[editIsClicked , seteditIsClicked] = useState(false)
   const clickHandler = () => {
        setisClicked(!isClicked)
   }
   const deleteClickHandler = () => {
       listCtx.delete(props.id)
   }
   const hideMoalhandler = () => {
    seteditIsClicked(false);
  }
  const showModalHandler = () => {
    seteditIsClicked(true)
  }
  return (
    <React.Fragment>
      <div onClick={clickHandler} className={styles.card}>
        <Card>
          <div className={styles.flex_container}>
            <div>
              <label>{props.name}</label>
            </div>
            <div>
              <label>{props.age}</label>
            </div>
            <div>
              <label>{props.relation}</label>
            </div>
          </div>
        </Card>
      </div>
      {isClicked && (
          <div className={styles.card}>
          <Card className={styles.downbar}>
          <Button onClick={showModalHandler} className={styles.downbar_button}>Edit</Button>
          {editIsClicked && <Modal onClose={hideMoalhandler}  id = {props.id}/>}
          <Button onClick={deleteClickHandler} className={styles.downbar_button}>Delete</Button>
         </Card>
        </div>
      )}
    </React.Fragment>
  );
};
export default PostItem;

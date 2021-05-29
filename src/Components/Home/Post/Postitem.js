import React, { useContext, useState } from "react";
import ListContext from "../../Context/List-Context";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./PostItem.module.css";
const PostItem = (props) => {
    const listCtx = useContext(ListContext)
   const[isClicked , setisClicked] =  useState(false)
   const clickHandler = () => {
        setisClicked(!isClicked)
        // console.log(props.id)
   }
   const deleteClickHandler = () => {
       listCtx.delete(props.id)
   }
   const editHandler = () => {
          props.onClickEdit(props.id);
   }
  //  props.onClickEdit();
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
          <Button onClick={editHandler} className={styles.downbar_button}>Edit</Button>
          <Button onClick={deleteClickHandler} className={styles.downbar_button}>Delete</Button>
         </Card>
        </div>
      )}
    </React.Fragment>
  );
};
export default PostItem;

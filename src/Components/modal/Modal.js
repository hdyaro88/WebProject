import React from "react"
import {  useState } from "react";
import { useDispatch} from "react-redux";
import Button from "../UI/Button"
import Card from "../UI/Card"
import classes from "./modal.module.css"
const Backdrop = (props) => {
    return (
        <div onClick={props.onClick} className={classes.backdrop}>
        </div>
    )
} 
const ModelView = (props) => {
  const dispatch = useDispatch()
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [relation, setrelation] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    const post = {
      id: props.id,
      name: name,
      age: age,
      relation: relation,
    };
     dispatch({type : "ADD" , payload: post});
    props.onClick();
  };
  const updatenameHandler = (event) => {
    const val = event.target.value;
    if (val.trim().lenth === 0) {
      return;
    }
    setname(val);
  };
  const updateageHandler = (event) => {
    const val = event.target.value;
    if (val.trim().lenth === 0) {
      return;
    }
    setage(+val);
  };
  const updaterelationHandler = (event) => {
    const val = event.target.value;
    if (val.trim().lenth === 0) {
      return;
    }
    setrelation(val);
  };

  return (
    <div className={classes.card}>
      <Card>
        <form onSubmit={submitHandler}>
          <div className={classes.item}>
            <label>Name</label>
            <input value={name} type="text" onChange={updatenameHandler}></input>
          </div>
          <div className={classes.item}>
            <label>Age</label>
            <input value={age} type="number" onChange={updateageHandler}></input>
          </div>
          <div className={classes.item}>
            <label>Relation</label>
            <input value={relation} type="text" onChange={updaterelationHandler}></input>
          </div>
          <div className={classes.buttonItem}>
            <Button className={classes.Create_button}>Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
const Modal = (props) => {
    return (
        <React.Fragment>
        <Backdrop onClick={props.onClose}/>
        <ModelView id = {props.id} onClick={props.onClose} />
        </React.Fragment>
        
        
    )
}
export default Modal;
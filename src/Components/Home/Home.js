import Card from "../UI/Card";
import * as classes from "./Home.module.css";
import Button from "../UI/Button";
import { useEffect,  useRef } from "react";
import useHTTP from "../../Hooks/use-http";
import { fetchItems } from "../../Hooks/api";
import { useDispatch, useSelector } from "react-redux";
let initial = true;

const Home = (props) => {
const userId = useSelector(state => state.userId)
const dispatch = useDispatch()
const {sendRequest , status , data} = useHTTP(fetchItems);
  const nameRef = useRef();
  const ageRef = useRef();
  const relationRef = useRef();

  useEffect(() => {
    if(initial) {
      sendRequest({userId : userId});
      initial = false;
    }
      if(status === "completed") {
        dispatch({type : "UPDATE" , payload : data});
      }
    } , [status , data, sendRequest , userId  , dispatch]);
  const submitHandler = (event) => {
    event.preventDefault();
    const post = {
      id: Math.random(),
      name: nameRef.current.value,
      age: ageRef.current.value,
      relation: relationRef.current.value,
    };
  
    dispatch({type : "ADD" , payload: post});
    nameRef.current.value = "";
    ageRef.current.value = "";
    relationRef.current.value ="";
  };

  return (
    <div className={classes.card}>
      <Card>
        <form onSubmit={submitHandler}>
          <div className={classes.item}>
            <label>Name</label>
            <input ref={nameRef}  required type="text" ></input>
          </div>
          <div className={classes.item}>
            <label>Age</label>
            <input ref={ageRef}  required type="number" ></input>
          </div>
          <div className={classes.item}>
            <label>Relation</label>
            <input ref={relationRef} required type="text" ></input>
          </div>
          <div className={classes.buttonItem}>
            <Button className={classes.Create_button}>Create Post</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default Home;

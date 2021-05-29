import React, { useContext, useState } from "react";
import "./App.css";
import ContextProvider from "./Components/Context/ContextProvider";
import ListContext from "./Components/Context/List-Context";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Post from "./Components/Home/Post/Post";
import Login from "./Components/Login/Login";
import Modal from "./Components/modal/Modal";
function App() {
  const listCtx = useContext(ListContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPost, setshowPost] = useState(false);
  const[showEdit , setshowEdit] = useState(false)
  const LoginHandler = () => {
    setIsLoggedIn(true);
    setshowPost(false);
  };
  const LogoutHandler = () => {
    setIsLoggedIn(false);
    setshowPost(false);
  };
  const PostHandler = () => {
    if (!isLoggedIn) {
      setshowPost(false);
    } else {
      setshowPost(true);
    }
  };
  const hideMoalhandler = () => {
    setshowEdit(false);
  }
  let updatedpost = {
    id : 1 ,
    name : "",
    age : 2,
    relation : ""
  };
  const showModalHandler = (id) => {
    setshowEdit(true)
    updatedpost.id = id;
    console.log("Hello")
  }
  const getPostHandler = (post) => {
       updatedpost.name = post.name;
       updatedpost.age = post.age;
       updatedpost.relation = post.relation;
      listCtx.add(updatedpost)
  }
  
  return (
    <ContextProvider>
      {showEdit && <Modal onSubmit={getPostHandler} onClose={hideMoalhandler}/>}
      <Header
        onShowPost={PostHandler}
        onLogout={LogoutHandler}
        isLoggedIn={isLoggedIn}
      />
      {isLoggedIn && showPost && <Post onEdit={showModalHandler} />}
      {isLoggedIn && !showPost && <Home />}
      {!isLoggedIn && <Login onLoggin={LoginHandler} />}
      </ContextProvider>
  );
}

export default App;

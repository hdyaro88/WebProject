import {useState } from "react"
import ListContext from "./List-Context"
const demoList = [
    {id : 1 , name : "Rohit",
    age : 19,
    relation : "Brother"} ,
    {id : 2 , name : "Rohit",
    age : 19,
    relation : "Brother"} ,
    {id : 3 , name : "Rohit",
    age : 19,
    relation : "Brother"}
  ];

const ContextProvider = (props) => {
    const [List, setList] = useState(demoList);

    const addPostHandler = (post) => {
        const existingPostid = List.findIndex(item => item.id === post.id)
        const existingPost = List[existingPostid]
        if(existingPost) {
            List[existingPostid] = post;
            return;
        }
           setList(prevstate => {
               return [...prevstate , post];
           })
    }
    const deletePostHandler = (id) => {
        setList(List.filter(post => post.id !== id))
    }
    const listContext = {
        items : List,
        add : addPostHandler,
        delete : deletePostHandler
    }
    return (
        <ListContext.Provider value={listContext}>
            {props.children}
        </ListContext.Provider>
    )
}
export default ContextProvider;
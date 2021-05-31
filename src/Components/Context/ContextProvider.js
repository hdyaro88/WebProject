import {useReducer } from "react"
import ListContext from "./List-Context"
  const defaultState = {
      items : []
  }
  const postReducer = (state , action) => {
      if(action.type === "ADD") {
          const existingPostId = state.items.findIndex(post => post.id === action.Post.id)
          const existingPost = state.items[existingPostId];
          if(existingPost) {
             const updatedpost = [...state.items]
             updatedpost[existingPostId] = action.Post;
             return {items : updatedpost}
          }
          return {items: [...state.items , action.Post]};
      }
      else if(action.type === "DEL") {
          const list = state.items.filter(post => post.id !== action.Id)
          return {items : list}
      }
      return defaultState;
  }

const ContextProvider = (props) => {
    const[postState , postActionDisptacher] = useReducer(postReducer , defaultState)
    const addPostHandler = (post) => {
        postActionDisptacher({type : "ADD" , Post : post});
    }
    const deletePostHandler = (id) => {
        postActionDisptacher({type : "DEL" , Id : id})
    }
    const listContext = {
        items : postState.items,
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
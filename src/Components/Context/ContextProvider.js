import { createStore } from "@reduxjs/toolkit"
   const localUID = localStorage.getItem("userId");
  const defaultState = {
      items : [] ,
      userId : !!localUID ? localUID : "" ,
      changed : false
  }
  const postReducer = (state = defaultState , action) => {
      if(action.type === "LOGGER") {
          return {
              items : state.items ,
              userId : action.payload,
              changed : state.changed
          }
      }
      if(action.type === "UPDATE") {
          return {
            items : action.payload,
            userId : state.userId,
            changed : state.changed
          }
      }
      if(action.type === "ADD") {
          const existingPostId = state.items.findIndex(post => post.id === action.payload.id)
          const existingPost = state.items[existingPostId];
          if(existingPost) {
             const updatedpost = [...state.items]
             updatedpost[existingPostId] = action.payload;
             return {items : updatedpost , userId : state.userId , changed : true}
          }
          return {items: [...state.items , action.payload] , userId : state.userId , changed : true};
      }
      else if(action.type === "DEL") {
          const list = state.items.filter(post => post.id !== action.payload)
          return {items : list , userId : state.userId , changed : true}
      }
      return defaultState;
  }
    export const store = createStore(postReducer);

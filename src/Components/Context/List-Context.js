import { createContext } from "react";

const ListContext = createContext(
    {   userId : "",
        items : [],
        changed : false,
        add : (post) => {},
        delete : (id) => {} ,
        addUser : (token) => {} ,
        update : (items) => {}
    }
)
export default ListContext;
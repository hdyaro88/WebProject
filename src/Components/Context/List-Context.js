import { createContext } from "react";

const ListContext = createContext(
    {
        items : [],
        add : (post) => {},
        delete : (id) => {}
    }
)
export default ListContext;
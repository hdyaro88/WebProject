import { createContext } from "react";

const ListContext = createContext(
    {
        items : [],
        add : () => {},
        delete : () => {}
    }
)
export default ListContext;
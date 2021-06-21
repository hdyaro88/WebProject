import { useCallback, useReducer } from "react";

const HTTPReducer = (state , action) => {
    if(action.type === "sending") {
        return {
            status : "pending" ,
            data : state.data,
            error : state.error
        }
    }
        if(action.type === "success") {
            return {
                status : "completed" ,
                data : action.data ,
                error : state.error
            }
        }
        if(action.type === "error") {
            return {
                status : "completed",
                data : state.data ,
                error : action.value
            }
        }
}

const useHTTP = (RequestFunction , startWithPending) => {
  const [httpState , disptach] = useReducer(HTTPReducer , {status : startWithPending ? "pending" : null , data : null , error : null} );
    const sendRequest = useCallback( async (data) => {
            disptach({type : "sending"})
            try {
                const ResData =  await RequestFunction(data);
                disptach({type : "success" , data : ResData})
             }
             catch(error) {
                  disptach({type : "error" , value : error.message || "something went wrong"})
             }
           
    } , [RequestFunction]);

    return {
        sendRequest ,
        ...httpState
    }
}
 export default useHTTP;
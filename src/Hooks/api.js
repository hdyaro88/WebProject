const FirebaseApi = "https://react-9e703-default-rtdb.firebaseio.com/";
const authApi = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZjoy8dPiBktGsrJ_4z45RCFrc-TxGnko"

export const getAuthentication = async (loginCredential) => {
     const response = await fetch(`${authApi}` , {
         method : "POST" ,
         body : JSON.stringify(loginCredential) ,
         headers : {
            'Content-Type': 'application/json'
         }
     })
     if(!response.ok) {
         throw new Error("Login Failed")
     }
     const data = await response.json()
     return {
         success : data.registered || false,
         userId : data.localId
     } ;
}

export const sendUpdate = async (updatedData) => {
    const response = await fetch(`${FirebaseApi}/items/${updatedData.userId}.json` , { 
        method : "PUT" ,
        body : JSON.stringify(updatedData.items) ,
        headers : {
           'Content-Type': 'application/json'
        }
    })
    if(!response.ok) {
        throw new Error("Send data Failed")
    }
}

export const fetchItems = async (updatedData) => {
    const response = await fetch(`${FirebaseApi}/items/${updatedData.userId}.json`)
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Could not get items.');
    }
  
    const transformedItems = [];
  
    for (const key in data) {
      const itemObj = {
        id: key,
        ...data[key],
      };
      transformedItems.push(itemObj);
    }
    
    return transformedItems;
}
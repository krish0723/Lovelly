
import { createContext, useContext, useState } from 'react'
import jsTPS from '../common/jsTPS'
import MoveItem_Transaction from '../transactions/MoveItem_Transaction'
import UpdateItem_Transaction from '../transactions/UpdateItem_Transaction'
import AuthContext from '../auth'

// THIS IS THE CONTEXT WE'LL USE TO SHARE OUR STORE
export const GlobalStoreContext = createContext({});
console.log("create GlobalStoreContext");

// THESE ARE ALL THE TYPES OF UPDATES TO OUR GLOBAL
// DATA STORE STATE THAT CAN BE PROCESSED
export const GlobalStoreActionType = {
    SET_PRODUCTS: "SET_PRODUCTS",
}

// WE'LL NEED THIS TO PROCESS TRANSACTIONS
const tps = new jsTPS();
const api = "https://us-east-1.aws.data.mongodb-api.com/app/lovelly-zzfbc/endpoint";

// WITH THIS WE'RE MAKING OUR GLOBAL DATA STORE
// AVAILABLE TO THE REST OF THE APPLICATION
function GlobalStoreContextProvider(props) {
    // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
    const [store, setStore] = useState({
        products: [],
    });
    const history = useHistory();

    console.log("inside useGlobalStore");

    // HERE'S THE DATA STORE'S REDUCER, IT MUST
    // HANDLE EVERY TYPE OF STATE CHANGE
    const storeReducer = (action) => {
        const { type, payload } = action;
        switch (type) {
            // LIST UPDATE OF ITS NAME
            case GlobalStoreActionType.SET_PRODUCTS: {
                return setStore({
                    products:payload.products
                });
            }
            default:
                return store;
        }
    }

    // THESE ARE THE FUNCTIONS THAT WILL UPDATE OUR STORE AND
    // DRIVE THE STATE OF THE APPLICATION. WE'LL CALL THESE IN
    // RESPONSE TO EVENTS INSIDE OUR COMPONENTS.

    // THIS FUNCTION PROCESSES CHANGING A LIST NAME
    store.getProducts = async function () {
        let response = await fetch (api + "/getProducts");
        if (response.status === 200) {
            let products = response.data;
            storeReducer({
                type: GlobalStoreActionType.SET_PRODUCTS,
                payload: products
            });
        }
    }

    store.undo = function () {
        tps.undoTransaction();
    }

    store.redo = function () {
        tps.doTransaction();
    }

    store.canUndo = function() {
        return tps.hasTransactionToUndo();
    }

    store.canRedo = function() {
        return tps.hasTransactionToRedo();
    }

    return (
        <GlobalStoreContext.Provider value={{
            store
        }}>
            {props.children}
        </GlobalStoreContext.Provider>
    );
}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };

import { legacy_createStore as createStore } from "redux";
import RootReducer from "./reducer";



const Store = createStore(RootReducer); 




export default Store;
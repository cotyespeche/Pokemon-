import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
// es para conectar con la extension del navegador 


const store= createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) // es para hacer peticiones a un server


export default store;
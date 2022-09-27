import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer,applyMiddleware(thunk));

// const getuser=(dispatch,getState)=>{

// }

// store.dispatch()
export default store;

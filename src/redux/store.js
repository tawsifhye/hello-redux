import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { dataReducer, cartReducer } from "./reducers/dataReducer";


const reducers = combineReducers({ dataReducer, cartReducer })

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
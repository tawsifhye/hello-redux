import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { dataReducer } from "./reducers/dataReducer";


const reducers = combineReducers({ dataReducer })

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
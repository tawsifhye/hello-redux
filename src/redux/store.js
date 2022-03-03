import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./reducers/dataReducer";


const reducers = combineReducers({ dataReducer })

export const store = createStore(reducers, applyMiddleware(thunk));
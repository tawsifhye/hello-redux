import { combineReducers, createStore } from "redux";
import { dataReducer } from "./reducers/dataReducer";


const reducers = combineReducers({ data: dataReducer })

export const store = createStore(
    reducers
);
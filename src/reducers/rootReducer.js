import {combineReducers, createStore} from "redux";

// Rename the default import to whatever name we want. We can also rename a named import.
import defaultState, {firstNamedReducer, secondNamedReducer as secondState} from "./reducers";

const rootReducer = combineReducers({
    defaultState,                   // key name same as the carefully renamed default export
    firstState : firstNamedReducer, // specific key name instead of the variable name
    secondState,                    // key name same as the carefully renamed named export
});

const reducerInitializedStore = createStore(rootReducer);
console.log(reducerInitializedStore.getState());

export default rootReducer

// {defaultState : 0, firstState : 1, secondState : 2}
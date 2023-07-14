import { createStore, applyMiddleware } from "redux";
import reducer from "../redux/reducer";
import {  saveState } from "../redux/localstorage";


export const store = createStore(
  reducer,
  //   applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});


// // Load state from localStorage
// export const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("allData");
//     console.log(serializedState);
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Error loading state from localStorage:", error);
//     return undefined;
//   }
// };

// // Save state to localStorage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     console.log("jrloemgjrlemgj",state);
//     localStorage.setItem("allData", serializedState);

//   } catch (error) {
//     console.error("Error saving state to localStorage:", error);
//   }
// };


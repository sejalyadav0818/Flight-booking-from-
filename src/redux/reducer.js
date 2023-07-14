import { loadState } from "../redux/localstorage";
const initialState = {
  allData: loadState() || [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_DATA":
      return {
        ...state,
        allData: [...state.allData, action.payload],
      };
    case "DELETE_DATA":
      // console.log(state.allData[0]);
      // console.log(action.payload);
      // const filteredTodos = state.allData.filter(
      //   (todo) => todo.id !== action.payload
      // );
      //  console.log(filteredTodos);
      // return {
      //   ...state,
      //   allData: filteredTodos,
      // };

      //console.log(state.allData[0]);
      //console.log(action.payload);

      let filteredTodos;

      if (Array.isArray(state.allData)) {
        filteredTodos = state.allData.filter(
          (todo) => todo.id !== action.payload
        );
      } else {
        filteredTodos =
          state.allData.id !== action.payload ? [state.allData] : [];
      }

      console.log(filteredTodos);

      return {
        ...state,
        allData: filteredTodos,
      };
    case "UPDATE_TODO":
      const { id, updatedTodo } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      );
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};
export default reducer;

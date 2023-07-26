import store from "./store";
import { addTask } from "./actions";
import { removeTask } from "./actions";
import { completeTask } from "./actions";

store.dispatch(addTask("Task 1"))
store.dispatch(addTask("Task 2"))
store.dispatch(addTask("Task 3"))
store.dispatch(removeTask(2))
store.dispatch(completeTask(2))


// ?Gets us all store props
console.log("Redux Store: ", store);

// ?Gets us store states
console.log("Redux Store: ", store.getState());

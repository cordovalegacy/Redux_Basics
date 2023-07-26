import store from "./tasks/store";
import { addTask } from "./tasks/actions";
import { removeTask } from "./tasks/actions";
import { completeTask } from "./tasks/actions";
import { fetchTodo } from "./tasks/actions";

let count = 0
// !Basically an event listener listening for changes (does not work with thunk)
const unsubscribe = store.subscribe(() => {
    count++
    console.log(count)
    console.log("Upload", store.getState())
})
store.dispatch(addTask("Task 1"))
store.dispatch(completeTask(1))
store.dispatch(addTask("Task 2"))
store.dispatch(addTask("Task 3"))
store.dispatch(removeTask(2))
store.dispatch(fetchTodo())

// !lets you create a starting point
// unsubscribe() 



// ?Gets us all store props
console.log("Redux Store: ", store);

// ?Gets us store states
// console.log("Redux Store: ", store.getState());

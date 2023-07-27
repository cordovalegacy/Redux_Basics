
// !Redux Tool Kit
import store from './rtkTasks/taskSlice'
import { taskSlice } from './rtkTasks/taskSlice'

store.dispatch(addTask("Task 1"))
store.dispatch(addTask("Task 2"))
store.dispatch(addTask("Task 3"))
store.dispatch(completeTask(1))
store.dispatch(removeTask(2))

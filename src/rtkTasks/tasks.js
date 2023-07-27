// !Store
// import { configureStore } from '@reduxjs/toolkit'
// import { createAction, createReducer } from "@reduxjs/toolkit"

// !Redux Toolkit Actions
// returns {type and payload} in an object
// export const addTask = createAction("ADD_TASK")
// console.log(addTask({ task: "Task 1" }))

// // returns {type and payload} in an object
// export const removeTask = createAction("REMOVE_TASK")
// console.log(removeTask({ task: "Task 1" }))

// // returns {type and payload} in an object
// export const completeTask = createAction("COMPLETE_TASK")
// console.log(completeTask({ task: "Task 1" }))

// console.log(addTask.type)
// console.log(addTask.payload)

// !Reducers
// let id = 0

// export default createReducer([], {
//     "ADD_TASK": (state, action) => {
//         state.push({
//             id: ++id,
//             task: action.payload.task,
//             completed: false
//         })
//     },
//     "REMOVE_TASK": (state, action) => {
//         const index = state.findIndex((task) => task.id !== action.payload.id)
//         state.splice(index, 1)
//     },
//     "COMPLETE_TASK": (state, action) => {
//         const index = state.findIndex((task) => task.id !== action.payload.id)
//         state[index].completed = true
//     }
// })


// !Redux Core Reducer Style
// export default function reducer(state = [], action) {
//     if (addTask.type === "ADD_TASK") {
//         return [
//             ...state,
//             {
//                 id: ++id,
//                 task: action.payload.task,
//                 completed: false
//             }
//         ]
//     }

//     else if (removeTask.type === "REMOVE_TASK") {
//         return state.filter((task) => task.id !== action.payload.id)
//     }

//     else if (completeTask.type === "COMPLETE_TASK") {
//         return state.map((task) => task.id === action.payload.id && { ...task, completed: true })
//     }

//     return state
// }

// export const store = configureStore({ createReducer })
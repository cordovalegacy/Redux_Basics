export const addTask = (task) => {
    return { type: "ADD_TASK", payload: {task: task} }
}

export const removeTask = (taskId) => {
    return { type: "REMOVE_TASK", payload: { id: taskId } }
}

export const completeTask = (id) => {
    return { type: "COMPLETE_TASK", payload: { id: id } }
}

export const fetchTodo = () => {
    return async function(dispatch, getState){
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")

        if(!res.ok) throw new Error("Something went wrong fetching task")

        const data = await res.json()
        dispatch(addTask(data.title))

        console.log("response: ", res)
        console.log("data: ", data)
    }
}
export const addTask = (task) => {
    return { type: "ADD_TASK", payload: {task: task} }
}

export const removeTask = (taskId) => {
    return { type: "REMOVE_TASK", payload: { id: taskId } }
}

export const completeTask = (task) => {
    return { type: "COMPLETE_TASK", payload: { task } }
}
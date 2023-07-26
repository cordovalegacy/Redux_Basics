let id = 0

export default function reducer(state=[], actions){
    if(actions.type === "ADD_TASK"){
        return [
            ...state,
            {
                id: ++id,
                task: actions.payload.task,
                completed: false
            }
        ]
    }
    else if(actions.type === "REMOVE_TASK"){
        return state.filter((task) => task.id !== actions.payload.id)
    }
    else if(actions.type === "COMPLETE_TASK"){
        return state.filter((tasks) => tasks.id !== actions.payload)
    }

    return state
}

{
    /* 
    Steps for implementing Redux:
        1. Design the Store (our entry point that holds state and actions)
            -what does our data look like? {users:[], streams:[], chats:[]}
        2. List our Actions (What to do)
            -define actions..ADD, REMOVE, COMPLETE (CRUD)
            -actions will always be an object
            -{
                type: "ADD", 
                payload: {
                    register: "You are registered!"
            } 
            ...actions
        }
        3. Create Reducer Function (How to do it)
        4. Create the Store
    */
}

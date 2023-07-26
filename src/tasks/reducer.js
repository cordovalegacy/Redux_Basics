let id = 0

export default function reducer(state=[], action){
    if(action.type === "ADD_TASK"){
        return [
            ...state,
            {
                id: ++id,
                task: action.payload.task,
                completed: false
            }
        ]
    }

    else if(action.type === "REMOVE_TASK"){
        return state.filter((task) => task.id !== action.payload.id)
    }
    
    else if(action.type === "COMPLETE_TASK"){
        return state.map((task) => task.id === action.payload.id && { ...task, completed: true })
    }

    return state
}

{
    /* 
    Steps for implementing Redux:
        1. Design the Store (our entry point that holds state and action)
            -what does our data look like? {users:[], streams:[], chats:[]}
        2. List our Action (What to do)
            -define action..ADD, REMOVE, COMPLETE (CRUD)
            -action will always be an object
            -{
                type: "ADD", 
                payload: {
                    register: "You are registered!"
            } 
            ...action
        }
        3. Create Reducer Function (How to do it)
        4. Create the Store
    */
}

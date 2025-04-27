import { useState } from "react"
import TodoContext from "./TodoContext"

const TodoContextProvider = ({children}) => {
    const obj = [{topic:"one", desc:"Topic 1 Description 111"},{topic:"one", desc:"Topic 1 Description 222"},{topic:"one", desc:"Topic 1 Description 333"},{topic:"one", desc:"Topic 1 Description 333"},{topic:"one", desc:"Topic 1 Description 333"}];
    const [todos, setTodos] = useState(obj);
    const [lastId, setLastId] = useState(-1);
    return (
        <TodoContext.Provider value={{todos, setTodos, lastId, setLastId}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider;
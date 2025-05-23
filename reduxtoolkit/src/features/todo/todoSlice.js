import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos : [
        {id: 1, topic: "Hello World", desc:"description goes here for first"},
        {id: 2, topic: "Hello Second", desc:"description goes here for second"}
    ]
}
export const todoSlice  = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo:(state, action) => {
            const todo = {
                id:nanoid(),
                topic: action.payload.topic,
                desc: action.payload.desc
            }
            state.todos.push(todo);
            console.log(action.payload);
            console.log("todos")
            console.log(state.todos)
        },
        updateTodo:(state, action) => {
            const {lastId, topic, desc} = action.payload;
            
            console.log(action.payload);
            console.log("todos")
            console.log(state.todos)
            state.todos = state.todos.map((todo) => {
                if(action.payload.lastId == todo.id) {
                    return {lastId, topic, desc}
                } else {
                    return todo;
                }
            })
        },
        removeTodo:(state, action) => {
            
            console.log(action.payload);
            console.log("todos")
            console.log(state.todos)
            state.todos = state.todos.filter((todo)=> {
                return action.payload.id !== todo.id
            })
        },
    }
});
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
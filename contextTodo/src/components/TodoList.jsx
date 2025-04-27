import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
    const {todos, setTodos, setLastId} = useContext(TodoContext);
    const handleEdit = (id) => {
        setLastId(id)
    }

    const handleDelete = (id) => {
        setTodos((todos) => todos.filter((todo, index)=> index !== id));
    }

    return(
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Todo List</h2>
                <ul id="todoList" className="space-y-4">
                    {todos && todos.map((todo, index) => {
                        return (
                            <li key={index} className="bg-gray-50 p-4 rounded-xl shadow flex flex-col">
                                <h3 className="text-lg font-bold text-gray-800">{todo.topic}</h3>
                                <p className="text-gray-600 mt-1">{todo.desc}</p>
                                <div className="flex justify-between">
                                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg float-left" onClick={() => handleEdit(index)}>
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white py-2 px-4 rounded-lg float-right" onClick={() => handleDelete(index)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        )
                    })
                    }
            </ul>
        </div>
    )
}
export default TodoList;
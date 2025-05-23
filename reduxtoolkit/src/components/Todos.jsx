import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, addTodo, updateTodo } from "../features/todo/todoSlice";

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const [topic, setTopic] = useState("");
    const [desc, setDesc] = useState("");
    const [lastId, setLastId] = useState("-1");

    const handleEdit = (id) => {
        setLastId(id);
        todos.map((todo, idx) => {
            if(todo.id == lastId) {
                setTopic(todo.topic);
                setDesc(todo.desc);
            }
        })
    }

    const handleDelete = (id) => {
        dispatch(removeTodo({id}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ss "+lastId );
        if(lastId != -1) {
            dispatch(updateTodo({topic, desc, lastId}));
        } else {
            dispatch(addTodo({topic, desc}));
        }
        setLastId(-1);
        setTopic("");
        setDesc("");
    }
    return(
        <>
        <form onSubmit={handleSubmit} id="todoForm" className="space-y-4">
            <div>
                <label className="block mb-1 text-gray-700 font-semibold">Topic</label>
                <input type="text" id="topic" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                />
            </div>
            <div>
                <label className="block mb-1 text-gray-700 font-semibold">Description</label>
                <textarea id="description" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" rows="3" required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">Add Todo</button>
        </form>
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Todo List</h2>
                <ul id="todoList" className="space-y-4">
                    {todos && todos.map((todo, index) => {
                        return (
                            <li key={index} className="bg-gray-50 p-4 rounded-xl shadow flex flex-col">
                                <h3 className="text-lg font-bold text-gray-800">{todo.topic}</h3>
                                <p className="text-gray-600 mt-1">{todo.desc}</p>
                                <div className="flex justify-between">
                                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg float-left" onClick={() => handleEdit(todo.id)}>
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white py-2 px-4 rounded-lg float-right" onClick={() => handleDelete(todo.id)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        )
                    })
                    }
            </ul>
        </div>
    </>
    )
}
export default TodoList;
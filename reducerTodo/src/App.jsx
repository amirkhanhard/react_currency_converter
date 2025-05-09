import './App.css'
import {  useEffect, useState,useReducer } from "react";

function App() {
  const obj = [{topic:"one", desc:"Topic one Description"},{topic:"two", desc:"Topic two Description"}];
  const [todos, setTodos] = useState(obj);
  const [lastId, setLastId] = useState(-1);
  const [topic, setTopic] = useState("");
  const [desc, setDesc] = useState(""); 

  const myReducer = (state, action) => {
    // console.log(action);
    // console.log(state);
    switch (action.type) {
      case "ADD":
        return [...state, { topic: action.topic, desc: action.desc }];
      case "UPDATE":
        return state.map((todo, idx) =>
          idx === action.id
            ? { ...todo, topic: action.topic, desc: action.desc }
            : todo
          );
      case "DELETE":
        return state.filter((todo, index) => index !== action.id)
      default:
        return state;
    }
  };
  const [todosList, dispatch] = useReducer(myReducer, obj);

  const handleEdit = (id) => {
    setLastId(id)
  }
  const handleDelete = (id) => {
    dispatch({ type: "DELETE", id:id });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(lastId != -1) {
      dispatch({ type: "UPDATE", id:lastId, topic:topic, desc:desc });
      setLastId(-1);
    } else {
      dispatch({ type: "ADD", id:lastId, topic:topic, desc:desc });
    }
    setTopic("");
    setDesc("");
  }

  useEffect(() => {
    console.log(lastId);
    if(lastId != -1) {
      setTopic(todosList[lastId]['topic']);
      setDesc(todosList[lastId]['desc']);
    }
  }, [lastId])
  return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>
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
                    {todosList && todosList.map((todo, index) => {
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
        </div>
      </div>
  )
}

export default App

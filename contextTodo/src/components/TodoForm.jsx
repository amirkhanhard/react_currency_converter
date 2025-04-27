import { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoForm() {
  const {todos, setTodos, lastId, setLastId} = useContext(TodoContext);
  const [topic, setTopic] = useState("");
  const [desc, setDesc] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(lastId >= 0) {
      setTodos((todos) => todos.map((todo, index)=> {
          if(lastId == index) {
            return {topic,desc};
          } else {
            return todo;
          }
        }
      )
    );
    } else {
      setTodos((todos) => [...todos, {topic,desc}]);
    }
    setLastId(-1);
    setTopic("");
    setDesc("");
  }

  useEffect(() => {
    console.log(lastId);
    if(lastId != -1) {
      setTopic(todos[lastId]['topic']);
      setDesc(todos[lastId]['desc']);
    }
  }, [lastId])
  return (
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
  );
}

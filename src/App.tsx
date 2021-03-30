import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>User</button>
      {todos.map((todo) => (
        <Todo userid={todo.userId} title={todo.title} />
      ))}
    </div>
  );
}

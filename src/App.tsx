import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { TodoType } from "./types/todo";
import { UserProfile } from "./UserProfile";
export default function App() {
  const user = {
    name: "Hiroto",
    hobbies: ["野球", "ゲーム"]
  };
  // ステートの型定義　todos
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      // 取得するデータの型定義
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color={"red"} fontSize={"30px"} />
      <button onClick={onClickFetchData}>User</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

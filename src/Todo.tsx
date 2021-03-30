import { VFC } from "react";
import { TodoType } from "./types/todo";

// export const Todo = (props:Pick<TodoType, "userId" | "completed" | "title">) => {
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  // completedがundifiendだった時のための初期値設定
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};

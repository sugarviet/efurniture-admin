import { useQueryClient } from "@tanstack/react-query";
import { useFetch, useDelete, usePost } from "./reactQuery";
import { Card } from "antd";
import { useState } from "react";

const api = "http://localhost:3000/todos";

const TodoList = () => {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const { data: todos, isLoading, isError } = useFetch(api);

  const deleteTodo = useDelete(api, undefined, () => {
    alert("ahihi"), () => alert("ahuhu");
  });
  const addTodo = usePost(api, undefined, () => {
    alert("Create thanh cong"), () => alert("failed");
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTodo.mutate({ text });
    queryClient.invalidateQueries(api);
    setText("");
  };

  const handleDelete = async (id) => {
    deleteTodo.mutate(id);
    queryClient.invalidateQueries(api);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching todos</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-3">
            <Card className="">
              <p>{todo.text}</p>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

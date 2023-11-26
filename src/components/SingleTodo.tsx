import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Todo } from "../model";

type Props = {
  item: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC = ({ item, todos, setTodos }: Props) => {

  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  return (
    <form className="todosSingle">
      {item.isDone ? (
        <s className="todosSingleText">{item.todo}</s>
      ) : (
        <span className="todosSingleText">{item.todo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(item.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(item.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

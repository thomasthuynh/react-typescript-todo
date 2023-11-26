import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Todo } from "../model";

type Props = {
  item: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC = ({ item, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, todo: editTodo } : item))
    );
    setEdit(false);
  };

  return (
    <form className="todosSingle" onSubmit={(e) => handleEdit(e, item.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
          className="todosSingleInput"
        ></input>
      ) : item.isDone ? (
        <s className="todosSingleText">{item.todo}</s>
      ) : (
        <span className="todosSingleText">{item.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !item.isDone) {
              setEdit(!edit);
            }
          }}
        >
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

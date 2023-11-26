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
  return (
    <form action="todosSingle">
      <span className="todosSingleText">{item.todo}</span>

      <div>
        <span className="icon"><AiFillEdit /></span>
        <span className="icon"><AiFillDelete /></span>
        <span className="icon"><MdDone /></span>
      </div>
    </form>
  );
};

export default SingleTodo;

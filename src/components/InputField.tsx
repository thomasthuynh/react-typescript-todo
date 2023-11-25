import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {

  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="inputBox"
      />
      <button className="inputSubmit">Go</button>
    </form>
  );
};

export default InputField;

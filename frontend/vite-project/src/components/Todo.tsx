import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  todo: `flex justify-between capitalize p-4 my-2 bg-gradient-to-bl from-violet-900 to-violet-700 min-w-[200px] max-w-[400px] mx-auto rounded-lg`,
  row: `flex flex-row`,
  text: `text-lg font-medium ml-4`,
  completed: `text-lg font-medium ml-4 line-through text-gray-400`,
  input: `ml-4 cursor-pointer`,
  button: `ml-4 text-red-500 hover:text-red-700 transition duration-200`,
};

interface TodoProps {
  todo: { id: number; todo: string; completed: boolean };
  deleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo }) => {
  return (
    <li className={style.todo}>
      <div className={style.row}>
        <p className={todo.completed ? style.completed : style.text}>{todo.todo}</p>
      </div>
      <button className={style.button} onClick={() => deleteTodo(todo.id)}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
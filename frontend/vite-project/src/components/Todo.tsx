import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
  todo: `flex justify-between capitalize p-4 my-2 bg-gradient-to-bl from-violet-900 to-violet-700 min-w-[200px] max-w-[400px] mx-auto rounded-lg`,
  row: `flex flex-row `,
  text: `text-lg font-medium ml-4`,
  input: `ml-4`
}

interface TodoProps {
  todo: string;
  completed: Boolean
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <li className={style.todo}>
      <div className={style.row}>
        <input type="checkbox" id="" className={style.input} />
        <p className={style.text}>{todo}</p>
      </div>
      <button className="ml-4">
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default Todo
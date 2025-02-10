import { ChangeEvent, useState, FormEvent } from 'react';
import Todo from '../components/Todo';
import Navbar from '../components/Navbar';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-zinc-900 to-zinc-700`,
  heading: `shadow-xl max-w-[600px] max-h-[1080px] h-[400px] min-w-[300px] min-h-[200px] bg-slate-200 flex flex-col rounded-xl mx-auto`,
  title: `text-3xl font-bold mx-auto mt-8`,
  form: `flex flex-row items-center justify-center mt-4`,
  input: `border-2 border-violet-800 px-4 py-2 font-semibold text-lg rounded-xl justify-center items-center`,
  button: `bg-white px-4 py-2 text-lg font-semibold rounded-xl border-2 border-violet-800 ml-2 hover:bg-violet-800 hover:border-black hover:text-white `,
  todoCount: `mx-auto text-xl font-semibold mt-4`,
};

interface TodoItem {
  id: number;
  todo: string;
  completed: boolean;
}

const Homepage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo: TodoItem = {
        id: Date.now(),
        todo: inputValue,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue('');
    }
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={style.bg}>
      <Navbar />
      <div className={style.heading}>
        <h3 className={style.title}>Todo App</h3>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            className={style.input}
            type="text"
            placeholder="Add Todo"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="submit" className={style.button}>+</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodo={handleDelete} />
          ))}
        </ul>
        <p className={style.todoCount}>You have {todos.length} todos</p>
      </div>
    </div>
  );
};

export default Homepage;
import { Link } from "react-router-dom"

const style = {
    container: `w-screen bg-violet-800 rounded-xl p-4 flex flex-row justify-around mb-8`,
    title: `text-3xl font-bold text-white`,
    list: `text-white flex flex-row font-semibold text-lg`,
    listelement: `mr-4 hover:underline`
}

const Navbar = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>TodoApp</h1>
        <div>
            <ul className={style.list}>
                <Link to="/"><li className={style.listelement}>Home</li></Link>
                <Link to="/login"><li className={style.listelement}>Login</li></Link>
                <Link to="/signup"><li className={style.listelement}>Signup</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
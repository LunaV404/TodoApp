import { FormEvent, useState } from "react"
import Navbar from "../components/Navbar"

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-zinc-900 to-zinc-700 flex flex-col`,
    form: `w-[500px] h-[300px] bg-white max-w-[1000px] max-w-[1000px] rounded-xl mx-auto`,
    title: `text-3xl flex justify-center items-center font-bold mt-8`,
    input: `px-4 py-2 text-semibold text-xl border-2 border-black rounded-xl mt-4`,
    inputDiv : `flex flex-col items-center mx-auto`,
    button: `px-6 py-4 bg-violet-800 rounded-2xl text-lg font-semibold text-white mt-4 hover:bg-violet-950 transition duration-250`
}

const Login = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [emailInput, setEmailInput] = useState<string>('')

  const handleClick = (e: FormEvent) => {
    e.preventDefault()
    if (emailInput.trim() !== '' && passwordInput.trim() !== '') {
      setEmail(emailInput)
      setPassword(passwordInput)
    }
    
  }

  return (
    <div className={style.bg}>
        <Navbar />
        <form className={style.form}>
            <h1 className={style.title}>Login</h1>
            <div className={style.inputDiv}>
                <input value={emailInput} type="email" placeholder="Email" className={style.input} onChange={(e) => setEmailInput(e.target.value)}/>
                <input value={passwordInput} type="password" placeholder="Password" className={style.input} onChange={(e) => setPasswordInput(e.target.value)}/>
                <button className={style.button} onClick={handleClick}>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login
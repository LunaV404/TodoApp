import { FormEvent, useState } from "react"
import Navbar from "../components/Navbar"

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-zinc-900 to-zinc-700 flex flex-col`,
    form: `w-[500px] h-[500px] bg-white max-w-[1000px] max-w-[1000px] rounded-xl mx-auto`,
    title: `text-3xl flex justify-center items-center font-bold mt-8`,
    input: `px-4 py-2 text-semibold text-xl border-2 border-black rounded-xl mt-4`,
    inputDiv : `flex flex-col items-center mx-auto`,
    button: `px-6 py-4 bg-violet-800 rounded-2xl text-lg font-semibold text-white mt-4 hover:bg-violet-950 transition duration-250`
}


const Signup = () => {

    const [username, setUsername] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>('')
    const [usernameInput, setUsernameInput] = useState<string>('')
    const [nameInput, setNameInput] = useState<string>('')
    const [emailInput, setEmailInput] = useState<string>('')
  
    const handleClick = (e: FormEvent) => {
      e.preventDefault()
      if (usernameInput.trim() !== '' && nameInput.trim() !== '' && emailInput.trim() !== '' && passwordInput.trim() !== '' && confirmPasswordInput.trim() !== '') {
        setUsername(usernameInput)
        setPassword(passwordInput)
        setEmail(emailInput)
        setConfirmPassword(confirmPassword)
        setName(nameInput)
      }
    }

  return (
    <div className={style.bg}>
    <Navbar />
    <form className={style.form}>
        <h1 className={style.title}>Signup</h1>
        <div className={style.inputDiv}>
            <input value={nameInput} type="text" placeholder="Name" onChange={(e) => setNameInput(e.target.value)} className={style.input} />
            <input value={usernameInput} type="text" placeholder="Username" onChange={(e) => setUsernameInput(e.target.value)} className={style.input} />
            <input value={emailInput} type="email" placeholder="Email" onChange={(e) => setEmailInput(e.target.value)} className={style.input} />
            <input value={passwordInput} type="password" placeholder="Password" onChange={(e) => setPasswordInput(e.target.value)} className={style.input} />
            <input value={confirmPasswordInput} type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPasswordInput(e.target.value)} className={style.input} />
            <button onClick={handleClick} className={style.button}>Signup</button>
        </div>
    </form>
</div>
  )
}

export default Signup
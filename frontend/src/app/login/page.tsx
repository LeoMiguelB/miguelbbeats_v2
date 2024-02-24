
import { login, signup } from '@/actions/login'

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full pt-16">
      <form className="flex flex-col w-1/2 justify-center items-center gap-5">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" className="bg-grey" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" className="bg-grey" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  )
}
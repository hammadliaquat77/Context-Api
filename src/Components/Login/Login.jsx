import React, { useState, useContext } from 'react'
import UserContext from '../../Context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username || !password) {
      alert("Please fill all fields")
      return
    }
    setUser({ username, password })
  }
  return (
    <div>
      <h2 className='text-center text-3xl font-bold mb-10'>Login</h2>
      <div className='flex flex-col gap-y-8'>

        <input type='text' className='border-[2px] border-gray-600 p-2 w-[300px] text-center outline-none'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username' />

        {" "}

        <input type='text' className='border-[2px] border-gray-600 p-2 w-[300px] text-center outline-none'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password' />

        <div className='flex justify-center items-center mb-10'>
          <button onClick={handleSubmit} className='p-3 rounded-lg bg-blue-900 w-36 text-white'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login
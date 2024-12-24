import { useState } from 'react'
import { useEffect } from 'react';

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(import.meta.env.VITE_API+'/users')
      .then(res => res.json())
      .then(result => {
        setUsers(result)
        console.log(result)
      })
  }, [])

  return (
      <div>
        <ul>
          {users.map(user => (
            // eslint-disable-next-line react/jsx-key
            <li>{user.id} {user.name} {user.email}</li>
          ))}
        </ul>
      </div>
  )
}

export default App

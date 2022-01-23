import React from 'react';
import Chats from './components/Chats'
import Login from './components/Login'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase'
import './App.css'

function App() {
  const [user] = useAuthState(auth)
  return(
  <div>
    {user?<Chats />:<Login />}  
  </div>
  )
}

export default App;

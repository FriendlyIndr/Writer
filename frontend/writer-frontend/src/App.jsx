import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserWelcomeCard from './components/user_welcome'

export default function App() {
  return (
    // Have to add conditional statement to put right component depending on login state
    <UserWelcomeCard />
  )
}

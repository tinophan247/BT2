import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function BT4() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default BT4
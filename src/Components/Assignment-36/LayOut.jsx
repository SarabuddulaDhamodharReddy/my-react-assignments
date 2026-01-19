import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Fotter from './Fotter'

function LayOut() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Fotter/>
    </div>
  )
}

export default LayOut

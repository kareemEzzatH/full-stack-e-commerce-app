import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      hi form the user
      <Outlet/>
    </div>
  )
}

export default UserLayout

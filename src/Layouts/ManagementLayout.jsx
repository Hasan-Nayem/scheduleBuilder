import React from 'react'
import './ManagementLayout.css'
import SideNavigation from '../Components/SideNavigation/SideNavigation'
import { Outlet } from 'react-router-dom'
export default function ManagementLayout() {
  return (
    <div className='container p-4'>
      <div className='row'>
        <div className='col-lg-3 text-default text-center'>
          <SideNavigation/>
        </div>
        <div className='col-lg-9'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import './ManagementLayout.css'
import SideNavigation from '../Components/SideNavigation/SideNavigation'
import { Outlet, useNavigate } from 'react-router-dom'
export default function ManagementLayout() {
  const navigate = useNavigate();
  useEffect(()=> {
    navigate('/manage/sp-manage/manage');
  },[]);
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

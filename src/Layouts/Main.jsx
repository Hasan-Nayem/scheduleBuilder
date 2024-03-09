import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import './Main.css';
import { AuthContext } from './../providers/AuthProvider';

export default function Main() {
  return (
    <div className='container roboto-regular'>
    <Header/>
      <Outlet></Outlet>
      {/* <Footer/> */}
    </div>
  )
}

import React from 'react'
import { Navigate, Route,Routes } from 'react-router'
import { AuthPage, CalendarPage, } from '@/pages'

export const AppRouter = () => {
  const authStatus='not-authenticated'
  return (
    <Routes>
      {/* {
        (authStatus === 'not-authenticated')
        ?  <Route path="/auth/*" element={<AuthPage/>}/>
        : <Route path="/"  element={<CalendarPage/>}/>
      } */}
      {/* <Route path="/*" element={<Navigate to='/auth/login'/>}/> */}
      <Route path="/"  element={<CalendarPage/>}/>
    </Routes>
  )
}

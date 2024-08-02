import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import MainView from './views/MainView'
import ServicesView from './views/Services/ServicesView'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
            <Route path="/" element={<MainView/>} />
            <Route path="/services" element={<ServicesView/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

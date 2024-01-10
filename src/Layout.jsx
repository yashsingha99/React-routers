import React from 'react'
import Header from './component/header/Header.jsx'
import Footer from './component/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
       <Header/>  {/*   it is same always */}
       <Outlet/>  {/* it can be change according the above and below functions....*/}
       <Footer/> {/* it is same always....*/}
    </>
  )
}
export default Layout
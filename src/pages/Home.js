import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = ({children}) => {
  return (
    <>
       <Sidebar>
          {children}
       </Sidebar>
    </>
  )
}

export default Home
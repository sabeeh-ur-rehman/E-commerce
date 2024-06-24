import React from 'react'
import Sidebar from './Sidebar'
import Flashsale from './Flashsale'
import Bestselling from './Bestselling'
import Explore from './Explore'
import Endcards from '../about/Endcards.js'


const Home = () => {
  return (
    <div>
        <Sidebar/>
        <Flashsale/>
        <Bestselling/>
        <Explore/>
        <Endcards/>
    </div>
  )
}

export default Home
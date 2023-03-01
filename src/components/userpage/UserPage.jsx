import React from 'react'
import HomeScreen from '../home/HomeScreen'
import UserHeader from './UserHeader'
import HeroScreen from '../hero/HeroScreen'

function UserPage({movies}) {
  return (
    <>
      <UserHeader />
      <HeroScreen movies={movies}/> 
    </>
  )
}

export default UserPage

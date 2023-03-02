import Header from '../header/Header'
import HeroScreen from '../hero/HeroScreen'
import UserHeader from "../userpage/UserHeader"
import { useState, useEffect } from "react"

const HomeScreen = ({movies}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    sessionStorage.getItem("uid") ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, []);

  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header/>}
      <HeroScreen movies = {movies}/>
    </>
  )
}

export default HomeScreen


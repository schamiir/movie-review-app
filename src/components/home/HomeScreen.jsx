import Header from '../header/Header'
import HeroScreen from '../hero/HeroScreen'

const HomeScreen = ({movies}) => {

  return (
    <>
    <Header/>
    <HeroScreen movies = {movies}/>
    </>
  )
}

export default HomeScreen


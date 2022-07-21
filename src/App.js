import './App.css';
import { Box } from "@mui/material";
import { Route, Routes } from 'react-router-dom'
import TrendingList from './containers/TrendingList'
import PopMoviesList from './containers/PopMoviesList';
import PopSeriesList from './containers/PopSeriesList';
import NavBar from './components/NavBar'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ProfileList from './containers/ProfileList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {
          [
          <NavBar />,
          <h1>Trending Movies and TV Series</h1>,
          <TrendingList />,
          <br/>,
          <h1>Most Popular Movies and TV Series</h1>,
          <h2>Movies</h2>,
          <PopMoviesList />,
          <h2>TV Series</h2>,
          <PopSeriesList />,
          <Footer />,
          ]
        } />
        <Route path='about' element= {[<NavBar />, <Box>Halaman About</Box>]} />
        <Route path='movies' element= {[<NavBar />, <Box>Halaman Movies</Box>]} />
        <Route path='tv-shows' element= {[<NavBar />, <Box>Halaman TV Shows</Box>]} />
        <Route path='profile' element= { [<h1>Who's watching?</h1>, <ProfileList />]} />
        <Route path='sign-up' element= {<SignUp />} />
        <Route path='sign-in' element={ <SignIn /> } /> 
      </Routes>
      
    </div>
  );
}

export default App;

// <Route path='/movies/:moviesId' element = { <NavBar />, } />
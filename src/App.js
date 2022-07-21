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
import ProtectedRoute from './components/ProtectedRoute';
import MediaDetail from './components/MediaDetail';
import About from './containers/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {
          [<NavBar />,
          <h1>Trending Movies and TV Series</h1>,
          <TrendingList />,
          <br/>,
          <h1>Most Popular Movies and TV Series</h1>,
          <h2>Movies</h2>,
          <PopMoviesList />,
          <h2>TV Series</h2>,
          <PopSeriesList />,
          <Footer />]
        } />
        <Route path='about' element= {[
          <NavBar />, 
          <h1>Work in Progress. Please come back later</h1>,
          <About />
        ]} />
        <Route path='movies' element= {
          <ProtectedRoute>
            <NavBar />
            <h1>Work in Progress. Please come back later</h1> 
            <Box>Halaman Movies</Box>
          </ProtectedRoute>
          } />
        <Route path='tv-shows' element= {
          <ProtectedRoute>
            <NavBar />
            <h1>Work in Progress. Please come back later</h1>
            <Box>Halaman TV Shows</Box>
          </ProtectedRoute>
          } />
        <Route path='profile' element= { [<h1>Who's watching?</h1>, <ProfileList />]} />
        <Route path='sign-up' element= {
        <ProtectedRoute loginOnly={false}>
          <SignUp />
        </ProtectedRoute>
        } />
        <Route path='sign-in' element={ 
        <ProtectedRoute loginOnly={false}>
          <SignIn />
        </ProtectedRoute>
        } />
        <Route path='media/:mediaId' element={
          <ProtectedRoute loginOnly={true}>
            <NavBar />
            <MediaDetail />
            <Footer />
          </ProtectedRoute>
        } />
      </Routes>
      
    </div>
  );
}

export default App;

// <Route path='/movies/:moviesId' element = { <NavBar />, } />
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './containers/Home';
import theme from './themes/themes';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer';
import Home from './containers/Home';
import theme from './themes/themes';
import { ThemeProvider } from '@mui/material';
import ResponsiveBar from './components/ResponsiveBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveBar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

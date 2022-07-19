import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
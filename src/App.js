//import logo from './logo.svg'; 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' component={Home} />
        <Route path='/login' />
        <Route path='/register' />
      </Routes>
    </div>
  );
}

export default App;

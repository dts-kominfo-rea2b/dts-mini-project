import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './pages/auth/Register';
import Login from './components/auth/login/FormInput';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/home" component={Home} />
        <Route path="/login" element={Login} />
        <Route path="/register" />
      </Routes> */}
    </div>
    // <div>
    //   <Register></Register>
    // </div>
  );
}

export default App;

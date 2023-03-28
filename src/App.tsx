
import './App.css';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Register from './components/Register/Register';
import Chat from './components/Chat/Chat';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

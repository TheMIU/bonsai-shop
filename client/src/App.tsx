import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './view/common/DefaultLayout';
import Login from './view/pages/Login';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    toast.success('Login successful');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    toast.warn('Logout successful');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        {/* <Route path='/*' Component={DefaultLayout}></Route> */}
        <Route path='/*' element={<DefaultLayout isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
        <Route path='/login' element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

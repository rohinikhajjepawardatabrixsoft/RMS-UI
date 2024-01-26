import React from 'react';
import './index.css';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Toaster from './components/toaster';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

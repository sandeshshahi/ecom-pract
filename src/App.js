import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;

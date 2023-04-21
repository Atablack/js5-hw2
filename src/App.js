import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PhotosPage from './pages/PhotosPage';
import NotFound from './pages/NotFound';
import PhotoDetail from './components/PhotoDetail';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='photos' element={<PhotosPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>

        <Route path='photos/:id' element={<PhotoDetail/>}/>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

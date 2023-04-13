import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Create from './pages/create';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

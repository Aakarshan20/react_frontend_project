import React from 'react';
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
// In react-router-dom v6, "Switch" is replaced by routes "Routes".
// react router v6 doesn't support exact and component anymore.
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* notice the order, / should be the last otherwise it will occur exception  */}
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

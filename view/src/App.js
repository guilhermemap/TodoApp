import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';

function Users() {
  return (
    <div>"users here"</div>
  );
}

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import './App.css';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Loading from './pages/Loading'
import Result from './pages/Result'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="loading" element={<Loading />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

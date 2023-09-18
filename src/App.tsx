import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@styles/global.css';
import HomePage from '@pages/Home/HomePage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

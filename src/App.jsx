import {  Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
);

export default App;

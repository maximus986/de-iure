import { Route, Routes } from 'react-router-dom';
import { Activate } from './Activate';
import { Home } from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activate" element={<Activate />} />
    </Routes>
  );
}

export default App;

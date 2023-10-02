import CarContainer from './component/CarContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='min-h-screen bg-[#ecf0f6] flex flex-col items-center py-2'>
      <Router>
        <Routes>
          <Route exact path="/" element={<CarContainer />} />
          <Route path="/page/:page" element={<CarContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

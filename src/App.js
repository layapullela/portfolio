import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';  // Import the ResumePage component
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} /> {/* Make sure this line is here */}
        <Route path="/myprojects" element={<Projects />} />
        {/* Add more Routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route ,} from "react-router-dom";
import Users from './Components/Users';
import UserInfo from './Components/UserInfo';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/info" element={<UserInfo />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

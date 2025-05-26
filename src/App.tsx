import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_Page from "./view/pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_Page />} />
      </Routes>
    </Router>
  );
}

export default App;

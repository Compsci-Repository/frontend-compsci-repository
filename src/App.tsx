import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_Page from "./view/pages/HomePage";
import Periodo from "./view/pages/Periodo";
import { ContentListPage } from "./view/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/periodo" element={<Periodo />} />
        <Route
          path="/:semestr/:subject/:category"
          element={<ContentListPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;

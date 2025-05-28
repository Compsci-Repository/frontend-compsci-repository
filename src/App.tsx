import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClassesPage, ContentListPage, HomePage } from "./view/pages";
import { Layout } from "./view/components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:semester" element={<ClassesPage />} />
          <Route
            path="/:semester/:subject/:category"
            element={<ContentListPage />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CategoriesPage,
  ClassesPage,
  ContentListPage,
  HomePage,
} from "./pages";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/:semester">
              <Route index element={<ClassesPage />} />
              <Route path="/:semester/:subject">
                <Route index element={<CategoriesPage />} />
                <Route
                  path="/:semester/:subject/:category"
                  element={<ContentListPage />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

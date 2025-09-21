import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import ModulePage from "./pages/ModulePage";
import TopicPage from "./pages/TopicPage";

// Minimal placeholder home page
function Home() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Welcome to Teen Money Lab</h2>
      <p className="text-gray-600">
        Select a module or topic from the sidebar to get started.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Shared layout with sidebar + main content */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Module overview pages */}
          <Route path="learn/:moduleId" element={<ModulePage />} />

          {/* Topic detail pages */}
          <Route path="learn/:moduleId/:topicId" element={<TopicPage />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

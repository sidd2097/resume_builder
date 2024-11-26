import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ResumeProvider } from "./context/ResumeContext";

import Header from "./components/Header";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <ThemeProvider>
      <ResumeProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <Header />
            <main className="container mx-auto p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/builder" element={<ResumeBuilder />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ResumeProvider>
    </ThemeProvider>
  );
};

export default App;

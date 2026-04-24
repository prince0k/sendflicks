import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header, Footer } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { RecipeDetail } from './components/RecipeDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#fbf9f8]">
        {/* Header will show search only on detail pages or based on route */}
        <Routes>
          <Route path="/" element={<Header showSearch={false} />} />
          <Route path="/recipe/*" element={<Header showSearch={true} />} />
          <Route path="*" element={<Header showSearch={false} />} />
        </Routes>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

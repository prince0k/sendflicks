import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header, Footer } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { RecipeDetail } from './components/RecipeDetail';
import { SubscribeModal } from './components/SubscribeModal';
import { LegalPage, privacySections, termsSections } from './components/LegalPage';
import { RecipeBrowsePage } from './components/RecipeBrowsePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function useScrollProgressSubscribeTrigger() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (scrollTop / max) * 100;
      setProgress(pct);
      const isSubscribed = localStorage.getItem('sendflicks_subscribed') === 'true';
      const isDismissed = localStorage.getItem('sendflicks_popup_dismissed') === 'true';
      if (pct >= 30 && !isSubscribed && !isDismissed) {
        setOpen(true);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function close() {
    localStorage.setItem('sendflicks_popup_dismissed', 'true');
    setOpen(false);
  }

  return { open, close, progress };
}

export default function App() {
  const { open, close, progress } = useScrollProgressSubscribeTrigger();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#fbf9f8]">
        <SubscribeModal open={open} onClose={close} readProgress={progress} />
        {/* Header will show search only on detail pages or based on route */}
        <Routes>
          <Route path="/" element={<Header showSearch={false} />} />
          <Route path="/recipe/*" element={<Header showSearch={true} />} />
          <Route path="/category/*" element={<Header showSearch={false} />} />
          <Route path="/all" element={<Header showSearch={false} />} />
          <Route path="/privacy-policy" element={<Header showSearch={false} />} />
          <Route path="/terms-and-conditions" element={<Header showSearch={false} />} />
          <Route path="*" element={<Header showSearch={false} />} />
        </Routes>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all" element={<RecipeBrowsePage />} />
            <Route path="/category/:slug" element={<RecipeBrowsePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route
              path="/privacy-policy"
              element={<LegalPage title="Privacy Policy" updatedOn="April 24, 2026" sections={privacySections} />}
            />
            <Route
              path="/terms-and-conditions"
              element={
                <LegalPage title="Terms and Conditions" updatedOn="April 24, 2026" sections={termsSections} />
              }
            />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

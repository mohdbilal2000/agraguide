import React, { useEffect, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import Home from './pages/Home';

const Plans = lazy(() => import('./pages/Plans'));
const PlanDetail = lazy(() => import('./pages/PlanDetail'));
const Booking = lazy(() => import('./pages/Booking'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const DigitalCard = lazy(() => import('./pages/DigitalCard'));
const GuideBooking = lazy(() => import('./pages/GuideBooking'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Legal = lazy(() => import('./pages/Legal'));

// Loading state for Suspense
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-bg" role="status" aria-label="Loading page">
    <div className="w-16 h-16 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
  </div>
);

// Scroll to top on navigation component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main Layout Wrapper
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isDigitalCard = location.pathname === '/digital-card';
  const isPlanDetail = location.pathname.startsWith('/plans/');

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-brand-bg">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      {!isDigitalCard && !isPlanDetail && <Navbar />}
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      {!isDigitalCard && <Footer />}
      {!isDigitalCard && <ContactButton />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans/:id" element={<PlanDetail />} />
            <Route path="/guide-booking" element={<GuideBooking />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/digital-card" element={<DigitalCard />} />
            <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
            <Route path="/terms" element={<Legal title="Terms of Service" />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;

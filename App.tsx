
import React, { useEffect, Suspense } from 'react';
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
import Plans from './pages/Plans';
import PlanDetail from './pages/PlanDetail';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import DigitalCard from './pages/DigitalCard';
import GuideBooking from './pages/GuideBooking';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Services from './pages/Services';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Legal from './pages/Legal';

// Loading state for Suspense
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-bg">
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
    <div className="flex flex-col min-h-screen inter overflow-x-hidden bg-brand-bg">
      <ScrollToTop />
      {!isDigitalCard && !isPlanDetail && <Navbar />}
      <main className="flex-grow">
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

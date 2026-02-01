
import React, { Suspense, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Plans = React.lazy(() => import('./pages/Plans'));
const PlanDetail = React.lazy(() => import('./pages/PlanDetail'));
const Booking = React.lazy(() => import('./pages/Booking'));
const GuideBooking = React.lazy(() => import('./pages/GuideBooking'));
const Destinations = React.lazy(() => import('./pages/Destinations'));
const Services = React.lazy(() => import('./pages/Services'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Reviews = React.lazy(() => import('./pages/Reviews'));
const DigitalCard = React.lazy(() => import('./pages/DigitalCard'));
const Legal = React.lazy(() => import('./pages/Legal'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-bg overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-brand-bg">
              <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
              <span className="text-xs font-bold tracking-widest text-brand-primary uppercase">Loading Heritage...</span>
            </div>
          }>
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
        </main>
        <Footer />
        <ContactButton />
      </div>
    </Router>
  );
};

export default App;

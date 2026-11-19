import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';

export default function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
}

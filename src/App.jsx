import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './assets/style.css'
import Footer from './components/Footer';
import Loader from "./components/Loader";
import Navbar from './components/Navbar';
import useDynamicStyles from './hooks/useDynamicStyles';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = lazy(() => import('./page/Home'));
const PrivacyPolicy = lazy(() => import('./page/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./page/TermsOfUse'));
const NotFoundPage = lazy(() => import('./page/NotFoundPage'));
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  function DynamicStylesWrapper() {
    useDynamicStyles();
    return null; // Prevents rendering issues
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar />
      <DynamicStylesWrapper />
      <Suspense fallback={<Loader />}>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy/policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    <Footer />
    </>
  )
}

export default App

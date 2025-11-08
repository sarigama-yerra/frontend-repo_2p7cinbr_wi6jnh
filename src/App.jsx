import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/Footer';
import { HomePage, MenuPage, ContactPage } from './components/Pages';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#0E3B3C]">
      <Navbar currentPage={page} onNavigate={setPage} />
      {page === 'home' && (
        <>
          <Hero onCTA={setPage} />
          <HomePage />
          <ImageCarousel />
        </>
      )}
      {page === 'menu' && (
        <>
          <div className="pt-16" />
          <MenuPage />
        </>
      )}
      {page === 'contact' && (
        <>
          <div className="pt-16" />
          <ContactPage />
        </>
      )}
      <Footer />
    </div>
  );
}

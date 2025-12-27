
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Process } from './components/Process';
import { Audience } from './components/Audience';
import { SocialProof } from './components/SocialProof';
import { Differentiators } from './components/Differentiators';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { WhatsAppFloating } from './components/WhatsAppFloating';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Audience />
        <SocialProof />
        <Differentiators />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default App;

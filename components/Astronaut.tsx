
import React from 'react';

interface AstronautProps {
  className?: string;
  variant?: 'floating' | 'standing' | 'action';
}

export const Astronaut: React.FC<AstronautProps> = ({ className = '', variant = 'floating' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-techBlue/20 blur-[80px] rounded-full"></div>
      
      {/* SVG Mascot - TechView Astronaut */}
      <svg 
        viewBox="0 0 200 200" 
        className={`relative z-10 w-full h-full ${variant === 'floating' ? 'animate-float' : ''}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" stroke="#00D1FF" strokeWidth="1" strokeDasharray="10 5" opacity="0.3"/>
        
        {/* Suit Body */}
        <rect x="75" y="85" width="50" height="60" rx="10" fill="#E2E8F0" />
        <rect x="80" y="90" width="40" height="15" rx="4" fill="#0A1128" />
        
        {/* Helmet */}
        <circle cx="100" cy="65" r="35" fill="#F8FAFC" stroke="#00D1FF" strokeWidth="2" />
        <path d="M75 60C75 48.9543 86.1929 40 100 40C113.807 40 125 48.9543 125 60V75H75V60Z" fill="#1E293B" opacity="0.9" />
        <path d="M85 55C85 52 88 50 100 50C112 50 115 52 115 55" stroke="#00D1FF" strokeWidth="2" strokeLinecap="round" />

        {/* Backpack */}
        <rect x="65" y="95" width="15" height="40" rx="4" fill="#94A3B8" />
        <rect x="120" y="95" width="15" height="40" rx="4" fill="#94A3B8" />

        {/* Arms/Legs */}
        <path d="M75 100L55 120" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
        <path d="M125 100L145 120" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
        <path d="M85 145L80 170" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" />
        <path d="M115 145L120 170" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" />
      </svg>
    </div>
  );
};

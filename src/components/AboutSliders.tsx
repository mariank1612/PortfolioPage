import React from 'react';
import { Mountain, Waves, Dog } from 'lucide-react';
import PreferenceSlider from './PreferenceSlider';

// --- Custom Minimal Icons for Cat/Dog ---
const CatIcon = ({ size = 24, ...props }: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <path d="M12 21c-4.418 0-8-3.582-8-8 0-1.347.334-2.615.923-3.728L3 3l6.272 1.923A7.954 7.954 0 0 1 12 5c1.077 0 2.1.213 3.023.6l6.272-1.923-1.923 6.272c.59 1.113.923 2.381.923 3.728 0 4.418-3.582 8-8 8Z" />
    <circle cx="9" cy="13" r="0.5" fill="currentColor" />
    <circle cx="15" cy="13" r="0.5" fill="currentColor" />
    <path d="M12 15v1a1 1 0 0 0 1 1h.5" />
  </svg>
);

const AboutSliders: React.FC = () => {
  return (
    <div className="w-full max-w-xl space-y-10 mx-auto mt-12">
      {/* Slider 1: Vacation */}
      <PreferenceSlider
        label="Mountain or beach vacation?"
        leftIcon={Mountain}
        rightIcon={Waves}
        myPreferenceValue={40}
        accentColor="#0ea5e9"
        revealImage="/watzmann.jpg"
        revealLabel="Watzmann 2025"
      />

      {/* Slider 2: Pets */}
      <PreferenceSlider
        label="Team cat or team dog?"
        leftIcon={CatIcon}
        rightIcon={Dog}
        myPreferenceValue={92}
        accentColor="#fbbf24"
        revealImage="/my-dog.jpg"
        revealLabel="Meet Wilma"
      />
    </div>
  );
};

export default AboutSliders;

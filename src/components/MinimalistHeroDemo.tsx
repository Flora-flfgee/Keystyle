"use client";

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="mnmlst."
      navLinks={navLinks}
      mainText="Simplicity is the ultimate sophistication. Our designs embrace minimalism to bring clarity and elegance to your everyday life."
      readMoreLink="#"
      imageSrc="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=640&auto=format&fit=crop"
      imageAlt="A portrait of a person in a minimalist outfit."
      overlayText={{
        part1: 'less is',
        part2: 'more.',
      }}
      socialLinks={socialLinks}
      locationText="Arlington Heights, IL"
    />
  );
};

export default MinimalistHeroDemo;

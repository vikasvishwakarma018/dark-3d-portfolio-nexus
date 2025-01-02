import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
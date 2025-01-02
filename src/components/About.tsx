import React from 'react';

export const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold mb-12 bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 animate-fade-in">
            <h3 className="text-2xl font-space mb-4">Who I Am</h3>
            <p className="text-gray-400">
              A passionate developer with a keen eye for design and a love for creating immersive web experiences.
              I specialize in building modern web applications using cutting-edge technologies.
            </p>
          </div>
          <div className="glass p-8 animate-fade-in delay-200">
            <h3 className="text-2xl font-space mb-4">What I Do</h3>
            <ul className="space-y-2 text-gray-400">
              <li>✨ Frontend Development</li>
              <li>🎨 UI/UX Design</li>
              <li>🚀 Performance Optimization</li>
              <li>💻 Full Stack Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
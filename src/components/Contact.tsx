import React from 'react';
import { Button } from './ui/button';

export const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold mb-12 bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <div className="glass max-w-2xl mx-auto p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <Button className="w-full glass hover:bg-white/10">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
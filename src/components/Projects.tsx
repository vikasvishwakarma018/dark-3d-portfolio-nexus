import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export const Projects = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold mb-12 bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="glass hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle>Project {i}</CardTitle>
                <CardDescription className="text-gray-400">
                  A brief description of this amazing project and the technologies used.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
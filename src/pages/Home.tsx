import React from 'react';
import { DonationForm } from '../components/DonationForm';
import { ProjectCard } from '../components/ProjectCard';
import { ImpactStats } from '../components/ImpactStats';
import { useAuthStore } from '../lib/store';

const projects = [
  {
    name: 'Amazon Restoration',
    description: 'Restoring degraded areas in the Amazon rainforest.',
    image: '/images/amazon.jpg',
    progress: 75
  },
  {
    name: 'Urban Forests',
    description: 'Creating green spaces in urban areas.',
    image: '/images/urban.jpg',
    progress: 45
  }
];

export const Home = () => {
  const { user } = useAuthStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to GlobalForests{user ? `, ${user.name}` : ''}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ImpactStats />
        <DonationForm />
      </div>

      <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
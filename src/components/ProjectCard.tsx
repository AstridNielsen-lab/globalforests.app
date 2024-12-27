import React from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  progress: number;
}

export const ProjectCard = ({ name, description, image, progress }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block text-green-600">
                {progress}% Complete
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
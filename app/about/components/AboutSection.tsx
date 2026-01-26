import React from 'react';

type AboutSectionProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

export default function AboutSection({ title, description, imageUrl }: AboutSectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {imageUrl && (
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={imageUrl}
                alt={title}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          )}
          <div className={`${imageUrl ? 'md:w-1/2 md:pl-12' : 'w-full'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
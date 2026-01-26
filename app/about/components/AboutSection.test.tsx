import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from './AboutSection';

describe('AboutSection Component', () => {
  it('renders with title and description', () => {
    render(
      <AboutSection
        title="Test Title"
        description="Test Description"
      />
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders with image', () => {
    render(
      <AboutSection
        title="Test Title"
        description="Test Description"
        imageUrl="/test-image.jpg"
      />
    );
    const image = screen.getByAltText('Test Title');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('renders without image', () => {
    render(
      <AboutSection
        title="Test Title"
        description="Test Description"
      />
    );
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
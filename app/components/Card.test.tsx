import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card Component', () => {
  it('renders with title and content', () => {
    render(
      <Card title="Test Title">
        <p>Test Content</p>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with footer', () => {
    render(
      <Card title="Test Title" footer={<p>Test Footer</p>}>
        <p>Test Content</p>
      </Card>
    );
    expect(screen.getByText('Test Footer')).toBeInTheDocument();
  });

  it('renders without title', () => {
    render(
      <Card>
        <p>Test Content</p>
      </Card>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card title="Test Title" className="custom-class">
        <p>Test Content</p>
      </Card>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
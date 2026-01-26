import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByText('Click Me')).toHaveClass('bg-blue-600');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-gray-200');
  });

  it('renders with danger variant', () => {
    render(<Button variant="danger">Danger</Button>);
    expect(screen.getByText('Danger')).toHaveClass('bg-red-600');
  });

  it('renders with small size', () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small')).toHaveClass('px-3');
  });

  it('renders with large size', () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large')).toHaveClass('px-6');
  });
});

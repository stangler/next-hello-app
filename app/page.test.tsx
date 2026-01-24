import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders the heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello Next')
  })

  it('renders the welcome message', () => {
    render(<Home />)
    expect(screen.getByText('Welcome to your Next.js application!')).toBeInTheDocument()
  })

  it('has the correct heading class', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('text-4xl font-bold text-blue-600')
  })

  it('has the correct paragraph class', () => {
    render(<Home />)
    const paragraph = screen.getByText('Welcome to your Next.js application!')
    expect(paragraph).toHaveClass('mt-4 text-lg text-gray-600')
  })
})
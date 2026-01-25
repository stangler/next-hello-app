import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders the heading', () => {
    render(<Home />)
    expect(screen.getByText('Hello Next')).toBeInTheDocument()
  })

  it('renders the welcome message', () => {
    render(<Home />)
    expect(screen.getByText('Welcome to your Next.js application!')).toBeInTheDocument()
  })

  it('has the correct heading class', () => {
    render(<Home />)
    const heading = screen.getByText('Hello Next')
    expect(heading).toHaveClass('text-4xl font-bold text-blue-600')
  })

  it('has the correct paragraph class', () => {
    render(<Home />)
    const paragraph = screen.getByText('Welcome to your Next.js application!')
    expect(paragraph).toHaveClass('mt-4 text-lg text-gray-600')
  })

  it('renders the about page link', () => {
    render(<Home />)
    const link = screen.getByText('About this app')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
    expect(link).toHaveClass('text-blue-600 hover:text-blue-800 underline')
  })
})
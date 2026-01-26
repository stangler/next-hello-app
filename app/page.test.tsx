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

  it('renders the about button', () => {
    render(<Home />)
    const button = screen.getByRole('button', { name: 'About this app' })
    expect(button).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'About this app' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
  })

  it('renders the Next.js logo image', () => {
    render(<Home />)
    const image = screen.getByAltText('Next.js Logo')
    expect(image).toBeInTheDocument()
    expect(image.getAttribute('src')).toMatch(/^\/_next\/image/)
  })
})

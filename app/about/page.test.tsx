import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './page'

describe('About Page', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByText('About This App')).toBeInTheDocument()
  })

  it('renders the welcome message', () => {
    render(<About />)
    expect(screen.getByText('Welcome to the about page!')).toBeInTheDocument()
  })

  it('has the correct heading class', () => {
    render(<About />)
    const heading = screen.getByText('About This App')
    expect(heading).toHaveClass('text-4xl font-bold text-blue-600')
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText('This is a Next.js application built with TypeScript and Tailwind CSS.')).toBeInTheDocument()
  })

  it('renders the features list', () => {
    render(<About />)
    expect(screen.getByText('App Router architecture')).toBeInTheDocument()
    expect(screen.getByText('TypeScript for type safety')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS for styling')).toBeInTheDocument()
    expect(screen.getByText('Vitest for testing')).toBeInTheDocument()
    expect(screen.getByText('ESLint for code quality')).toBeInTheDocument()
  })

  it('renders the back to home link', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: 'Back to Home' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveClass('text-blue-600 hover:text-blue-800 underline')
  })
})
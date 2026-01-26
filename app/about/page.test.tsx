import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './page'

describe('About Page', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByText('About This App')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText('This is a Next.js application built with TypeScript and Tailwind CSS. The application demonstrates modern web development practices including App Router architecture, TypeScript for type safety, Tailwind CSS for styling, Vitest for testing, and ESLint for code quality.')).toBeInTheDocument()
  })

  it('renders the back to home button', () => {
    render(<About />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Back to Home' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})

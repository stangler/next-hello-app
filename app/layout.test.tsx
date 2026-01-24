import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import RootLayout from './layout'

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { container } = render(
      <RootLayout>
        <div data-testid="child">Test Child</div>
      </RootLayout>
    )
    expect(container.querySelector('[data-testid="child"]')).toBeInTheDocument()
  })

  it('has correct html lang attribute', () => {
    const { container } = render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    )
    const htmlElement = container.querySelector('html')
    expect(htmlElement).toHaveAttribute('lang', 'en')
  })

  it('has body element', () => {
    const { container } = render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    )
    expect(container.querySelector('body')).toBeInTheDocument()
  })
})
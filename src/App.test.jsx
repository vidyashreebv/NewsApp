import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders app title', () => {
    render(<App />)
    expect(
      screen.getByText('Spaceflight News Dashboard')
    ).toBeInTheDocument()
  })

  it('renders app subtitle', () => {
    render(<App />)
    expect(
      screen.getByText(/stay updated with the latest space exploration news/i)
    ).toBeInTheDocument()
  })

  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeInTheDocument()
  })
})

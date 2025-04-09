import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'
 
describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  });

  it('renders a subheading', () => {
    render(<Hero />)

    const subheading = screen.getByText(
      /Explore the innovative design of our website and consider relying on us for your next hire!/i
    )

    expect(subheading).toBeInTheDocument()
  });

  it('renders a button', () => {
    render(<Hero />)
 
    const button = screen.getByRole('button')
 
    expect(button).toBeInTheDocument()
  });

  it('renders the hero visual element', () => {
    render(<Hero />)

    const visual = screen.getByTestId('hero-visual')

    expect(visual).toBeInTheDocument();
  });
})
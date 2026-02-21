import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
    it('renders the hero heading', () => {
        render(<Home />)
        expect(screen.getByText(/Meet the AI agent that/i)).toBeInTheDocument()
        expect(screen.getByText('moves your money.')).toBeInTheDocument()
    })

    it('renders the Features section heading', () => {
        render(<Home />)
        expect(screen.getByText(/Your agent works/i)).toBeInTheDocument()
    })

    it('renders the How It Works section heading', () => {
        render(<Home />)
        expect(screen.getByText(/From words to/i)).toBeInTheDocument()
    })

    it('renders the Ecosystem section heading', () => {
        render(<Home />)
        expect(screen.getByText(/Part of the/i)).toBeInTheDocument()
    })

    it('renders the CTA section heading', () => {
        render(<Home />)
        expect(screen.getByText(/Ready to meet your/i)).toBeInTheDocument()
    })

    it('renders three feature cards', () => {
        const { container } = render(<Home />)
        // The features section has 3 Card components (hero card + 2 smaller cards)
        const featureSection = container.querySelector('#features')
        expect(featureSection).toBeInTheDocument()

        // Check the three feature card titles
        expect(screen.getByText('Understands & Learns')).toBeInTheDocument()
        expect(screen.getByText('Stellar-Powered Speed')).toBeInTheDocument()
        expect(screen.getByText('End-to-End Protection')).toBeInTheDocument()
    })

    it('renders the How It Works steps', () => {
        render(<Home />)
        expect(screen.getByText('You request')).toBeInTheDocument()
        expect(screen.getByText('Agent understands intent')).toBeInTheDocument()
        expect(screen.getByText('You approve, it executes')).toBeInTheDocument()
    })

    it('renders Join the Waitlist buttons', () => {
        render(<Home />)
        const waitlistButtons = screen.getAllByText('Join the Waitlist')
        expect(waitlistButtons.length).toBeGreaterThanOrEqual(2)
    })

    it('renders the footer with IntMoney branding', () => {
        render(<Home />)
        expect(screen.getByText(/2025 IntMoney/i)).toBeInTheDocument()
    })
})

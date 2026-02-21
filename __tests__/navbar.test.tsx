import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '@/components/navbar'

describe('Navbar', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    })

    it('renders the IntMoney logo', () => {
        render(<Navbar />)
        const logo = screen.getByAltText('IntMoney')
        expect(logo).toBeInTheDocument()
    })

    it('renders desktop navigation links', () => {
        render(<Navbar />)
        // Target the desktop nav — the <header> element contains it
        const header = screen.getByRole('banner')
        const nav = within(header).getByRole('navigation')
        expect(within(nav).getByText('Features')).toBeInTheDocument()
        expect(within(nav).getByText('How it Works')).toBeInTheDocument()
        expect(within(nav).getByText('Ecosystem')).toBeInTheDocument()
    })

    it('renders the Join Waitlist CTA button', () => {
        render(<Navbar />)
        expect(screen.getByText('Join Waitlist')).toBeInTheDocument()
    })

    it('toggles mobile menu on hamburger click', async () => {
        const user = userEvent.setup()
        render(<Navbar />)

        const toggleButton = screen.getByLabelText('Toggle menu')
        expect(toggleButton).toBeInTheDocument()

        // Find the mobile overlay via its fixed positioning class
        const mobileOverlay = toggleButton.closest('header')!
            .parentElement!
            .querySelector('[class*="fixed inset-0"]') as HTMLElement

        expect(mobileOverlay).toBeInTheDocument()
        expect(mobileOverlay.className).toContain('opacity-0')

        // Click to open
        await user.click(toggleButton)
        expect(mobileOverlay.className).toContain('opacity-100')

        // Click to close
        await user.click(toggleButton)
        expect(mobileOverlay.className).toContain('opacity-0')
    })
})

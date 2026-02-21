import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { HeroDemo } from '@/components/hero-demo'

describe('HeroDemo', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('renders without crashing', () => {
        render(<HeroDemo />)
        expect(screen.getByText('IntMoney Agent')).toBeInTheDocument()
        expect(screen.getByText('Live')).toBeInTheDocument()
    })

    it('displays the initial placeholder text', () => {
        render(<HeroDemo />)
        expect(screen.getByText('Type a command...')).toBeInTheDocument()
    })

    it('begins typing the first scene message', () => {
        render(<HeroDemo />)

        // Advance past idle -> typing start (500ms) + a few chars
        act(() => { vi.advanceTimersByTime(600) })

        // The input area should now show partial text (at least "S" from "Send $50 to Alice")
        expect(screen.getByText('Your request')).toBeInTheDocument()
    })

    it('shows the full user message after typing completes', () => {
        render(<HeroDemo />)

        // Advance timers step-by-step so React can batch each state update
        // idle->typing: 500ms, then 18 chars * 40ms each, then typing->user: 300ms
        for (let i = 0; i < 40; i++) {
            act(() => { vi.advanceTimersByTime(50) })
        }

        expect(screen.getByText('Send $50 to Alice')).toBeInTheDocument()
    })

    it('renders scene indicator dots', () => {
        const { container } = render(<HeroDemo />)
        // There should be 3 scene indicator dots (one per scene)
        const indicatorDots = container.querySelectorAll(
            '[class*="h-1"][class*="rounded-full"][class*="transition-all"]'
        )
        expect(indicatorDots.length).toBe(3)
    })

    it('shows the bottom helper text', () => {
        render(<HeroDemo />)
        expect(screen.getByText('Your agent handles the rest')).toBeInTheDocument()
    })
})

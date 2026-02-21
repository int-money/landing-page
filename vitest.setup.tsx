import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom does not implement scrollTo
Element.prototype.scrollTo = vi.fn()

// Mock next/image
vi.mock('next/image', () => ({
    __esModule: true,
    default: (props: Record<string, unknown>) => {
        // eslint-disable-next-line @next/next/no-img-element
        const { fill, priority, ...rest } = props as Record<string, unknown>
        void fill
        void priority
        return <img {...(rest as React.ImgHTMLAttributes<HTMLImageElement>)} />
    },
}))

// Mock next/navigation
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
        back: vi.fn(),
    }),
    useSearchParams: () => new URLSearchParams(),
    usePathname: () => '/',
}))

// Mock next-themes
vi.mock('next-themes', () => ({
    ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useTheme: () => ({ theme: 'dark', setTheme: vi.fn() }),
}))

// Mock @vercel/analytics
vi.mock('@vercel/analytics/next', () => ({
    Analytics: () => null,
}))

// Mock useActiveSection hook
vi.mock('@/hooks/use-active-section', () => ({
    useActiveSection: () => '',
}))

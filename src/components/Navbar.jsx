import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Call for Papers', href: '#call-for-papers' },
        { label: 'Procedure', href: '#procedure' },
        { label: 'Charges', href: '#registration' },
        { label: 'Contact', href: '#submit-cta' },
    ]

    const handleLinkClick = () => {
        setMobileOpen(false)
    }

    return (
        <nav
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-400 border-b border-light-border py-4 ${scrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-sm'
                : 'bg-white/80 backdrop-blur-md'
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between border-x border-light-border h-full">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 font-display font-bold text-xl tracking-tight">
                    <span className="text-2xl">📚</span>
                    <span className="gradient-text">ICSSF-CET</span>
                </a>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex list-none gap-8">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="text-text-secondary text-sm font-medium relative py-1 hover:text-text-primary transition-colors duration-300 group"
                            >
                                {item.label}
                                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-accent-indigo to-accent-purple rounded-sm transition-all duration-400 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a
                    href="#submit"
                    className="hidden md:inline-flex px-6 py-2.5 btn-gradient text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                    Submit Paper
                </a>

                {/* Mobile Toggle */}
                <button
                    className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span
                        className={`block w-6 h-0.5 bg-text-primary rounded-sm transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-text-primary rounded-sm transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-text-primary rounded-sm transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-light-border transition-all duration-300 overflow-hidden shadow-lg ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-6 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="text-text-secondary text-sm font-medium hover:text-text-primary transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#submit"
                        onClick={handleLinkClick}
                        className="mt-2 px-6 py-3 btn-gradient text-white font-semibold text-sm rounded-lg text-center transition-all duration-300"
                    >
                        Submit Paper
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

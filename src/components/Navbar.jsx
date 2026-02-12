import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
        { label: 'Home', to: '/#home' },
        { label: 'About', to: '/#about' },
        { label: 'Call for Papers', to: '/#call-for-papers' },
        { label: 'Procedure', to: '/#procedure' },
        { label: 'Charges', to: '/#registration' },
        { label: 'Contact', to: '/#submit-cta' },
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
                <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-xl tracking-tight">
                    <span className="text-2xl">📚</span>
                    <span className="gradient-text">ICSSF-CET</span>
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex list-none gap-4">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                to={item.to}
                                className="px-4 py-2 border border-gray-200 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-accent-indigo hover:text-accent-indigo hover:bg-indigo-50/30"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <Link
                    to="/submit-paper"
                    className="hidden md:inline-flex px-6 py-2.5 btn-gradient border border-white/20 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                    Submit Paper
                </Link>

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
                        <Link
                            key={item.label}
                            to={item.to}
                            onClick={handleLinkClick}
                            className="text-text-secondary text-sm font-medium hover:text-text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        to="/submit-paper"
                        onClick={handleLinkClick}
                        className="mt-2 px-6 py-3 btn-gradient text-white font-semibold text-sm rounded-lg text-center transition-all duration-300"
                    >
                        Submit Paper
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

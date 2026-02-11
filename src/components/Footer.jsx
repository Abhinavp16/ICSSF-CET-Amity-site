const footerLinks = {
    'Quick Links': [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Submit Paper', href: '#submit' },
        { label: 'Call for Papers', href: '#call-for-papers' },
        { label: 'Publication Charges', href: '#pricing' },
    ],
    Resources: [
        { label: 'Publication Guidelines', href: '#' },
        { label: 'Paper Format', href: '#' },
        { label: 'Track Paper Status', href: '#' },
        { label: 'Editorial Board', href: '#' },
        { label: 'Join as Reviewer', href: '#' },
    ],
    Legal: [
        { label: 'Journal Policies', href: '#' },
        { label: 'Disclaimer', href: '#' },
        { label: 'Refund Policy', href: '#' },
        { label: 'Copyright', href: '#' },
        { label: 'Sitemap', href: '#' },
    ],
}

const Footer = () => {
    return (
        <footer className="pt-20 bg-[#1a1a2e] border-t border-[rgba(255,255,255,0.08)]" id="contact">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
                    {/* Brand */}
                    <div>
                        <a href="#" className="flex items-center gap-2.5 font-display font-bold text-xl tracking-tight mb-4 text-white">
                            <span className="text-2xl">📚</span>
                            <span className="gradient-text">ICSSF-CET</span>
                        </a>
                        <p className="text-[#a0a0b8] text-sm leading-relaxed mb-6">
                            International Conference on Sustainable Solutions for the Future: Connecting Environment & Technology — Organized by Amity University.
                        </p>
                        <div className="flex flex-col gap-2">
                            <a href="tel:+919429458311" className="text-[#a0a0b8] text-sm hover:text-white transition-colors">
                                📞 +91 9429458311
                            </a>
                            <a href="mailto:info@amity.edu" className="text-[#a0a0b8] text-sm hover:text-white transition-colors">
                                ✉️ info@amity.edu
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-display text-sm font-bold mb-5 text-white">{title}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-[#7a7a95] text-sm hover:text-[#a5b4fc] hover:translate-x-1 transition-all duration-200 inline-block"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="py-6 border-t border-[rgba(255,255,255,0.08)] text-center">
                    <p className="text-[#7a7a95] text-xs">
                        © 2016–2026 IJNRD.ORG — All Rights Reserved. | ISSN: 2456-4184
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

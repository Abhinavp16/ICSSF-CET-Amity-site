const quickLinksData = [
    { icon: '📄', title: 'Submit Paper', desc: 'Submit your manuscript online', href: '#submit' },
    { icon: '✅', title: 'UGC CARE Approved', desc: 'View approvals & indexing', href: '#about' },
    { icon: '📋', title: 'Publication Guidelines', desc: 'Read submission guidelines', href: '#procedure' },
    { icon: '📢', title: 'Call for Papers', desc: 'Current issue details', href: '#call-for-papers' },
    { icon: '🔍', title: 'Track Paper Status', desc: 'Check your paper status', href: '#pricing' },
    { icon: '💰', title: 'Publication Charges', desc: 'Affordable pricing plans', href: '#pricing' },
]

const QuickLinkCard = ({ icon, title, desc, href }) => {
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -5
        const rotateY = ((x - centerX) / centerX) * 5
        e.currentTarget.style.transform = `translateY(-4px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = ''
    }

    return (
        <a
            href={href}
            className="block bg-white border border-light-border rounded-xl p-6 text-center transition-all duration-400 cursor-pointer hover:border-accent-indigo/30 hover:shadow-glow shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="text-sm font-semibold font-display mb-1 text-text-primary">{title}</h3>
            <p className="text-xs text-text-muted">{desc}</p>
        </a>
    )
}

const QuickLinks = () => {
    return (
        <section className="relative z-10 pt-8 pb-20 bg-light-bg">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {quickLinksData.map((item) => (
                        <QuickLinkCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QuickLinks

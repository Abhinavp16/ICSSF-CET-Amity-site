import StatCounter from './StatCounter'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-32 bg-light-bg -mt-[72px]" id="home">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Orbs — softer, lighter */}
                <div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-50 -top-[100px] -right-[100px]"
                    style={{ background: 'rgba(99, 102, 241, 0.12)', animation: 'orbFloat1 20s ease-in-out infinite' }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-50 -bottom-[100px] -left-[100px]"
                    style={{ background: 'rgba(168, 85, 247, 0.1)', animation: 'orbFloat2 25s ease-in-out infinite' }}
                />
                <div
                    className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-50 top-[40%] left-1/2"
                    style={{ background: 'rgba(59, 130, 246, 0.08)', animation: 'orbFloat3 15s ease-in-out infinite' }}
                />
                {/* Grid */}
                <div className="absolute inset-0 hero-grid-pattern" />
            </div>

            {/* Content */}
            <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
                {/* Badge */}
                <div className="hero-fade-in inline-flex items-center gap-2 px-5 py-2 bg-accent-indigo/8 border border-accent-indigo/15 rounded-full text-sm font-medium text-accent-indigo mb-8" style={{ animationDelay: '0.1s' }}>
                    <span
                        className="w-2 h-2 bg-accent-green rounded-full"
                        style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
                    />
                    Hybrid Mode · Amity University · 2026
                </div>

                {/* Title */}
                <h1 className="hero-fade-in font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 text-text-primary max-w-[900px] mx-auto" style={{ animationDelay: '0.25s' }}>
                    International Conference on <br className="hidden md:block" />
                    <span className="gradient-text font-extrabold">Sustainable Solutions for the Future:</span>
                    <br />
                    <span className="text-2xl md:text-3xl lg:text-4xl text-text-secondary font-semibold mt-2 block">
                        Connecting Environment and Technology
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="hero-fade-in text-base md:text-lg text-text-secondary max-w-[700px] mx-auto mb-10 leading-relaxed font-medium" style={{ animationDelay: '0.4s' }}>
                    Join leading researchers, scientists, and industry experts to explore innovative strategies for sustainable development and environmental stewardship.
                </p>

                {/* Stats */}
                <div className="hero-fade-in flex items-center justify-center gap-6 sm:gap-10 mb-12 flex-wrap" style={{ animationDelay: '0.55s' }}>
                    <StatCounter target={8.76} label="Impact Factor" isDecimal />
                    <div className="w-px h-12 bg-light-border hidden sm:block" />
                    <StatCounter target={2456} label="ISSN: 2456-4184" />
                    <div className="w-px h-12 bg-light-border hidden sm:block" />
                    <StatCounter target={2016} label="Established" />
                </div>

                {/* Actions */}
                <div className="hero-fade-in flex items-center justify-center gap-4 flex-wrap" style={{ animationDelay: '0.7s' }}>
                    <a
                        href="#submit"
                        className="inline-flex items-center gap-2 px-7 py-3.5 btn-gradient text-white font-semibold text-[0.95rem] rounded-lg transition-all duration-300"
                    >
                        <span>Submit Paper</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a
                        href="#call-for-papers"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-text-primary font-semibold text-[0.95rem] rounded-lg border border-light-border hover:border-light-border-hover hover:bg-light-card-hover hover:-translate-y-0.5 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                    >
                        <span>Call for Papers</span>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-muted" style={{ animationDelay: '0.9s' }}>
                <div className="w-6 h-[38px] border-2 border-text-muted rounded-xl flex justify-center pt-1.5">
                    <div
                        className="w-[3px] h-2 bg-text-muted rounded-sm"
                        style={{ animation: 'scrollWheel 2s ease-in-out infinite' }}
                    />
                </div>
                <span className="text-xs uppercase tracking-[2px]">Scroll to explore</span>
            </div>
        </section>
    )
}

export default Hero

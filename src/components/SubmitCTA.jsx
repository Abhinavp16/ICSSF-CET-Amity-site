const SubmitCTA = () => {
    return (
        <section className="py-20 bg-white" id="submit">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="animate-on-scroll text-center py-16 lg:py-20 px-8 lg:px-12 bg-gradient-to-br from-accent-indigo/5 via-accent-purple/5 to-accent-indigo/5 border border-light-border rounded-3xl relative overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    {/* Radial glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_70%)] pointer-events-none" />

                    <h2 className="relative font-display text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-4 text-text-primary">
                        Ready to Publish Your Research?
                    </h2>
                    <p className="relative text-text-secondary max-w-[560px] mx-auto mb-10 text-base leading-relaxed">
                        Submit your paper today and get published within 1-2 days with transparent peer review, Crossref DOI, and global indexing.
                    </p>

                    <div className="relative flex items-center justify-center gap-4 flex-wrap">
                        <a
                            href="https://www.ijnrd.org/submitpaper.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-9 py-4 btn-gradient text-white font-semibold rounded-lg transition-all duration-300"
                        >
                            <span>Submit Paper Online</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                        <a
                            href="https://www.ijnrd.org/track.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-9 py-4 bg-white text-text-primary font-semibold rounded-lg border border-light-border hover:border-light-border-hover hover:bg-light-card-hover hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                        >
                            <span>Track Your Paper</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubmitCTA

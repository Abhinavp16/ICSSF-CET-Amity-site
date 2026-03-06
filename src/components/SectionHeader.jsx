const SectionHeader = ({ tag, title, titleHighlight, description }) => {
    return (
        <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-1.5 bg-accent-indigo/8 border border-accent-indigo/15 rounded-full text-xs font-semibold text-accent-indigo uppercase tracking-wider mb-5">
                {tag}
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4 text-text-primary">
                {title} <span className="gradient-text">{titleHighlight}</span>
            </h2>
            <p className="text-base text-text-secondary max-w-[600px] mx-auto">{description}</p>
        </div>
    )
}

export default SectionHeader

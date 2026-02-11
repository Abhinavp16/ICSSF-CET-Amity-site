import SectionHeader from './SectionHeader'

const steps = [
    {
        number: '01',
        icon: '📤',
        title: 'Submit Paper Online',
        desc: 'Download the IJNRD paper format and submit your manuscript through the Submit Paper portal for seamless journal publication.',
        links: [
            { label: 'Sample Paper Format ↓', href: '#' },
            { label: 'Submit Paper →', href: '#submit' },
        ],
    },
    {
        number: '02',
        icon: '🔍',
        title: 'Peer Review Process',
        desc: 'Your paper undergoes a transparent peer review process. Authors are notified of acceptance or rejection via email and SMS.',
        links: [{ label: 'Check Paper Status →', href: '#' }],
    },
    {
        number: '03',
        icon: '💳',
        title: 'Pay Fees Online',
        desc: 'Pay the low-cost publication fee, then download and complete the Undertaking Form available in your Author Track section.',
        links: [
            { label: 'View Charges →', href: '#pricing' },
            { label: 'Pay Fees Online →', href: '#' },
        ],
    },
    {
        number: '04',
        icon: '🎉',
        title: 'Paper Published',
        desc: 'After submitting documents, your paper is published promptly. Download the publication certificate and confirmation letter from your account.',
        links: [{ label: 'Download Certificate →', href: '#' }],
    },
]

const StepCard = ({ step }) => {
    return (
        <div className="animate-on-scroll flex-1 p-7 bg-white border border-light-border rounded-2xl transition-all duration-400 hover:border-accent-indigo/30 hover:-translate-y-2 hover:shadow-glow group shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
            <div className="font-display text-5xl font-extrabold gradient-text opacity-30 leading-none mb-4 transition-opacity group-hover:opacity-60">
                {step.number}
            </div>
            <div className="text-3xl mb-4">{step.icon}</div>
            <h3 className="font-display text-lg font-bold mb-3 tracking-tight text-text-primary">{step.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">{step.desc}</p>
            <div className="flex flex-col gap-2">
                {step.links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-xs text-accent-indigo font-medium hover:text-accent-lavender transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    )
}

const StepConnector = () => (
    <div className="hidden lg:flex w-10 shrink-0 items-center justify-center relative">
        <div className="w-full h-0.5 bg-gradient-to-r from-accent-indigo/30 to-accent-purple/30 rounded-sm" />
        <span className="absolute text-text-muted text-sm bg-light-bg px-1">→</span>
    </div>
)

const MobileConnector = () => (
    <div className="flex lg:hidden items-center justify-center h-8">
        <div className="w-0.5 h-full bg-gradient-to-b from-accent-indigo/30 to-accent-purple/30 rounded-sm" />
    </div>
)

const Procedure = () => {
    return (
        <section className="py-24 lg:py-30 bg-light-bg" id="procedure">
            <div className="max-w-[1200px] mx-auto px-6">
                <SectionHeader
                    tag="How It Works"
                    title="Publication"
                    titleHighlight="Procedure"
                    description="Publish your research paper in just 4 simple steps"
                />

                {/* Desktop: horizontal layout */}
                <div className="hidden lg:flex items-stretch">
                    {steps.map((step, i) => (
                        <div key={step.number} className="contents">
                            <StepCard step={step} />
                            {i < steps.length - 1 && <StepConnector />}
                        </div>
                    ))}
                </div>

                {/* Mobile: vertical layout */}
                <div className="flex lg:hidden flex-col">
                    {steps.map((step, i) => (
                        <div key={step.number}>
                            <StepCard step={step} />
                            {i < steps.length - 1 && <MobileConnector />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Procedure

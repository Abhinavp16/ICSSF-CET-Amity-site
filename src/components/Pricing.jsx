import SectionHeader from './SectionHeader'

const Pricing = () => {
    const plans = [
        {
            title: 'Students',
            price: '₹750',
            desc: 'Undergraduate and Postgraduate students',
            features: ['Conference Kit', 'Lunch & Refreshments', 'Certificate of Participation', 'Access to all sessions'],
            highlight: false,
        },
        {
            title: 'Research Scholars',
            price: '₹1000',
            desc: 'PhD Scholars and Researchers',
            features: ['Conference Kit', 'Lunch & Refreshments', 'Certificate of Presentation', 'Publication Opportunity'],
            highlight: true,
        },
        {
            title: 'Faculty',
            price: '₹1200',
            desc: 'Academic Faculty Members',
            features: ['Conference Kit', 'Networking Session', 'Certificate of Presentation', 'Publication Opportunity'],
            highlight: false,
        },
        {
            title: 'Industry Expert',
            price: '₹2500',
            desc: 'Professionals from Industry',
            features: ['Conference Kit', 'Networking Session', 'Certificate of Participation', 'Panel Discussion Access'],
            highlight: false,
        },
    ]

    return (
        <section className="py-24 bg-white" id="registration">
            <div className="max-w-[1200px] mx-auto px-6">
                <SectionHeader
                    tag="Registration"
                    title="Conference Fees"
                    titleHighlight="Select Your Category"
                    description="Join us for an insightful experience. Early registration is recommended."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-3xl border transition-all duration-300 relative group ${plan.highlight
                                ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-transparent shadow-xl scale-105 z-10'
                                : 'bg-white border-light-border hover:border-accent-indigo/30 hover:shadow-lg hover:-translate-y-2'
                                }`}
                        >
                            <h3 className={`text-lg font-bold font-display mb-2 ${plan.highlight ? 'text-indigo-100' : 'text-text-primary'}`}>{plan.title}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-text-primary'}`}>{plan.price}</span>
                            </div>
                            <p className={`text-sm mb-6 ${plan.highlight ? 'text-indigo-200' : 'text-text-muted'}`}>{plan.desc}</p>

                            <ul className="space-y-3 mb-8 text-sm">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-accent-green' : 'bg-accent-indigo'}`}></span>
                                        <span className={plan.highlight ? 'text-indigo-50' : 'text-text-secondary'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.highlight
                                ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg'
                                : 'bg-light-bg text-text-primary border border-light-border hover:bg-accent-indigo hover:text-white hover:border-transparent'
                                }`}>
                                Register Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Awards Fee Box */}
                <div className="mt-16 max-w-[600px] mx-auto bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-8 text-center animate-on-scroll">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">🏆 Awards Nomination</h3>
                    <p className="text-amber-700 mb-4">Nominate your research for excellence awards.</p>
                    <div className="text-3xl font-extrabold text-amber-600 mb-6">₹500 <span className="text-base font-normal text-amber-800/60">/ Nomination</span></div>
                    <button className="px-8 py-2.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors shadow-md">
                        Submit Nomination
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Pricing

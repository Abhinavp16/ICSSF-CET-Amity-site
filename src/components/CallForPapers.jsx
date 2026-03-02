import SectionHeader from './SectionHeader'

const scopeTopics = [
    'Advanced clean, renewable, and sustainable energy systems',
    'Climate change mitigation, adaptation, and resilience strategies',
    'Smart, green, and sustainable cities and urban infrastructure',
    'Green computing, artificial intelligence, and data analytics for sustainability',
    'Environmental sensing, monitoring, and computational modeling',
    'Circular economy approaches, waste management, and resource efficiency',
    'E-mobility, smart transportation, and low-carbon mobility solutions',
    'Biodiversity conservation, ecosystem and wetland restoration technologies',
    'Environmental governance, policy frameworks, and global climate agreements',
    'Disaster risk reduction, early warning systems, and climate-risk technologies',
    'Sustainable management of water, air, and land resources',
    'Digital twins, IoT, machine learning, and emerging tools for climate research',
    'Environment–human health interactions, including epigenetics',
    'Advanced materials for sustainability, including nanomaterials and quantum dots',
    'Green jobs, carbon credits, environmental auditing, Indian Knowledge Systems, and sustainability certifications (ISO)'
]

const activities = [
    { title: 'Keynote Sessions', desc: 'By national and international experts' },
    { title: 'Technical Paper Presentations', desc: 'Showcase of research and innovation' },
    { title: 'Poster Competition', desc: 'Visual presentation of sustainable ideas' }
]

const targetParticipants = [
    'National & International Researchers',
    'University Faculty Members',
    'Engineers & Technologists',
    'Environmental Scientists and Climate Experts',
    'Policy Makers & Government Officials',
    'NGOs and Sustainability Advocates',
    'Postgraduate & Doctoral Students',
    'Industry Professionals',
    'International Collaborative Partners'
]

const CallForPapers = () => {
    return (
        <section className="py-24 bg-light-bg" id="call-for-papers">
            <div className="max-w-[1200px] mx-auto px-6">
                <SectionHeader
                    tag="Submissions"
                    title="Call for Papers"
                    titleHighlight="Scope & Topics"
                    description="Inviting research on sustainable solutions and environmental technologies."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Scope / Topics List */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 border border-light-border shadow-sm animate-on-scroll">
                            <h3 className="text-xl font-bold font-display text-text-primary mb-6 flex items-center gap-3">
                                <span className="w-1 h-6 bg-accent-indigo rounded-full"></span>
                                Scope of the Conference
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {scopeTopics.map((topic, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                                        <span className="text-accent-indigo mt-1 text-xs">●</span>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Target Participants */}
                        <div className="mt-8 bg-white rounded-2xl p-8 border border-light-border shadow-sm animate-on-scroll">
                            <h3 className="text-xl font-bold font-display text-text-primary mb-6 flex items-center gap-3">
                                <span className="w-1 h-6 bg-accent-green rounded-full"></span>
                                Target Participants
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {targetParticipants.map((participant, index) => (
                                    <span key={index} className="px-4 py-2 bg-light-bg rounded-lg text-sm text-text-secondary font-medium border border-transparent hover:border-accent-green/30 transition-colors cursor-default">
                                        {participant}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar: Activities */}
                    <div className="space-y-6 lg:col-span-1 animate-on-scroll">
                        {/* Activities Card */}
                        <div className="bg-white rounded-2xl p-6 border border-light-border shadow-sm">
                            <h3 className="text-lg font-bold font-display text-text-primary mb-4">Proposed Activities</h3>
                            <div className="space-y-4">
                                {activities.map((activity, index) => (
                                    <div key={index} className="p-4 bg-light-bg rounded-xl border border-light-border hover:border-accent-indigo/30 transition-colors">
                                        <h4 className="font-bold text-text-primary mb-1">{activity.title}</h4>
                                        <p className="text-xs text-text-muted">{activity.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Deadlines Placeholder */}
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-white/20 transition-colors duration-500"></div>

                            <h3 className="text-xl font-bold font-display mb-2 relative z-10">Important Dates</h3>
                            <p className="text-indigo-100 text-sm mb-6 relative z-10">Mark these dates on your calendar.</p>

                            <div className="space-y-4 relative z-10">
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span className="text-sm font-medium text-indigo-100">Abstract Submission</span>
                                    <span className="text-sm font-bold">TBA</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span className="text-sm font-medium text-indigo-100">Full Paper</span>
                                    <span className="text-sm font-bold">TBA</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-indigo-100">Conference Date</span>
                                    <span className="text-sm font-bold text-amber-300">2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallForPapers

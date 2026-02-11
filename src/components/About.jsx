import SectionHeader from './SectionHeader'

const objectives = [
    { icon: '☀️', title: 'Renewable Energy & Clean Tech', desc: 'Promote research and innovation in renewable energy and clean technologies.' },
    { icon: '🏙️', title: 'Sustainable Urban Systems', desc: 'Encourage development of climate-resilient cities through engineering solutions.' },
    { icon: '⚠️', title: 'Climate Action & Modeling', desc: 'Strengthen climate action through predictive analytics and environmental modeling.' },
    { icon: '📈', title: 'Interdisciplinary Research', desc: 'Enhance research by integrating environment science, engineering, and computing.' },
    { icon: '🤝', title: 'Global Partnerships', desc: 'Promote global partnerships in sustainability research with academia and industry.' },
    { icon: '♻️', title: 'Pollution Reduction', desc: 'Highlight technological innovations for pollution reduction and resource optimization.' },
    { icon: '🤖', title: 'AI & Big Data', desc: 'Explore the role of AI, ML, IoT, and big data in environmental challenges.' },
    { icon: '❤️', title: 'Health & Environment', desc: 'Discuss health and environmental interlinkages through climate-smart technologies.' },
]

const About = () => {
    return (
        <section className="py-24 bg-white" id="about">
            <div className="max-w-[1200px] mx-auto px-6">
                <SectionHeader
                    tag="Introduction"
                    title="About the Conference"
                    titleHighlight="ICSSF-CET 2026"
                    description="Connecting Environment and Technology for a Sustainable Future"
                />

                {/* Introduction Text */}
                <div className="mb-20 animate-on-scroll space-y-6 text-text-secondary text-lg leading-relaxed text-justify">
                    <p>
                        The accelerating challenges posed by climate change, environmental degradation, unsustainable urban growth, and increasing energy demands have created an urgent need for innovative, technology-driven solutions. At the same time, rapid advancements in engineering, computational sciences, artificial intelligence, and digital technologies offer unprecedented opportunities to address these global issues effectively.
                    </p>
                    <p>
                        Recognizing the critical intersection of environment, climate science, and technology, the <strong className="text-text-primary">Amity School of Engineering and Technology</strong>, in collaboration with the <strong className="text-text-primary">Centre of Excellence on Climate, Energy, and Environment</strong>, proposes to organize this international conference.
                    </p>
                    <p>
                        The conference aligns with the <strong className="text-accent-indigo">UN Sustainable Development Goals</strong> by promoting clean and efficient energy solutions (SDG 7), advancing smart and resilient urban development (SDG 11), supporting climate action through technology-driven strategies (SDG 13), and fostering global collaboration (SDG 17).
                    </p>
                    <p>
                        By integrating these SDGs into the conference framework, the event aims to bring together global experts, researchers, industry leaders, and students to exchange insights, discuss emerging challenges, and explore transformative solutions that contribute toward a more sustainable and resilient future.
                    </p>
                </div>

                {/* Objectives Grid */}
                <div>
                    <h3 className="text-2xl font-bold font-display text-text-primary mb-10 text-center animate-on-scroll">Conference Objectives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
                        {objectives.map((obj, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 p-6 bg-light-bg border border-light-border rounded-xl transition-all duration-300 hover:border-accent-indigo/30 hover:-translate-y-1 hover:shadow-lg group"
                            >
                                <div className="text-3xl shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {obj.icon}
                                </div>
                                <div>
                                    <h4 className="text-base font-bold font-display mb-2 text-text-primary">{obj.title}</h4>
                                    <p className="text-sm text-text-muted leading-relaxed">{obj.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expected Outcomes */}
                <div className="mt-20 p-8 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl animate-on-scroll">
                    <h3 className="text-2xl font-bold font-display text-text-primary mb-6">Expected Outcomes</h3>
                    <ul className="space-y-4">
                        {[
                            'Creation of a multidisciplinary knowledge-sharing platform',
                            'Identification of research gaps and new project proposals',
                            'Generation of innovative prototypes, models, or algorithms for sustainability',
                            'Improved understanding of climate-health interactions',
                            'Networking opportunities with experts across industry and academia'
                        ].map((outcome, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-secondary">
                                <span className="text-accent-indigo mt-1">✓</span>
                                {outcome}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About

import React from 'react';
import SectionHeader from './SectionHeader';

// SVG Icons for a more professional look
const Icons = {
    Energy: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
    ),
    City: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
    ),
    Climate: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
    ),
    Research: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    ),
    Partnership: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
    ),
    Pollution: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
    ),
    AI: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12h1.5m1.5 6.75l1.5-1.5M17.25 17.25l-1.5-1.5m.75-9.75h1.5m1.5 0h1.5M21 12h-1.5m-3 0h-3.75M16.5 16.5l-1.5-1.5M6 16.5l-1.5-1.5M12 6.75a2.25 2.25 0 00-2.25 2.25v6a2.25 2.25 0 002.25 2.25 2.25 2.25 0 002.25-2.25v-6a2.25 2.25 0 00-2.25-2.25z" />
        </svg>
    ),
    Health: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    )
};

const objectives = [
    { icon: <Icons.Energy />, title: 'Renewable Energy & Clean Tech', desc: 'Advancing research in renewable energy systems and clean technologies.' },
    { icon: <Icons.City />, title: 'Sustainable Urban Systems', desc: 'Developing climate-resilient cities through smart engineering solutions.' },
    { icon: <Icons.Climate />, title: 'Climate Action & Modeling', desc: 'Utilizing predictive analytics and modeling for effective climate action.' },
    { icon: <Icons.Research />, title: 'Interdisciplinary Research', desc: 'Bridging environmental science with advanced computing and engineering.' },
    { icon: <Icons.Partnership />, title: 'Global Partnerships', desc: 'Fostering international collaboration in sustainability research.' },
    { icon: <Icons.Pollution />, title: 'Pollution Reduction', desc: 'Highlighting innovations for pollution control and resource optimization.' },
    { icon: <Icons.AI />, title: 'AI & Big Data', desc: 'Leveraging AI, IoT, and Big Data to solve environmental challenges.' },
    { icon: <Icons.Health />, title: 'Health & Environment', desc: 'Exploring the nexus between environmental health and technology.' },
];

const About = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-indigo-50/20" id="about">
            <div className="max-w-[1200px] mx-auto px-6">
                <SectionHeader
                    tag="Introduction"
                    title="About the Conference"
                    titleHighlight="ICSSF-CET 2026"
                    description="Connecting Environment and Technology for a Sustainable Future"
                />

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row gap-12 mb-20">
                    {/* Left Column: The Narrative */}
                    <div className="lg:w-1/2 space-y-6 animate-on-scroll">
                        <div className="prose prose-lg text-text-secondary leading-relaxed text-justify">
                            <p className="font-medium text-text-primary text-xl border-l-4 border-accent-indigo pl-4 mb-6">
                                The accelerating challenges posed by climate change, environmental degradation, and urbanization have created an urgent need for innovative, technology-driven solutions.
                            </p>
                            <p>
                                Rapid advancements in engineering, computational sciences, and digital technologies offer unprecedented opportunities to address these global issues effectively.
                            </p>
                            <p>
                                Recognizing this critical intersection, the <strong className="text-text-primary">Amity School of Engineering and Technology</strong>, in collaboration with the <strong className="text-text-primary">Centre of Excellence on Climate, Energy, and Environment</strong>, is proud to organize this international conference.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Key Goals Box */}
                    <div className="lg:w-1/2 animate-on-scroll delay-100">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100 h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-indigo/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                            <h3 className="text-2xl font-bold font-display text-text-primary mb-6 relative z-10">
                                Driving Global Impact
                            </h3>

                            <p className="text-text-secondary mb-6 relative z-10 leading-relaxed">
                                Our conference aligns with the <strong className="text-accent-indigo">UN Sustainable Development Goals</strong> to foster clean energy (SDG 7), resilient cities (SDG 11), and climate action (SDG 13).
                            </p>

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {['Clean Energy', 'Smart Cities', 'Climate Action', 'Global Collaboration'].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-indigo-50 text-accent-indigo text-sm font-medium rounded-full border border-indigo-100">
                                        # {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Objectives Grid */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold font-display text-text-primary">Core Objectives</h3>
                        <div className="w-24 h-1 bg-accent-indigo mx-auto mt-4 rounded-full"></div>
                        <p className="max-w-2xl mx-auto mt-4 text-text-secondary">
                            Focusing on key areas to drive sustainable development and technological innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
                        {objectives.map((obj, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col p-6 bg-white rounded-2xl border border-indigo-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                                    <div className="text-accent-indigo scale-150 transform transition-transform duration-500 group-hover:rotate-12">
                                        {obj.icon}
                                    </div>
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center bg-indigo-50/50 text-accent-indigo rounded-xl mb-6 group-hover:bg-accent-indigo group-hover:text-white transition-all duration-300 shadow-sm border border-indigo-100/50">
                                    {obj.icon}
                                </div>

                                <h4 className="text-lg font-bold font-display text-text-primary mb-3 group-hover:text-accent-indigo transition-colors">
                                    {obj.title}
                                </h4>

                                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                    {obj.desc}
                                </p>

                                <div className="mt-auto pt-4 border-t border-indigo-50">
                                    <span className="text-xs font-semibold text-accent-indigo flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        Learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expected Outcomes */}
                <div className="relative rounded-3xl overflow-hidden bg-white border border-indigo-100 shadow-xl animate-on-scroll">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30"></div>
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent-indigo/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10 p-10 md:p-16">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-accent-indigo text-xs font-bold tracking-wider mb-4">
                                    IMPACT & RESULTS
                                </span>
                                <h3 className="text-3xl font-bold font-display text-text-primary mb-6">
                                    Expected Outcomes
                                </h3>
                                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                                    The conference aims to generate tangible results that contribute to the global sustainability agenda and foster long-term collaborations.
                                </p>
                                <div className="hidden md:block">
                                    <div className="w-20 h-1 bg-gradient-to-r from-accent-indigo to-accent-purple rounded-full"></div>
                                </div>
                            </div>

                            <div className="md:w-2/3 w-full">
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        'Creation of a multidisciplinary knowledge-sharing platform',
                                        'Identification of research gaps and new project proposals',
                                        'Generation of innovative prototypes, models, or algorithms',
                                        'Improved understanding of climate-health interactions',
                                        'Networking opportunities with experts across industry and academia',
                                        'Publication of high-quality research in reputed journals'
                                    ].map((outcome, i) => (
                                        <div key={i} className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-indigo-50 hover:border-accent-indigo/30 hover:shadow-md transition-all duration-300 hover:-translate-x-1">
                                            <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-text-primary group-hover:text-accent-indigo transition-colors">{outcome}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

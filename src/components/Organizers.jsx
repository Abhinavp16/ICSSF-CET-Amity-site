import SectionHeader from './SectionHeader'

const row1 = [
    { role: 'Patron-in-Chief', name: 'Dr. Ashok K. Chouhan' },
    { role: 'Patron-in-Chief', name: 'Dr. Assem Chouhan' },
    { role: 'Co-Patron-in-Chief', name: 'Dr. W. Selveamurthy' },
]

const row2 = [
    { role: 'Patron', name: 'Dr. Piyush Kant Pandey' },
    { role: 'Co-Patron', name: 'Dr. Sumita Dave' },
]

const convenors = [
    { role: 'Convenor', names: ['Dr. Vinay Kumar Singh', 'Vara Prasad Kola'] },
    { role: 'Co-Convenor', names: ['Dr. Shikha Tiwari', 'Dr. Goldi Soni', 'Ms. Nisha Rathore', 'Dr. Arunima Sur', 'Dr. Rahul Mishra'] },
]

const committees = [
    {
        title: 'Advisory Committee',
        members: ['Dr. K.S. Patel', 'Dr. Urmilla Soni', 'Dr. Prassana Kumar Sir', 'Dr. Roshan Mathew']
    },
    {
        title: 'Review & Publication Committee',
        members: ['Dr. Kranti Kumar Dewangan', 'Dr. Manjushree', 'Dr. Jyoti Singh', 'Dr. Rakesh Pandey', 'Dr. Sumit Kumar Banchhor', 'Faculties from AIB']
    },
    {
        title: 'Technical Committee',
        members: ['Dr. Sanjay Sharma', 'Dr. Jyoti Singh', 'Dr. Raj Kumar Sahu', 'Mr. Pawan Jaiswal', 'Mr. Baidhyanath Ram']
    },
    {
        title: 'Finance & Sponsorship Committee',
        members: ['Dr. Kranti Kumar Dewangan', 'Dr. Munna Dan', 'Dr. Ankit Mishra', 'Mr. Pawan Jaiswal']
    },
    {
        title: 'Registration Committee',
        members: ['Dr. Sumit Kumar Banchhor', 'Dr. Munna Dan']
    },
    {
        title: 'Logistic & Hospitality Committee',
        members: ['Mr. Harishankar', 'Dr. Ankit Mishra']
    },
    {
        title: 'Certificate Writing',
        members: ['Dr. Poonam Mishra', 'Mr. P D Patil']
    }
]

const Organizers = () => {
    return (
        <section className="py-20 bg-light-bg" id="organizers">
            <div className="max-w-[1100px] mx-auto px-6">
                <SectionHeader
                    tag="Leadership"
                    title="Organizing Committee"
                    titleHighlight="Our Team"
                    description="The dedicated team behind the conference."
                />

                {/* Patrons Section */}
                <div className="flex flex-col gap-8 mb-16">
                    {/* Row 1: 3 cards for Chief Patrons & Co-Patron-in-Chief */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {row1.map((person, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-light-border shadow-sm text-center flex flex-col items-center justify-center hover:shadow-md transition-all">
                                <h3 className="text-xs font-bold font-display text-accent-indigo uppercase tracking-widest mb-3">{person.role}</h3>
                                <div className="w-16 h-16 bg-indigo-50 rounded-full mb-3 flex items-center justify-center text-2xl">🎓</div>
                                <span className="text-lg font-bold text-text-primary">{person.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 2 cards for Patron & Co-Patron */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
                        {row2.map((person, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-light-border shadow-sm text-center flex flex-col items-center justify-center hover:shadow-md transition-all">
                                <h3 className="text-xs font-bold font-display text-accent-purple uppercase tracking-widest mb-3">{person.role}</h3>
                                <div className="w-16 h-16 bg-purple-50 rounded-full mb-3 flex items-center justify-center text-2xl">🏛️</div>
                                <span className="text-lg font-bold text-text-primary">{person.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Convenors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full mb-16">
                    {convenors.map((group, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl p-8 border border-light-border shadow-sm ${idx === 1 ? 'md:col-span-2 md:w-3/4 md:mx-auto' : 'md:col-span-2'}`}>
                            <h3 className="text-sm font-bold font-display text-accent-indigo uppercase tracking-widest mb-5 text-center">{group.role}</h3>
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                                {group.names.map((name, i) => (
                                    <span key={i} className={`font-semibold text-text-primary ${idx === 0 ? 'text-lg' : 'text-base'}`}>
                                        {name}
                                        {i < group.names.length - 1 && <span className="text-gray-300 ml-8 hidden md:inline">|</span>}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Committees Grid */}
                <h3 className="text-2xl font-bold font-display text-center mb-8 text-text-primary">Executive Committees</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {committees.map((committee, index) => (
                        <div key={index} className="bg-white p-5 rounded-xl border border-light-border hover:border-accent-indigo/30 transition-all duration-300 group">
                            <h4 className="text-sm font-bold text-accent-indigo mb-3 uppercase tracking-wide border-b border-gray-100 pb-2 truncate" title={committee.title}>{committee.title}</h4>
                            <ul className="space-y-1.5">
                                {committee.members.map((member, i) => (
                                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2 group-hover:text-text-primary transition-colors">
                                        <span className="text-gray-300 mt-1.5 text-[0.6rem]">•</span>
                                        {member}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Organizers

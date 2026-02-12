import { useState, useEffect } from 'react'

const Icons = {
    User: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    ),
    Briefcase: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
    ),
    GraduationCap: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
    ),
    Phone: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
    ),
    Mail: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    ),
    UserCircle: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
        </svg>
    )
}

const SubmitPaper = () => {
    const [formData, setFormData] = useState({
        paperTitle: '',
        abstract: '',
        keywords: '',
        file: null,
        researchType: 'Research Paper',
        researchArea: '',
        paperCountry: '',

        authorCategory: '',
        numberOfAuthors: '1',
        authors: [
            { name: '', designation: '', university: '', contact: '', email: '' }
        ],

        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        addressCountry: '',
        postalCode: '',

        agreed: false
    })

    // Update authors array when numberOfAuthors changes
    useEffect(() => {
        const count = parseInt(formData.numberOfAuthors) || 1
        setFormData(prev => {
            const currentAuthors = [...prev.authors]
            if (count > currentAuthors.length) {
                // Add more authors
                for (let i = currentAuthors.length; i < count; i++) {
                    currentAuthors.push({ name: '', designation: '', university: '', contact: '', email: '' })
                }
            } else if (count < currentAuthors.length) {
                // Remove authors
                currentAuthors.length = count
            }
            return { ...prev, authors: currentAuthors }
        })
    }, [formData.numberOfAuthors])

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (files ? files[0] : value)
        }))
    }

    const handleAuthorChange = (index, field, value) => {
        setFormData(prev => {
            const newAuthors = [...prev.authors]
            newAuthors[index] = { ...newAuthors[index], [field]: value }
            return { ...prev, authors: newAuthors }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form Submitted:', formData)
        alert('Paper submitted successfully!')
    }

    const InputGroup = ({ icon: Icon, placeholder, value, onChange, type = "text" }) => (
        <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <Icon />
            </span>
            <input
                type={type}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )

    const Label = ({ children, required }) => (
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {children}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
    )

    const SectionTitle = ({ title }) => (
        <h3 className="text-xl md:text-2xl font-normal text-text-primary mb-6 mt-8 border-b pb-2">
            {title}
        </h3>
    )

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Important Instructions */}
                <div className="mb-10">
                    <h2 className="text-xl font-medium text-red-600 mb-4">Important Instructions</h2>
                    <div className="bg-gray-100 border-l-4 border-gray-600 p-4 text-sm text-gray-700 leading-relaxed">
                        Fill all required details carefully - the certificate will be generated from this information.
                        If you face any issue submitting online, email your paper to editor@ijnrd.org with your
                        paper title, author name(s), contact number, and email ID.
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-lg shadow-sm border border-gray-200">

                    {/* Paper Details */}
                    <SectionTitle title="Paper Details" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start mb-6">
                        <div className="md:col-span-1">
                            <Label required>Paper Title</Label>
                        </div>
                        <div className="md:col-span-3">
                            <input
                                type="text"
                                name="paperTitle"
                                value={formData.paperTitle}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm placeholder-gray-400"
                                placeholder="Full Title of Your Paper."
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start mb-6">
                        <div className="md:col-span-1">
                            <Label required>Abstract</Label>
                        </div>
                        <div className="md:col-span-3">
                            <textarea
                                name="abstract"
                                rows={4}
                                value={formData.abstract}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm placeholder-gray-400"
                                placeholder="Copy your complete Abstract Here."
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-6">
                        <div className="md:col-span-1">
                            <Label>Keywords</Label>
                        </div>
                        <div className="md:col-span-3">
                            <input
                                type="text"
                                name="keywords"
                                value={formData.keywords}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm placeholder-gray-400"
                                placeholder="Keywords of your paper"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-6">
                        <div className="md:col-span-1">
                            <Label required>Upload Paper</Label>
                        </div>
                        <div className="md:col-span-3">
                            <div className="flex items-center">
                                <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-l border border-gray-300 border-r-0">
                                    Choose file
                                    <input type="file" className="hidden" name="file" onChange={handleChange} accept=".doc,.docx" />
                                </label>
                                <div className="flex-1 py-2 px-3 border border-gray-300 rounded-r bg-white text-gray-500 text-sm truncate">
                                    {formData.file ? formData.file.name : 'No file chosen'}
                                </div>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">File type: <span className="font-bold text-gray-700">.doc</span> or <span className="font-bold text-gray-700">.docx</span> only.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-6">
                        <div className="md:col-span-1">
                            <Label required>Research Type</Label>
                        </div>
                        <div className="md:col-span-3">
                            <select
                                name="researchType"
                                value={formData.researchType}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm bg-white"
                            >
                                <option>Research Paper</option>
                                <option>Review Paper</option>
                                <option>Case Study</option>
                                <option>Survey Paper</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-6">
                        <div className="md:col-span-1">
                            <Label required>Research Area</Label>
                        </div>
                        <div className="md:col-span-3">
                            <select
                                name="researchArea"
                                value={formData.researchArea}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm bg-white"
                            >
                                <option value="">(Please Select Research area)</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Management">Management</option>
                                <option value="Humanities">Humanities</option>
                                <option value="Social Sciences">Social Sciences</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-6">
                        <div className="md:col-span-1">
                            <Label required>Country</Label>
                        </div>
                        <div className="md:col-span-3">
                            <select
                                name="paperCountry"
                                value={formData.paperCountry}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm bg-white"
                            >
                                <option value="">(Select Country)</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>


                    {/* Author Details */}
                    <SectionTitle title="Author Details" />

                    <div className="mb-6 bg-gray-100 border-l-4 border-gray-600 p-4 text-sm text-gray-700 leading-relaxed">
                        <span className="font-bold">NOTE:</span> 1<sup>st</sup> author's email and mobile number must be correct.
                        Acceptance email and notifications will be sent to them.
                        If your paper/article has more than five authors, email your paper to <a href="mailto:editor@ijnrd.org" className="text-blue-600 hover:underline">editor@ijnrd.org</a> with your paper title, author name(s), contact number, and email ID.
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <Label required>Author Category</Label>
                            <select
                                name="authorCategory"
                                value={formData.authorCategory}
                                onChange={handleChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm bg-white"
                            >
                                <option value="">(Please select author category)</option>
                                <option value="Student">Student</option>
                                <option value="Professional">Professional</option>
                                <option value="Academician">Academician</option>
                            </select>
                        </div>
                        <div>
                            <Label required>No. of Authors</Label>
                            <select
                                name="numberOfAuthors"
                                value={formData.numberOfAuthors}
                                onChange={handleChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm bg-white"
                            >
                                <option value="">(Please select a number of authors)</option>
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Dynamic Authors Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                        {formData.authors.map((author, index) => {
                            const startOrdinal = (n) => {
                                const s = ["th", "st", "nd", "rd"];
                                const v = n % 100;
                                return n + (s[(v - 20) % 10] || s[v] || s[0]);
                            }
                            const ordinal = startOrdinal(index + 1);

                            return (
                                <div key={index} className="space-y-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Icons.UserCircle />
                                        <h4 className="font-medium text-lg">Author {index + 1}</h4>
                                    </div>

                                    <InputGroup
                                        icon={Icons.User}
                                        placeholder={`${ordinal} Author - Name`}
                                        value={author.name}
                                        onChange={(e) => handleAuthorChange(index, 'name', e.target.value)}
                                    />
                                    <InputGroup
                                        icon={Icons.Briefcase}
                                        placeholder={`${ordinal} Author - Designation`}
                                        value={author.designation}
                                        onChange={(e) => handleAuthorChange(index, 'designation', e.target.value)}
                                    />
                                    <InputGroup
                                        icon={Icons.GraduationCap}
                                        placeholder={`${ordinal} Author - University/Org`}
                                        value={author.university}
                                        onChange={(e) => handleAuthorChange(index, 'university', e.target.value)}
                                    />
                                    <InputGroup
                                        icon={Icons.Phone}
                                        placeholder={`${ordinal} Author - Contact Number`}
                                        value={author.contact}
                                        onChange={(e) => handleAuthorChange(index, 'contact', e.target.value)}
                                        type="tel"
                                    />
                                    <InputGroup
                                        icon={Icons.Mail}
                                        placeholder={`${ordinal} Author - Email ID`}
                                        value={author.email}
                                        onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
                                        type="email"
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/* Address of Communication */}
                    <SectionTitle title="Address of Communication" />

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                            <div className="md:col-span-1">
                                <Label required>Address Line 1</Label>
                            </div>
                            <div className="md:col-span-3">
                                <input
                                    type="text"
                                    name="addressLine1"
                                    value={formData.addressLine1}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                            <div className="md:col-span-1">
                                <Label>Address Line 2</Label>
                            </div>
                            <div className="md:col-span-3">
                                <input
                                    type="text"
                                    name="addressLine2"
                                    value={formData.addressLine2}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                            <div className="md:col-span-1">
                                <Label required>City/District</Label>
                            </div>
                            <div className="md:col-span-3">
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                            <div className="md:col-span-1">
                                <Label required>State</Label>
                            </div>
                            <div className="md:col-span-3">
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                            <div className="md:col-span-1">
                                <Label required>Country</Label>
                            </div>
                            <div className="md:col-span-3">
                                <select
                                    name="addressCountry"
                                    value={formData.addressCountry}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm bg-white"
                                >
                                    <option value="">(Select Country)</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                            <div className="md:col-span-1">
                                <Label required>Postal Code</Label>
                            </div>
                            <div className="md:col-span-3">
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-indigo focus:border-accent-indigo sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Terms & Submit */}
                    <div className="mt-10 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-center mb-8">
                            <input
                                id="agreed"
                                name="agreed"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-accent-indigo focus:ring-accent-indigo border-gray-300 rounded"
                                onChange={handleChange}
                                checked={formData.agreed}
                            />
                            <label htmlFor="agreed" className="ml-2 block text-sm text-gray-900">
                                Agree with <a href="#" className="text-red-500 hover:text-red-700">Terms and Conditions *</a>
                            </label>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 uppercase tracking-wider"
                            >
                                Submit Paper
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SubmitPaper

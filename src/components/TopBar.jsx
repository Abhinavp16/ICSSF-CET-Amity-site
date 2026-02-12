import { useState, useEffect } from 'react'

const TopBar = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })
    }

    return (
        <div className="bg-white text-sm hidden lg:block font-sans relative z-50">
            {/* Main container */}
            <div className="max-w-[1400px] mx-auto px-6 py-4">
                <div className="flex justify-between items-center gap-4">
                    {/* Left: Logo/Title Section modeled after IJSR */}
                    <div className="flex items-center gap-6">
                        {/* Logo Placeholder - Circular Badge */}
                        <div className="w-24 h-24 shrink-0 relative">
                            {/* Outer text ring simulated border */}
                            <div className="w-full h-full rounded-full border-[3px] border-indigo-100 flex items-center justify-center bg-white shadow-lg relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white"></div>
                                {/* Globe Icon Center */}
                                <div className="relative z-10 text-4xl transform group-hover:scale-110 transition-transform duration-500">
                                    🌍
                                </div>
                                {/* Circular text simulation */}
                                <svg className="absolute w-full h-full animate-[spin_20s_linear_infinite] opacity-30" viewBox="0 0 100 100">
                                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text className="text-[10px] uppercase font-bold fill-indigo-800">
                                        <textPath href="#circlePath">International Conference • ICSSF-CET 2026 •</textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Text Info */}
                        <div className="flex flex-col items-start">
                            {/* Big Acronym Box */}
                            <div className="bg-[#1e40af] text-white text-2xl font-extrabold px-4 py-1 mb-2 tracking-widest shadow-sm rounded-sm">
                                ICSSF-CET 2026
                            </div>
                            <h1 className="text-lg font-bold text-gray-900 tracking-tight uppercase border-b-[3px] border-gray-800 w-fit mb-2 pb-1 leading-tight max-w-[600px]">
                                International Conference on Sustainable Solutions for the Future: Connecting Environment & Technology
                            </h1>
                            {/* Stats Grid */}
                            <div className="text-xs font-bold text-gray-600 space-y-1 tracking-wide">
                                <p className="flex items-center gap-3">
                                    <span>Organized by Amity University Chhattisgarh</span>
                                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>Hybrid Mode</span>
                                </p>
                                <p className="text-gray-500 font-semibold uppercase">Environment · Technology · Sustainability</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact/Time Section */}
                    <div className="flex flex-col gap-2.5 items-start pl-8 border-l-2 border-gray-100 min-w-[280px]">
                        <div className="flex items-center gap-3 text-gray-700 font-semibold text-xs">
                            <span className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm">📅</span>
                            <span>{formatDate(currentTime)}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700 font-semibold text-xs">
                            <span className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm">⏰</span>
                            <span>{currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</span>
                        </div>
                        <a href="mailto:info@icssfcet.com" className="flex items-center gap-3 text-gray-700 hover:text-[#1e40af] transition-colors font-semibold text-xs group">
                            <span className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center text-sm">✉️</span>
                            <span>info@icssfcet.com</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#1e40af] transition-colors font-semibold text-xs group">
                            <span className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center text-sm">📞</span>
                            <span>+91 94294*****</span>
                        </a>
                        <div className="flex items-center gap-2 text-[#1e40af] font-bold text-xs mt-1 bg-indigo-50 px-3 py-1.5 rounded-full">
                            <span>📖</span>
                            <span>Conference open twice in year June and December</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Colored strip at bottom matching the reference */}
            <div className="h-1.5 w-full bg-amber-500"></div>
        </div>
    )
}

export default TopBar

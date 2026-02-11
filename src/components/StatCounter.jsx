import { useEffect, useRef, useState } from 'react'

const StatCounter = ({ target, label, isDecimal = false }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true
                        const duration = 2000
                        const start = performance.now()

                        const animate = (currentTime) => {
                            const elapsed = currentTime - start
                            const progress = Math.min(elapsed / duration, 1)
                            const easeOut = 1 - Math.pow(1 - progress, 3)
                            const current = target * easeOut

                            setCount(current)

                            if (progress < 1) {
                                requestAnimationFrame(animate)
                            }
                        }

                        requestAnimationFrame(animate)
                    }
                })
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [target])

    const displayValue = isDecimal ? count.toFixed(2) : Math.floor(count).toLocaleString()

    return (
        <div className="text-center" ref={ref}>
            <span className="block font-display text-[2.2rem] sm:text-4xl font-bold gradient-text leading-tight">
                {displayValue}
            </span>
            <span className="text-xs text-text-muted uppercase tracking-wider font-medium">{label}</span>
        </div>
    )
}

export default StatCounter

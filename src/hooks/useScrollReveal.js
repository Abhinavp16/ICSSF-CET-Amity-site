import { useEffect } from 'react'

const useScrollReveal = () => {
    useEffect(() => {
        // Small delay to ensure DOM is fully painted
        const timeout = setTimeout(() => {
            const observerOptions = {
                threshold: 0.05,
                rootMargin: '0px 0px -40px 0px',
            }

            const scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll')
                        const siblingIndex = Array.from(siblings).indexOf(entry.target)

                        setTimeout(() => {
                            entry.target.classList.add('visible')
                        }, siblingIndex * 120)

                        scrollObserver.unobserve(entry.target)
                    }
                })
            }, observerOptions)

            const elements = document.querySelectorAll('.animate-on-scroll')
            elements.forEach((el) => scrollObserver.observe(el))

            // Fallback: after 1.5s, force-show any elements still hidden that are in viewport
            const fallbackTimeout = setTimeout(() => {
                elements.forEach((el) => {
                    if (!el.classList.contains('visible')) {
                        const rect = el.getBoundingClientRect()
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            el.classList.add('visible')
                        }
                    }
                })
            }, 1500)

            return () => {
                clearTimeout(fallbackTimeout)
                elements.forEach((el) => scrollObserver.unobserve(el))
            }
        }, 100)

        return () => clearTimeout(timeout)
    }, [])
}

export default useScrollReveal

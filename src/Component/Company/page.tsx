'use client'

import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '../lib/utils'

const LOGOS = [
    './brand/accurate.png',
    './brand/Cbond.png',
    './brand/Mittal_Steel_Company_logo.svg',
    './brand/dahoo.png',
    './brand/dendrite.png',
    './brand/fixwell.png',
    './brand/karigar.png',
    './brand/link.png',
    './brand/marigold.png',
    './brand/nerofix.png',
    './brand/norton.png',
    './brand/samrat.png',
    './brand/suriepolex.png',
    './brand/thunderbolt.png'
];

function splitArray<T>(array: Array<T>, numParts: number) {
    const result: Array<Array<T>> = []

    for (let i = 0; i < array.length; i++) {
        const index = i % numParts
        if (!result[index]) {
            result[index] = []
        }
        result[index].push(array[i])
    }

    return result
}

function ReviewRow({
    logos,
    className,
    logoClassName,
    msPerPixel = 0,
}: {
    logos: string[]
    className?: string
    logoClassName?: (logoIndex: number) => string
    msPerPixel?: number
}) {
    const rowRef = useRef<HTMLDivElement | null>(null)
    const [rowWidth, setRowWidth] = useState(0)
    const duration = `${rowWidth * msPerPixel}ms`

    useEffect(() => {
        if (!rowRef.current) return

        const resizeObserver = new window.ResizeObserver(() => {
            setRowWidth(rowRef.current?.offsetWidth ?? 0)
        })

        resizeObserver.observe(rowRef.current)

        return () => {
            resizeObserver.disconnect()
        }
    }, [])

    return (
        <div
            ref={rowRef}
            className={cn('flex animate-marquee-horizontal gap-8 sm:gap-10 md:gap-12 py-2 sm:py-2 md:py-1', className)}
            style={{ '--marquee-duration': duration } as React.CSSProperties}
        >
            {logos.concat(logos).map((imgSrc, index) => (
                <div
                    key={index}
                    // Make logos slightly larger
                    className={cn(
                        'animate-fade-in opacity-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-56 lg:h-56 flex-shrink-0', // CHANGED
                        logoClassName?.(index % logos.length)
                    )}
                    style={{
                        animationDelay: `${(index % 6) * 0.1}s`,
                    }}
                >
                    <img src={imgSrc} alt={`Logo ${index}`} className="w-full h-full object-contain" />
                </div>
            ))}
        </div>
    )
}

function ReviewGrid() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.3 })
    const [row1, row2] = splitArray(LOGOS, 2)

    return (
        <div
    ref={containerRef}
    className="relative space-y-1 sm:space-y-1.5 md:space-y-2 overflow-hidden h-[15rem] sm:h-[17rem] md:h-[20rem] lg:h-[34rem] max-w-full mx-auto"
>

            {isInView && (
                <>
                    <ReviewRow logos={row1} msPerPixel={10} />
                    <ReviewRow logos={row2} msPerPixel={15} className="animate-marquee-horizontal-reverse" />
                </>
            )}
        </div>
    )
}

const Framework = () => {
    return (
        <div className="relative mx-auto bg-slate-50 px-4 py-1 sm:px-6 lg:px-8 mt-20 sm:mt-24 md:mt-8 lg:mt-0">
            <ReviewGrid />
        </div>
    )
}

export default Framework
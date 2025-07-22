'use client'

import { HTMLAttributes, useEffect, useRef, useState } from 'react'
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

function LogoRow({
    logos,
    className,
    msPerPixel = 30,
}: {
    logos: string[]
    className?: string
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
        <div className="overflow-hidden">
            <div
                ref={rowRef}
                className={cn(
                    'flex animate-marquee-horizontal gap-8 sm:gap-10 md:gap-12 lg:gap-16 py-4 sm:py-6 md:py-8',
                    className
                )}
                style={{ '--marquee-duration': duration } as React.CSSProperties}
            >
                {/* Double the logos for seamless scrolling */}
                {logos.concat(logos).map((imgSrc, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center p-2 sm:p-3"
                    >
                        <img 
                            src={imgSrc} 
                            alt={`Partner logo ${(index % logos.length) + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

const Framework = () => {
    return (
        <div className="w-full">
            <div className="mx-2 sm:mx-4 lg:mx-2">
                {/* Logo showcase */}
                <LogoRow logos={LOGOS} />
            </div>
        </div>
    )
}

export default Framework
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollBehavior({
    children,
}: {
    children: React.ReactNode;
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(wrapperRef.current, {
            opacity: 0,
            filter: "blur(10px)",
            // scale: 1.2,
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top 100%',
                end: '40% 55%',
                scrub: true,
                // markers: true,
            },
        });
    }, { scope: wrapperRef });

    return <div ref={wrapperRef}>{children}</div>;
}
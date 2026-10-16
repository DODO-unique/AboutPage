import { useEffect, useState } from "react";
import './common.css';

export default function CommonComponent({currentPage}: {currentPage: number}) {

    const [position, setPosition] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [scrollPercent, setScrollPercent] = useState<number>(0);

    useEffect(() => {
        function handleScroll() {
            
            const calculatedPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

            setScrollPercent(Math.round(calculatedPercent))        
            }
        function handleMouseMove(e: MouseEvent) {
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        }

        window.addEventListener("scroll", handleScroll)

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            // remove the listeners when the 
            window.removeEventListener("scroll", handleScroll) 
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, []);

    return (
        <>
        <div className="common-component-master">

        <main className="main-common-block">
            <section className="top-left">
                <p>
                    {`Portfolio / ${Number(currentPage) + 1} of 5`}
                </p>
                <a href="/Gaurav_Mali_Resume.pdf" target="_blank" style={{ color: "#5C5C5C"}}>
                    Get Resume
                </a>
            </section>
            <section className="top-right">
                <p>X{position.x}</p>
                <p>Y{position.y}</p>
            </section>
            <section className="bot-left">
                <p>
                    DEPTH {scrollPercent}%
                </p>
            </section>
            <section className="bot-right">
                <p>
                    Available for Work
                </p>
            </section>
        </main>
        </div>
        </>
    )
}
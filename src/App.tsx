// import { Lightbulb } from 'lucide-react';
import CommonComponent from "./components/common";
import Introduction from "./components/intro";
import Index from "./components";
import About from "./components/about";
import Discover from "./components/discover";
import Contact from "./components/contact";
import ScrollBehavior from "./util/scroll";
import './App.css';
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  const componentArray: React.ComponentType[] = [Introduction, Index, About, Discover, Contact]
  const [currPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ autoRaf: true });
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const page = Number(entry.target.getAttribute("data-page"))
            if (Number.isFinite(page)) setCurrentPage(page)
          }
        }) 
      },
      {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.8
      }
    );

        const items = document.querySelectorAll("[data-page]");
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    
  }, []);
  return (
    <>
      <CommonComponent currentPage={currPage}/>
      <main className="main-block">
          <section className="body">
            {
              componentArray.map((Component, index) => {
                return (
                  <div className="component-container" data-page={index}> 
                  <ScrollBehavior>
                    <Component />
                  </ScrollBehavior>
                  </div>
                )
              })
            }
          </section>
      </main>
    </>
  )
} 
import { useEffect, useState } from "react";
import './disover.css'
import Naissance from '../assets/thumbnails/Naissance.png';
import Waltz from '../assets/thumbnails/Waltz.png';
import Labs from '../assets/thumbnails/Labs.png';
import Soon from '../assets/thumbnails/Soon.png';

export default function Discover() {

    const projects = [
        {
            id: "first",
            serial: "01. ",
            name: "Waltz",
            description: "Authentication Module",
            url: "https://github.com/DODO-unique/waltz",
            image: Waltz
        },
        {
            id: "second",
            serial: "02. ",
            name: "Naissance",
            description: "Git Repo Geneis Utility",
            url: "https://pypi.org/project/naissance/",
            image: Naissance
        },
        {
            id: "third",
            serial: "03. ",
            name: "???",
            description: "Dropping soon",
            url: "",
            image: Soon
        },
        {
            id: "fourth",
            serial: "04. ",
            name: "Laboratory",
            description: "Records of more projects",
            url: "https://labs.briarcastle.com/",
            image: Labs
        }
    ]

    const [activeProject, setActiveProject] = useState<string | null>(null);

    const project = projects.find(
    (item) => item.id === activeProject
    );

    useEffect(() => {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("data-project-id");

      if (entry.isIntersecting) {
        setActiveProject(id);
      } else {
        setActiveProject((current) =>
          current === id ? null : current
        );
      }
    });
  },
  {
    root: null,
    rootMargin: "-48% 0px -48% 0px",
    threshold: 0.6
  }
);

    const items = document.querySelectorAll("[data-project-id]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
    }, []);
    
    return (
        <>
        <main className="main-discovery">

        <h1 className="discover-heading" data-snap-target="discover">
            Discover
        </h1>
        {projects.map((item) => (
            <button
                key={item.id}
                data-project-id={item.id}
                className={`project-btn ${
                item.id === activeProject ? "active" : ""
                }`}
                id={item.id}
                onClick={() => {
                setActiveProject(item.id);
                document
                    .getElementById(item.id)
                    ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    });
                }}
            >
                {`${item.name}`}
            </button>
        ))}
        <div className="project-panel">
        {project && (
            <>
            <main className="main-project-toolkit">
                <section>
                    {project.image && (
                        <div className="thumbnail-container">
                            <img src={project.image} alt={project.name} />
                        </div>
                    )}
                </section>
                <section>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    {
                        project.url === "" ? null : <a href={project.url} target="_blank">Project link ↗</a>
                    }
                </section>
            </main>
            </>
        )}
        </div>
        
        </main>
        </>
    )
}
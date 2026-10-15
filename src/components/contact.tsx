import './contact.css'

export default function Contact() {
    return (
        <>
        <section className="contact-block" data-snap-target="contact">
            <h2 className="contact-title">Contact</h2>

            <nav className="contact-links">
                <a href="mailto:maligaurav791@gmail.com" target="_blank">Mail</a>
                <span aria-hidden="true">|</span>
                <a href="https://github.com/DODO-unique" target="_blank">GitHub</a>
                <span aria-hidden="true">|</span>
                <a href="https://x.com/gau_ma_" target="_blank">X</a>
                <span aria-hidden="true">|</span>
                <a href="https://linkedin.com/in/gaurav-mali-vicpress" target="_blank">LinkedIn</a>
            </nav>
        </section>
        </>
    )
}
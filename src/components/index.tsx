import './index.css';

export default function Index() {
    const snapTo = (target: string) => {
        const element = document.querySelector(`[data-snap-target="${target}"]`);
    
        element?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      };
    return (
        <>
        <div className="leap-map">
            <h2 className="leap-title">02. Leap</h2>

            <nav className="leap-index">
                <button onClick={() => {snapTo("intro")}} className="leap-item">
                    <span className="leap-number">01.</span>
                    <span className="leap-label">Introduction ↑</span>
                </button >

                <button onClick={() => {snapTo("about")}} className="leap-item">
                    <span className="leap-number">03.</span>
                    <span className="leap-label">About ↓</span>
                </button >

                <button onClick={() => {snapTo("discover")}} className="leap-item">
                    <span className="leap-number">04.</span>
                    <span className="leap-label">Discover ↓</span>
                </button >

                <button onClick={() => {snapTo("contact")}} className="leap-item">
                    <span className="leap-number">05.</span>
                    <span className="leap-label">Contact ↓</span>
                </button >
            </nav>
        </div>
        </>
    )
}
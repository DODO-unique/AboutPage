import Dither from '../../@/components/Dither.tsx';
import './intro.css'

export default function Introduction() {
    const snapTo = (target: string) => {
        const element = document.querySelector(`[data-snap-target="${target}"]`);

        element?.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
    };
    return (
        <>
        <main className='main-intro' data-snap-target="intro">
            <div className='dither-container'>
            <Dither waveColor="#162b2e"
                backgroundColor="#36a4b6"
                ditherMode="halftone"
                colorNum={10}
                pixelSize={1}
                waveSpeed={0.2}
                waveFrequency={5}
                waveAmplitude={0.3}
                mouseEffect="erase"
                mouseRadius={0.3}
                scale={0.4}
                contrast={0.9}
                enableMouseInteraction={false}
                clickRipple={false}
                intro={true}
                />
            </div>
            <p className='software-dev-para'>
                <span style={{ fontSize: 'var(--font-size-title)'}}>
                    Gaurav Mali
                </span>
                <span style={{ marginBottom: "0.25rem", fontSize: 'var(--font-size-body)'}}>
                    Software Developer
                </span>
            </p>
            <p onClick={() => {snapTo("discover")}} style={{fontSize: 'var(--font-size-body)'}} className='jump-to-discover'>Selected work ↓</p>
        </main>
        </>
    );
}
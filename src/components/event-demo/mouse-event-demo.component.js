import { useState } from "react";

export function MouseEventDemoComponent() {

    const [ slide, setSlide ] = useState("flower.jpg");

    function handleMouseOver() {
        setSlide("alexey.jpg");
    }

    function handleMouseOut() {
        setSlide("andrew.jpg");
    }

    function stopMarquee(e) {
        e.currentTarget.stop();
    }

    function startMarquee(e) {
        e.currentTarget.start();
    }

    return (
        // <div className="container-fluid">
        //     <h2>Mouse Events</h2>
        //     <img src={slide} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="w-100" height={300} />
        //     <p>Hover over the image to see mouse events in action.</p>
        // </div>

        
        <div className="container-fluid">
            <h2>Mouse Events</h2>
            <marquee onMouseOver={stopMarquee} onMouseOut={startMarquee}>
                <img src="flower.jpg" className = "me-2" width={100} height={100} />
                <img src="alexey.jpg" className = "me-2" width={100} height={100} />
                <img src="andrew.jpg" className = "me-2" width={100} height={100} />
            </marquee>
        </div>
        
    )
}
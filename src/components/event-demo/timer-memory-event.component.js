import { useState, useEffect } from "react";


export function TimerMemoryEventComponent() {

    const [time, setTime] = useState();

    function LoadTime() {
        var now = new Date();
        setTime(now.toLocaleTimeString());
    }

    var timerId;

    useEffect(() => {
        timerId = setInterval(LoadTime, 1000);
    }, []);

    function ClearTimer() {
        clearInterval(timerId);
    }

    return (

        <div className="container-fluid">
            <div className="text-center">
                <h2 className="mt-4">{time}</h2>
                <button className="me-2">
                    <span className="bi bi-play-fill"></span>
                </button>
                <button className="ms-2" onClick={ClearTimer}>
                    <span className="bi bi-stop-fill"></span>
                </button>
            </div>
        </div>
    )
}
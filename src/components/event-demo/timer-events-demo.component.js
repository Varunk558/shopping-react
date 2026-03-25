import { useState } from "react"


export function TimerEventsDemoComponent() {

    const [msg, setMsg] = useState("");

    var m1, m2, m3;

    function Message1() {
        setMsg("Hello.!");
    }

    function Message2() {
        setMsg("How are you.?");
    }

    function Message3() {
        setMsg("Welcome to React JS.");
    }

    function HandleClick() {
        m1 = setTimeout(Message1, 2000);
        m2 = setTimeout(Message2, 4000);
        m3 = setTimeout(Message3, 6000);
    }

    function CancelMessage2() {
        clearTimeout(m2);
    }


    return (
        <div>
            <button onClick={HandleClick}>Show Message</button>
            <button onClick={CancelMessage2}>Cancel Message-2</button>
            <h2 className="text-center">{msg}</h2>
        </div>
    )
}
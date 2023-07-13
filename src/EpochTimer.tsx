import { createSignal, onCleanup } from "solid-js";

export function EpochTimer() {
    const [time, setTime] = createSignal(Date.now());

    let timer = window.setInterval(() => setTime(Date.now()), 1000);


    onCleanup(() => window.clearInterval(timer));

    return (
        <p>Current unix epoch time: <span class="font-mono" onMouseOver={() => clearInterval(timer)} onMouseLeave={() => timer = window.setInterval(() => setTime(Date.now()), 1000)}>{Math.floor(time() / 1000)}</span></p>
    );
}

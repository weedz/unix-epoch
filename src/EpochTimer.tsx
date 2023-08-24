import { createSignal, onCleanup } from "solid-js";

export function EpochTimer() {
    const [time, setTime] = createSignal(new Date());

    let timer = window.setInterval(() => setTime(new Date()), 1000);

    onCleanup(() => window.clearInterval(timer));

    return (
        <div
            onMouseOver={() => clearInterval(timer)}
            onMouseLeave={() => timer = window.setInterval(() => setTime(new Date()), 1000)}
        >
            <p>Current unix epoch time: <span class="font-mono">{Math.floor(time().getTime() / 1000)}</span></p>
            <p>{time().toISOString()}</p>
        </div>
    );
}

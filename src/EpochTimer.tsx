import { createSignal, onCleanup } from "solid-js";


export function EpochTimer() {
  const [time, setTime] = createSignal(new Date());

  let timer: number;
  setTimer();

  // TODO: Figure out a better timer or something..
  function setTimer() {
    setTime(new Date());
    const now = Date.now();
    const nextSec = Math.round((now + 1000) / 1000) * 1000;
    const diff = nextSec - now;
    timer = window.setTimeout(setTimer, diff + 10);
  }

  onCleanup(() => window.clearTimeout(timer));

  return (
    <div
      onMouseOver={() => clearTimeout(timer)}
      onMouseLeave={setTimer}
    >
      <p>Current unix epoch time: <span class="font-mono">{Math.floor(time().getTime() / 1000)}</span></p>
      <p>{time().toISOString()}</p>
    </div >
  );
}

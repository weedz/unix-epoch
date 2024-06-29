import { ConvertEpoch } from "./ConvertEpoch";
import { DateStringToEpoch } from "./DateStringToEpoch";
import { EpochTimer } from "./EpochTimer";

import "./style.css";

export default function App() {
    return (
        <>
            <header>
                <h1 class="text-center">Unix epoch and Timestamp Converter</h1>
            </header>
            <main>
                <section>
                    <EpochTimer />
                </section>
                <section>
                    <ConvertEpoch />
                </section>
                <section>
                    <DateStringToEpoch />
                </section>
            </main>
            <footer>
                <span>Source on <a href="https://github.com/weedz/unix-epoch" rel="noreferrer" target="_blank">Github</a></span>
            </footer>
        </>
    )
}

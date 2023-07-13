import { ConvertEpoch } from "./ConvertEpoch";
import { DateStringToEpoch } from "./DateStringToEpoch";
import { EpochTimer } from "./EpochTimer";

import "./style.css";

export default function App() {
    return (
        <div>
            <h1 class="text-center">Unix epoch and Timestamp Converter</h1>
            <section>
                <EpochTimer />
            </section>
            <section>
                <ConvertEpoch />
            </section>
            <section>
                <DateStringToEpoch />
            </section>
        </div>
    )
}

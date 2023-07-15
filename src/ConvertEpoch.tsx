import { createSignal } from "solid-js";
import { dateFormatter, utcDateFormatter } from "./formatters";

export function ConvertEpoch() {
    const [epoch, setEpoch] = createSignal(new Date());

    return (
        <>
            <h2 class="text-center">Convert epoch to human-readable format</h2>
            <label class="flex-col">
                <span>Timestamp:</span>
                <input name="timestamp" autocomplete="off" class="font-mono" type="text" placeholder="Enter a timestamp..." onInput={e => {
                    const valueAsNumber = Number.parseInt(e.currentTarget.value, 10);
                    if (Number.isNaN(valueAsNumber) || valueAsNumber < 0) {
                        return;
                    }
                    setEpoch(new Date(valueAsNumber * 1000));
                }} value={Math.floor(epoch().getTime() / 1000)} />
            </label>
            <section>
                <ul>
                    <li>
                        <span>ISO time string:&nbsp;</span>
                        <span class="font-mono">{epoch().toISOString()}</span>
                    </li>
                    <li>
                        <span>UTC:&nbsp;</span>
                        <span class="font-mono">{utcDateFormatter.format(epoch())}</span>
                    </li>
                    <li>
                        <span>Your time zone:&nbsp;</span>
                        <span class="font-mono">{dateFormatter.format(epoch())}&nbsp;</span>
                    </li>
                </ul>
            </section>
        </>
    )
}

import { createSignal } from "solid-js";
import { dateFormatter, utcDateFormatter } from "./formatters";

export function DateStringToEpoch() {
    const [date, setDate] = createSignal(new Date());
    const [dateError, setDateError] = createSignal("");

    return (
        <>
            <h2 class="text-center">Date string to epoch</h2>
            <label class="flex-col">
                <span>Date string:</span>
                <input name="date-string" autocomplete="off" class="font-mono" type="text" placeholder="Enter a date..." onInput={e => {
                    if (!e.currentTarget.value) {
                        setDateError("");
                        return;
                    }
                    try {
                        const newDate = new Date(e.currentTarget.value);
                        if (Number.isNaN(newDate.getTime())) {
                            // Detect a RangeError, invalid date
                            setDateError("Invalid date");
                            return;
                        }
                        setDateError("");
                        setDate(newDate);
                    } catch (err) {
                        setDateError("Invalid date");
                    }
                }} />
            </label>
            <p class="small">Input format according to javascript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date">Date</a> constructor.</p>
            <span>{dateError()}</span>
            <section>
                <ul>
                    <li>
                        <span>Unix epoch:&nbsp;</span>
                        <span class="font-mono">{Math.floor(date().getTime() / 1000)}</span>
                    </li>
                    <li>
                        <span>ISO time string:&nbsp;</span>
                        <span class="font-mono">{date().toISOString()}</span>
                    </li>
                    <li>
                        <span>UTC:&nbsp;</span>
                        <span class="font-mono">{utcDateFormatter.format(date())}</span>
                    </li>
                    <li>
                        <span>Your time zone:&nbsp;</span>
                        <span class="font-mono">{dateFormatter.format(date())}&nbsp;</span>
                    </li>
                </ul>
            </section>
        </>
    )
}

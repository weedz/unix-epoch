export const dateFormatter = new Intl.DateTimeFormat(undefined, {
    // timeZoneName: "longOffset",
    dateStyle: "full",
    timeStyle: "full",
});

export const utcDateFormatter = new Intl.DateTimeFormat(undefined, {
    // timeZoneName: "longOffset",
    timeZone: "UTC",
    dateStyle: "full",
    timeStyle: "full",
});

const matchDay = (
    d: Date,
    month: number,
    day: number,
    occurrence: number,
    isNextDay = false,
) => {
    const date = new Date(d);
    if (isNextDay) {
        date.setDate(date.getDate() - 1);
    }

    if (date.getMonth() !== month - 1 || date.getDay() !== day) {
        return false;
    }

    if (occurrence > 0) {
        // check n-th occurrence
        return occurrence === Math.ceil(date.getDate() / 7);
    }

    // check last occurrence
    const dt = new Date(date);
    dt.setDate(date.getDate() + 7);
    return dt.getMonth() > date.getMonth();
};

const matchDate = (d: Date, month: number, date: number) => {
    return d.getMonth() === month - 1 && d.getDate() === date;
};

export function isUSHoliday(date: Date) {
    return (
        // New Year
        matchDate(date, 1, 1) ||
        // Independence Day
        matchDate(date, 7, 4) ||
        // Veterans Day
        matchDate(date, 11, 11) ||
        // Election Day
        matchDate(date, 11, 5) ||
        // Christmas Eve
        matchDate(date, 12, 24) ||
        // Christmas Day
        matchDate(date, 12, 25) ||
        // Good Friday
        matchDate(date, 3, 29) ||
        // Juneteenth
        matchDate(date, 6, 19) ||
        // MLK Day
        matchDay(date, 1, 1, 3) ||
        // President's Day
        matchDay(date, 2, 1, 3) ||
        // Memorial Day
        matchDay(date, 5, 1, -1) ||
        // Labor Day
        matchDay(date, 9, 1, 1) ||
        // Columbus Day
        matchDay(date, 10, 1, 2) ||
        // Thanksgiving Day
        matchDay(date, 11, 4, 4) ||
        // Day after Thanksgiving Day
        matchDay(date, 11, 4, 4, true)
    );
}

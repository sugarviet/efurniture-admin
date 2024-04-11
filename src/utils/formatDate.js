import dayjs from 'dayjs';

export function formatDate(isoDate, formatString) {
    return dayjs(isoDate).format(formatString);
}

export function formatDateByDateAndTime(isoDate) {
    return formatDate(isoDate, 'DD/MM/YYYY HH:mm:ss');
}

export function formatDateByDateAndMinute(isoDate) {
    return formatDate(isoDate, 'YYYY-MM-DD:HH:mm');
}

export function formatGMTDate(gmtDate) {
    const date = new Date(gmtDate).toLocaleString("en-US", { timeZone: "UTC" });

    return formatDateByDateAndTime(date);
}

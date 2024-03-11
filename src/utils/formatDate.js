import moment from "moment";

function formatDate(isoDate, formatString) {
    return moment(isoDate).format(formatString);
}

export function formatDateByDateAndTime(iosDate) {
    return formatDate(iosDate, "DD/MM/YYYY HH:mm:ss")
}
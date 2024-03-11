import moment from "moment";

export function formatDate(isoDate) {
    return moment(isoDate).format('DD/MM/YYYY HH:mm:ss');
}
import dayjs from "dayjs";

export function formateDate(date){
    return dayjs(date, 'DD/MM/YYYY');
}
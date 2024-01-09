import dayjs from "dayjs";

export function formateDateByDMY(date){
    return dayjs(date).format("DD/MM/YYYY")
}
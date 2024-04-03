import { formatDate } from "./formatDate";
function calcTimeFrom(value) {
    const timeUnits = ['seconds', 'minutes', 'hours'];

    let seconds = secondsFrom(value);
    let unitIndex = 0;

    while (seconds >= 60 && unitIndex < timeUnits.length - 1) {
        seconds /= 60;
        unitIndex++;
    }

    const deltaTime = Math.floor(seconds)

    if (deltaTime > 24 && unitIndex >= timeUnits.length - 1) return formatDate(value);

    return `${deltaTime} ${timeUnits[unitIndex]} ago`;
}

function secondsFrom(value) {
    const currentTimeString = new Date().toISOString();

    const targetTimeString = value;

    const currentTime = new Date(currentTimeString);
    const targetTime = new Date(targetTimeString);

    const timeDifference = currentTime - targetTime;

    const timeDifferenceInMilliseconds = Math.abs(timeDifference);
    const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000;

    return timeDifferenceInSeconds;
}

export default calcTimeFrom;
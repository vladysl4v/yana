
export const toDateTimeString = (date: Date): string => {
    const now: Date = new Date();
    const diff: number = now.getTime() - date.getTime();
    // if less than 1 minute ago
    if (diff < 60 * 1000) {
        return 'Now';
    }
    // if less than 1 hour ago
    if (diff < (60 * 60 * 1000)) {
        return `${Math.floor(diff / (60 * 1000))} minutes ago`;
    }
    // if less than 1 day ago
    if (diff < (24 * 60 * 60 * 1000)) {
        return `${Math.floor(diff / (60 * 60 * 1000))} hours ago`;
    }
    // if less than 1 year ago
    if (diff < (365 * 24 * 60 * 60 * 1000)) {
        return `${withZero(date.getDay())}.${withZero(date.getMonth())} ${withZero(date.getHours())}:${withZero(date.getMinutes())}`;
    }
    return `${withZero(date.getDay())}.${withZero(date.getMonth())}.${withZero(date.getFullYear())} ${withZero(date.getHours())}:${withZero(date.getMinutes())}`;
}

const withZero = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
}
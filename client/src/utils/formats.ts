
export const toDateTimeString = (date: Date): string => {
    const now: Date = new Date();
    const diff: number = now.getTime() - date.getTime();
    // if less than 1 minute ago
    if (diff < 60 * 1000) {
        return 'now';
    }
    // if less than 1 hour ago
    if (diff < (60 * 60 * 1000)) {
        return `${Math.floor(diff / (60 * 1000))} minutes ago`;
    }
    // if today
    if (diff < (now.getHours() * 60 * 60 * 1000)) {
        return `${Math.floor(diff / (60 * 60 * 1000))} hours ago`;
    }
    // if yesterday
    if (date.getDate() === now.getDate() - 1) {
        return `yesterday ${withZero(date.getHours())}:${withZero(date.getMinutes())}`;
    }
    // if less than 1 year ago
    if (diff < (365 * 24 * 60 * 60 * 1000)) {
        return `${withZero(date.getDate())}.${withZero(date.getMonth() + 1)} ${withZero(date.getHours())}:${withZero(date.getMinutes())}`;
    }
    // if more than 1 year ago
    return `${withZero(date.getDate())}.${withZero(date.getMonth() + 1)}.${withZero(date.getFullYear())} ${withZero(date.getHours())}:${withZero(date.getMinutes())}`;
}

const withZero = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
}
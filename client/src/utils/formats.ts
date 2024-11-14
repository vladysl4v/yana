
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
    return date.toLocaleString();
}
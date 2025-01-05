export function normalizeDate(dateStr: string): Date {
    const date = new Date(dateStr)
    if (isNaN(date.getTime())) {
        return new Date(Date.parse(dateStr));
    }
    return date;
}
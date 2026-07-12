export function progressPercentage(
    progress: number,
    duration: number
): number {
    if (duration === 0) return 0;

    return Math.min(100, (progress / duration) * 100);
}

export function escapeXml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
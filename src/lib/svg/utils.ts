export function progressPercentage(
    progress: number,
    duration: number
): number {
    if (duration === 0) return 0;

    return Math.min(100, (progress / duration) * 100);
}
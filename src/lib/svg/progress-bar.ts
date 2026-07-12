import { progressPercentage } from "./utils";

export function drawProgressBar(
    progress: number,
    duration: number
) {
    const percent = progressPercentage(progress, duration);

    const barWidth = percent * 2.5;

    return `
    <rect
      x="30"
      y="160"
      width="250"
      height="8"
      rx="4"
      fill="#333333"
    />

    <rect
      x="30"
      y="160"
      width="${barWidth}"
      height="8"
      rx="4"
      fill="#1DB954"
    />
  `;
}
import { createCanvas } from "canvas";

const canvas = createCanvas(1, 1);
const ctx = canvas.getContext("2d");


export function textWidth(
    text: string,
    font: string
) {
    ctx.font = font;

    return ctx.measureText(text).width;
}


export function scrollIfNeeded(
    text: string,
    maxWidth: number,
    font: string
): string {

    if (textWidth(text, font) <= maxWidth) {
        return text;
    }

    const separator = "   •   ";

    const scrolling =
        text +
        separator +
        text;


    const offset =
        Math.floor(Date.now() / 1200);


    const start =
        offset % text.length;


    return (
        scrolling.substring(start) +
        scrolling.substring(0, start)
    );
}
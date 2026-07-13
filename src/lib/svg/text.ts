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
        text +
        separator;


    const offset =
        Math.floor(Date.now() / 1200);


    const start =
        offset % textWidth(scrolling, font);
    
    return scrolling.slice(start);
}
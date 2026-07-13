export async function imageToBase64(url: string): Promise<string> {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to download album cover.");
    }

    const arrayBuffer = await response.arrayBuffer();

    const base64 = Buffer.from(arrayBuffer).toString("base64");

    const contentType =
        response.headers.get("content-type") ?? "image/jpeg";

    return `data:${contentType};base64,${base64}`;
}
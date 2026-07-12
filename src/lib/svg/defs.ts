export function drawDefs() {
    return `
    <defs>

        <filter id="neonGreen"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%">

            <feGaussianBlur
                stdDeviation="2"
                result="blur"/>

            <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>

        </filter>

        <filter id="neonRed"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%">

            <feGaussianBlur
                stdDeviation="2"
                result="blur"/>

            <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>

        </filter>

    </defs>
    `;
}
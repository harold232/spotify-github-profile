import { progressPercentage } from "./utils";


export function drawProgressBar(
    progress:number,
    duration:number
){

    const percent =
        progressPercentage(progress,duration);


    const width =
        percent * 5.5;


    return `


<!-- barra base -->

<rect
 x="30"
 y="190"
 width="540"
 height="6"
 rx="3"
 fill="#333"
/>


<!-- progreso -->

<rect
 x="30"
 y="190"
 width="${width}"
 height="6"
 rx="3"
 fill="#1DB954"
/>



<!-- onda -->

<path
 d="
 M30 188
 Q50 175 70 188
 T110 188
 T150 188
 T190 188
 T230 188
 T270 188
 T310 188
 T350 188
 T390 188
 T430 188
 T470 188
 T510 188
 T550 188
 "
 stroke="#1DB954"
 stroke-width="2"
 fill="none"
>


<animate
 attributeName="d"
 dur="1.5s"
 repeatCount="indefinite"
 values="
 M30 188 Q50 175 70 188 T110 188 T150 188 T190 188 T230 188 T270 188;
 M30 188 Q50 200 70 188 T110 188 T150 188 T190 188 T230 188 T270 188;
 M30 188 Q50 175 70 188 T110 188 T150 188 T190 188 T230 188 T270 188
 "
/>


</path>


`;

}
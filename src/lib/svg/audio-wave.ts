export function drawAudioWave(progress: number, duration: number, isPlaying: boolean) {
    if (!isPlaying) {
        return "";
    }

    const TOTAL_BARS = 36;

    const BAR_WIDTH = 4;

    const GAP = 4;

    const START_X = 190;

    const BASE_Y = 185;

    const MAX_HEIGHT = 26;



    const percentage = duration > 0
        ? Math.min(progress / duration, 1)
        : 0;

    const activeBars = Math.round(
        percentage * TOTAL_BARS
    );

    const heights = [
        10,18,24,16,12,20,
        26,14,18,22,15,11,
        25,19,13,21,17,24
    ];

    let svg = "";

    for (let i = 0; i < TOTAL_BARS; i++) {

        const amplitude =
            5 + Math.abs(Math.sin(i * 0.7)) * 8;

        // Alto de los waves
        const height =
            heights[i % heights.length] * 0.70;

        const x =
            START_X + i * (BAR_WIDTH + GAP);

        // Movimiento y del wave
        const CENTER_Y = 165;

        const y = CENTER_Y - height / 2;

        const color =
            i < activeBars
                ? "#1DB954"
                : "#404040";

        if (i < activeBars && isPlaying) {
            svg += `
            <rect
                x="${x}"
                y="${y}"
                width="${BAR_WIDTH}"
                height="${height}"
                rx="2"
                fill="${color}"
                filter="url(#neonGreen)"
            >
            <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="${0.8 + (i % 5) * 0.1}s"
                repeatCount="indefinite"
            />
            
            <animate
                attributeName="height"
                values="
                    ${height};
                    ${height + amplitude};
                    ${height}
                "
                dur="${0.8 + (i % 5) * 0.1}s"
                repeatCount="indefinite"
            />
            
            <animate
                attributeName="y"
                values="
                    ${CENTER_Y - height / 2};
                    ${CENTER_Y - (height + amplitude) / 2};
                    ${CENTER_Y - height / 2}
                "
                dur="${0.8 + (i % 5) * 0.1}s"
                repeatCount="indefinite"
            />
            
            </rect>
            `;
        } else {

            svg += `
                <rect
                    x="${x}"
                    y="${y}"
                    width="${BAR_WIDTH}"
                    height="${height}"
                    rx="2"
                    fill="#444"
                />
                `;

        }

        /*return `
         <g transform="translate(185 150) scale(0.42)">
                <g fill="#1DB954">
                <rect x="35.50" y="146.00" width="6" height="8.00" rx="3.00">
                  <animate attributeName="height" values="8.00;20.00;11.00;8.00" dur="0.85s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="146.00;140.00;144.50;146.00" dur="0.85s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.00s" repeatCount="indefinite"/>
                </rect>
                <rect x="48.50" y="146.00" width="6" height="8.00" rx="3.00">
                  <animate attributeName="height" values="8.00;24.72;15.57;8.00" dur="0.93s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="146.00;137.64;142.21;146.00" dur="0.93s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.07s" repeatCount="indefinite"/>
                </rect>
                <rect x="61.50" y="145.92" width="6" height="8.16" rx="3.00">
                  <animate attributeName="height" values="8.16;28.15;19.99;8.16" dur="1.01s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="145.92;135.92;140.01;145.92" dur="1.01s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.14s" repeatCount="indefinite"/>
                </rect>
                <rect x="74.50" y="145.54" width="6" height="8.92" rx="3.00">
                  <animate attributeName="height" values="8.92;27.46;21.69;8.92" dur="1.09s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="145.54;136.27;139.15;145.54" dur="1.09s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.21s" repeatCount="indefinite"/>
                </rect>
                <rect x="87.50" y="144.77" width="6" height="10.46" rx="3.00">
                  <animate attributeName="height" values="10.46;29.07;15.99;10.46" dur="1.17s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="144.77;135.47;142.01;144.77" dur="1.17s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.28s" repeatCount="indefinite"/>
                </rect>
                <rect x="100.50" y="145.78" width="6" height="8.45" rx="3.00">
                  <animate attributeName="height" values="8.45;38.39;24.19;8.45" dur="1.25s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="145.78;130.80;137.91;145.78" dur="1.25s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.35s" repeatCount="indefinite"/>
                </rect>
                <rect x="113.50" y="143.95" width="6" height="12.10" rx="3.00">
                  <animate attributeName="height" values="12.10;47.44;33.68;12.10" dur="1.33s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="143.95;126.28;133.16;143.95" dur="1.33s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.42s" repeatCount="indefinite"/>
                </rect>
                <rect x="126.50" y="143.44" width="6" height="13.11" rx="3.00">
                  <animate attributeName="height" values="13.11;45.21;35.72;13.11" dur="0.85s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="143.44;127.39;132.14;143.44" dur="0.85s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.49s" repeatCount="indefinite"/>
                </rect>
                <rect x="139.50" y="143.91" width="6" height="12.18" rx="3.00">
                  <animate attributeName="height" values="12.18;37.46;20.61;12.18" dur="0.93s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="143.91;131.27;139.70;143.91" dur="0.93s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.56s" repeatCount="indefinite"/>
                </rect>
                <rect x="152.50" y="142.56" width="6" height="14.88" rx="3.00">
                  <animate attributeName="height" values="14.88;41.34;26.04;14.88" dur="1.01s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="142.56;129.33;136.98;142.56" dur="1.01s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.63s" repeatCount="indefinite"/>
                </rect>
                <rect x="165.50" y="143.60" width="6" height="12.80" rx="3.00">
                  <animate attributeName="height" values="12.80;58.17;41.30;12.80" dur="1.09s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="143.60;120.92;129.35;143.60" dur="1.09s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.70s" repeatCount="indefinite"/>
                </rect>
                <rect x="178.50" y="141.38" width="6" height="17.24" rx="3.00">
                  <animate attributeName="height" values="17.24;67.60;53.41;17.24" dur="1.17s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="141.38;116.20;123.30;141.38" dur="1.17s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.77s" repeatCount="indefinite"/>
                </rect>
                <rect x="191.50" y="141.66" width="6" height="16.68" rx="3.00">
                  <animate attributeName="height" values="16.68;57.50;31.63;16.68" dur="1.25s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="141.66;121.25;134.19;141.66" dur="1.25s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.84s" repeatCount="indefinite"/>
                </rect>
                <rect x="204.50" y="142.60" width="6" height="14.81" rx="3.00">
                  <animate attributeName="height" values="14.81;45.56;28.70;14.81" dur="1.33s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="142.60;127.22;135.65;142.60" dur="1.33s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.00s" repeatCount="indefinite"/>
                </rect>
                <rect x="217.50" y="140.08" width="6" height="19.84" rx="3.00">
                  <animate attributeName="height" values="19.84;55.12;39.14;19.84" dur="0.85s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="140.08;122.44;130.43;140.08" dur="0.85s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.07s" repeatCount="indefinite"/>
                </rect>
                <rect x="230.50" y="141.40" width="6" height="17.19" rx="3.00">
                  <animate attributeName="height" values="17.19;78.14;61.73;17.19" dur="0.93s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="141.40;110.93;119.13;141.40" dur="0.93s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.14s" repeatCount="indefinite"/>
                </rect>
                <rect x="243.50" y="139.30" width="6" height="21.40" rx="3.00">
                  <animate attributeName="height" values="21.40;83.94;46.17;21.40" dur="1.01s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="139.30;108.03;126.92;139.30" dur="1.01s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.21s" repeatCount="indefinite"/>
                </rect>
                <rect x="256.50" y="140.51" width="6" height="18.97" rx="3.00">
                  <animate attributeName="height" values="18.97;65.42;41.21;18.97" dur="1.09s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="140.51;117.29;129.39;140.51" dur="1.09s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.28s" repeatCount="indefinite"/>
                </rect>
                <rect x="269.50" y="141.39" width="6" height="17.21" rx="3.00">
                  <animate attributeName="height" values="17.21;52.97;37.61;17.21" dur="1.17s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="141.39;123.52;131.20;141.39" dur="1.17s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.35s" repeatCount="indefinite"/>
                </rect>
                <rect x="282.50" y="137.33" width="6" height="25.34" rx="3.00">
                  <animate attributeName="height" values="25.34;70.38;55.60;25.34" dur="1.25s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="137.33;114.81;122.20;137.33" dur="1.25s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.42s" repeatCount="indefinite"/>
                </rect>
                <rect x="295.50" y="139.35" width="6" height="21.30" rx="3.00">
                  <animate attributeName="height" values="21.30;96.84;53.26;21.30" dur="1.33s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="139.35;101.58;123.37;139.35" dur="1.33s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.49s" repeatCount="indefinite"/>
                </rect>
                <rect x="308.50" y="137.82" width="6" height="24.37" rx="3.00">
                  <animate attributeName="height" values="24.37;95.55;60.20;24.37" dur="0.85s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="137.82;102.22;119.90;137.82" dur="0.85s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.56s" repeatCount="indefinite"/>
                </rect>
                <rect x="321.50" y="139.89" width="6" height="20.22" rx="3.00">
                  <animate attributeName="height" values="20.22;69.74;49.51;20.22" dur="0.93s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="139.89;115.13;125.24;139.89" dur="0.93s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.63s" repeatCount="indefinite"/>
                </rect>
                <rect x="334.50" y="140.14" width="6" height="19.71" rx="3.00">
                  <animate attributeName="height" values="19.71;60.66;47.92;19.71" dur="1.01s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="140.14;119.67;126.04;140.14" dur="1.01s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.70s" repeatCount="indefinite"/>
                </rect>
                <rect x="347.50" y="134.44" width="6" height="31.12" rx="3.00">
                  <animate attributeName="height" values="31.12;86.45;47.55;31.12" dur="1.09s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="134.44;106.77;126.23;134.44" dur="1.09s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.77s" repeatCount="indefinite"/>
                </rect>
                <rect x="360.50" y="137.61" width="6" height="24.78" rx="3.00">
                  <animate attributeName="height" values="24.78;112.64;70.96;24.78" dur="1.17s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="137.61;93.68;114.52;137.61" dur="1.17s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.84s" repeatCount="indefinite"/>
                </rect>
                <rect x="373.50" y="137.00" width="6" height="26.00" rx="3.00">
                  <animate attributeName="height" values="26.00;101.98;72.41;26.00" dur="1.25s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="137.00;99.01;113.80;137.00" dur="1.25s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.00s" repeatCount="indefinite"/>
                </rect>
                <rect x="386.50" y="139.63" width="6" height="20.73" rx="3.00">
                  <animate attributeName="height" values="20.73;71.49;56.47;20.73" dur="1.33s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="139.63;114.26;121.76;139.63" dur="1.33s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.07s" repeatCount="indefinite"/>
                </rect>
                <rect x="399.50" y="138.77" width="6" height="22.47" rx="3.00">
                  <animate attributeName="height" values="22.47;69.14;38.03;22.47" dur="0.85s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="138.77;115.43;130.99;138.77" dur="0.85s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.14s" repeatCount="indefinite"/>
                </rect>
                <rect x="412.50" y="131.63" width="6" height="36.74" rx="3.00">
                  <animate attributeName="height" values="36.74;102.06;64.30;36.74" dur="0.93s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="131.63;98.97;117.85;131.63" dur="0.93s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.21s" repeatCount="indefinite"/>
                </rect>
                <rect x="425.50" y="136.37" width="6" height="27.25" rx="3.00">
                  <animate attributeName="height" values="27.25;123.88;87.95;27.25" dur="1.01s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="136.37;88.06;106.02;136.37" dur="1.01s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.28s" repeatCount="indefinite"/>
                </rect>
                <rect x="438.50" y="136.85" width="6" height="26.30" rx="3.00">
                  <animate attributeName="height" values="26.30;103.14;81.48;26.30" dur="1.09s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="136.85;98.43;109.26;136.85" dur="1.09s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.35s" repeatCount="indefinite"/>
                </rect>
                <rect x="451.50" y="139.62" width="6" height="20.77" rx="3.00">
                  <animate attributeName="height" values="20.77;71.62;39.39;20.77" dur="1.17s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="139.62;114.19;130.31;139.62" dur="1.17s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.42s" repeatCount="indefinite"/>
                </rect>
                <rect x="464.50" y="137.31" width="6" height="25.39" rx="3.00">
                  <animate attributeName="height" values="25.39;78.11;49.21;25.39" dur="1.25s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="137.31;110.94;125.39;137.31" dur="1.25s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.49s" repeatCount="indefinite"/>
                </rect>
                <rect x="477.50" y="129.29" width="6" height="41.42" rx="3.00">
                  <animate attributeName="height" values="41.42;115.05;81.69;41.42" dur="1.33s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="129.29;92.48;109.16;129.29" dur="1.33s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.56s" repeatCount="indefinite"/>
                </rect>
                <rect x="490.50" y="135.86" width="6" height="28.28" rx="3.00">
                  <animate attributeName="height" values="28.28;128.53;101.54;28.28" dur="0.85s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="135.86;85.74;99.23;135.86" dur="0.85s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.63s" repeatCount="indefinite"/>
                </rect>
                <rect x="503.50" y="137.43" width="6" height="25.13" rx="3.00">
                  <animate attributeName="height" values="25.13;98.55;54.20;25.13" dur="0.93s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="137.43;100.72;122.90;137.43" dur="0.93s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.70s" repeatCount="indefinite"/>
                </rect>
                <rect x="516.50" y="139.87" width="6" height="20.27" rx="3.00">
                  <animate attributeName="height" values="20.27;69.89;44.03;20.27" dur="1.01s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="139.87;115.06;127.99;139.87" dur="1.01s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.77s" repeatCount="indefinite"/>
                </rect>
                <rect x="529.50" y="136.26" width="6" height="27.48" rx="3.00">
                  <animate attributeName="height" values="27.48;84.56;60.04;27.48" dur="1.09s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="136.26;107.72;119.98;136.26" dur="1.09s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.84s" repeatCount="indefinite"/>
                </rect>
                <rect x="542.50" y="128.55" width="6" height="42.89" rx="3.00">
                  <animate attributeName="height" values="42.89;119.15;94.13;42.89" dur="1.17s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="128.55;90.43;102.94;128.55" dur="1.17s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.00s" repeatCount="indefinite"/>
                </rect>
                <rect x="555.50" y="136.69" width="6" height="26.63" rx="3.00">
                  <animate attributeName="height" values="26.63;121.03;66.57;26.63" dur="1.25s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="136.69;89.48;116.72;136.69" dur="1.25s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.07s" repeatCount="indefinite"/>
                </rect>
                <rect x="568.50" y="138.93" width="6" height="22.13" rx="3.00">
                  <animate attributeName="height" values="22.13;86.80;54.68;22.13" dur="1.33s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="138.93;106.60;122.66;138.93" dur="1.33s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.14s" repeatCount="indefinite"/>
                </rect>
                <rect x="581.50" y="140.44" width="6" height="19.13" rx="3.00">
                  <animate attributeName="height" values="19.13;65.96;46.83;19.13" dur="0.85s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="140.44;117.02;126.58;140.44" dur="0.85s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.21s" repeatCount="indefinite"/>
                </rect>
                <rect x="594.50" y="135.93" width="6" height="28.15" rx="3.00">
                  <animate attributeName="height" values="28.15;86.61;68.42;28.15" dur="0.93s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="135.93;106.69;115.79;135.93" dur="0.93s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.28s" repeatCount="indefinite"/>
                </rect>
                <rect x="607.50" y="129.31" width="6" height="41.39" rx="3.00">
                  <animate attributeName="height" values="41.39;114.96;63.23;41.39" dur="1.01s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="129.31;92.52;118.39;129.31" dur="1.01s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.35s" repeatCount="indefinite"/>
                </rect>
                <rect x="620.50" y="138.21" width="6" height="23.58" rx="3.00">
                  <animate attributeName="height" values="23.58;107.17;67.52;23.58" dur="1.09s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="138.21;96.41;116.24;138.21" dur="1.09s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.42s" repeatCount="indefinite"/>
                </rect>
                <rect x="633.50" y="140.59" width="6" height="18.83" rx="3.00">
                  <animate attributeName="height" values="18.83;73.83;52.42;18.83" dur="1.17s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="140.59;113.08;123.79;140.59" dur="1.17s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.49s" repeatCount="indefinite"/>
                </rect>
                <rect x="646.50" y="141.00" width="6" height="18.00" rx="3.00">
                  <animate attributeName="height" values="18.00;62.06;49.02;18.00" dur="1.25s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="141.00;118.97;125.49;141.00" dur="1.25s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.56s" repeatCount="indefinite"/>
                </rect>
                <rect x="659.50" y="136.17" width="6" height="27.66" rx="3.00">
                  <animate attributeName="height" values="27.66;85.10;46.81;27.66" dur="1.33s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="136.17;107.45;126.60;136.17" dur="1.33s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.63s" repeatCount="indefinite"/>
                </rect>
                <rect x="672.50" y="131.12" width="6" height="37.76" rx="3.00">
                  <animate attributeName="height" values="37.76;104.89;66.08;37.76" dur="0.85s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="131.12;97.55;116.96;131.12" dur="0.85s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.70s" repeatCount="indefinite"/>
                </rect>
                <rect x="685.50" y="140.08" width="6" height="19.84" rx="3.00">
                  <animate attributeName="height" values="19.84;90.19;64.04;19.84" dur="0.93s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="140.08;104.90;117.98;140.08" dur="0.93s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.77s" repeatCount="indefinite"/>
                </rect>
                <rect x="698.50" y="142.17" width="6" height="15.67" rx="3.00">
                  <animate attributeName="height" values="15.67;61.44;48.53;15.67" dur="1.01s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="142.17;119.28;125.73;142.17" dur="1.01s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.84s" repeatCount="indefinite"/>
                </rect>
                <rect x="711.50" y="141.62" width="6" height="16.76" rx="3.00">
                  <animate attributeName="height" values="16.76;57.79;31.79;16.76" dur="1.09s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="141.62;121.10;134.11;141.62" dur="1.09s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.00s" repeatCount="indefinite"/>
                </rect>
                <rect x="724.50" y="137.11" width="6" height="25.79" rx="3.00">
                  <animate attributeName="height" values="25.79;79.35;49.99;25.79" dur="1.17s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="137.11;110.33;125.01;137.11" dur="1.17s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.07s" repeatCount="indefinite"/>
                </rect>
                <rect x="737.50" y="133.81" width="6" height="32.37" rx="3.00">
                  <animate attributeName="height" values="32.37;89.92;63.84;32.37" dur="1.25s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="133.81;105.04;118.08;133.81" dur="1.25s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.14s" repeatCount="indefinite"/>
                </rect>
                <rect x="750.50" y="142.08" width="6" height="15.84" rx="3.00">
                  <animate attributeName="height" values="15.84;72.00;56.88;15.84" dur="1.33s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="142.08;114.00;121.56;142.08" dur="1.33s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.21s" repeatCount="indefinite"/>
                </rect>
                <rect x="763.50" y="143.60" width="6" height="12.81" rx="3.00">
                  <animate attributeName="height" values="12.81;50.23;27.62;12.81" dur="0.85s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="143.60;124.89;136.19;143.60" dur="0.85s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.28s" repeatCount="indefinite"/>
                </rect>
                <rect x="776.50" y="142.43" width="6" height="15.14" rx="3.00">
                  <animate attributeName="height" values="15.14;52.21;32.90;15.14" dur="0.93s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="142.43;123.89;133.55;142.43" dur="0.93s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.35s" repeatCount="indefinite"/>
                </rect>
                <rect x="789.50" y="138.81" width="6" height="22.37" rx="3.00">
                  <animate attributeName="height" values="22.37;68.84;48.88;22.37" dur="1.01s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="138.81;115.58;125.56;138.81" dur="1.01s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.42s" repeatCount="indefinite"/>
                </rect>
                <rect x="802.50" y="137.18" width="6" height="25.64" rx="3.00">
                  <animate attributeName="height" values="25.64;71.23;56.28;25.64" dur="1.09s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="137.18;114.38;121.86;137.18" dur="1.09s" begin="-0.49s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.49s" repeatCount="indefinite"/>
                </rect>
                <rect x="815.50" y="144.05" width="6" height="11.90" rx="3.00">
                  <animate attributeName="height" values="11.90;54.07;29.74;11.90" dur="1.17s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="144.05;122.96;135.13;144.05" dur="1.17s" begin="-0.56s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.56s" repeatCount="indefinite"/>
                </rect>
                <rect x="828.50" y="144.89" width="6" height="10.23" rx="3.00">
                  <animate attributeName="height" values="10.23;40.10;25.26;10.23" dur="1.25s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="144.89;129.95;137.37;144.89" dur="1.25s" begin="-0.63s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.63s" repeatCount="indefinite"/>
                </rect>
                <rect x="841.50" y="143.60" width="6" height="12.80" rx="3.00">
                  <animate attributeName="height" values="12.80;44.15;31.35;12.80" dur="1.33s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="143.60;127.92;134.33;143.60" dur="1.33s" begin="-0.70s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.70s" repeatCount="indefinite"/>
                </rect>
                <rect x="854.50" y="141.31" width="6" height="17.38" rx="3.00">
                  <animate attributeName="height" values="17.38;53.49;42.25;17.38" dur="0.85s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="141.31;123.26;128.87;141.31" dur="0.85s" begin="-0.77s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.77s" repeatCount="indefinite"/>
                </rect>
                <rect x="867.50" y="140.95" width="6" height="18.10" rx="3.00">
                  <animate attributeName="height" values="18.10;50.27;27.65;18.10" dur="0.93s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="140.95;124.86;136.17;140.95" dur="0.93s" begin="-0.84s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.84s" repeatCount="indefinite"/>
                </rect>
                <rect x="880.50" y="145.88" width="6" height="8.24" rx="3.00">
                  <animate attributeName="height" values="8.24;37.47;23.61;8.24" dur="1.01s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="145.88;131.26;138.20;145.88" dur="1.01s" begin="-0.00s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.01s" begin="-0.00s" repeatCount="indefinite"/>
                </rect>
                <rect x="893.50" y="146.00" width="6" height="8.00" rx="3.00">
                  <animate attributeName="height" values="8.00;30.39;21.58;8.00" dur="1.09s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="146.00;134.80;139.21;146.00" dur="1.09s" begin="-0.07s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.09s" begin="-0.07s" repeatCount="indefinite"/>
                </rect>
                <rect x="906.50" y="145.29" width="6" height="9.42" rx="3.00">
                  <animate attributeName="height" values="9.42;32.50;25.67;9.42" dur="1.17s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="145.29;133.75;137.16;145.29" dur="1.17s" begin="-0.14s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.17s" begin="-0.14s" repeatCount="indefinite"/>
                </rect>
                <rect x="919.50" y="144.53" width="6" height="10.94" rx="3.00">
                  <animate attributeName="height" values="10.94;33.67;18.52;10.94" dur="1.25s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="144.53;133.16;140.74;144.53" dur="1.25s" begin="-0.21s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.25s" begin="-0.21s" repeatCount="indefinite"/>
                </rect>
                <rect x="932.50" y="144.86" width="6" height="10.28" rx="3.00">
                  <animate attributeName="height" values="10.28;28.56;17.99;10.28" dur="1.33s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="144.86;135.72;141.00;144.86" dur="1.33s" begin="-0.28s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="1.33s" begin="-0.28s" repeatCount="indefinite"/>
                </rect>
                <rect x="945.50" y="146.00" width="6" height="8.00" rx="3.00">
                  <animate attributeName="height" values="8.00;22.72;16.13;8.00" dur="0.85s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="146.00;138.64;141.93;146.00" dur="0.85s" begin="-0.35s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.85s" begin="-0.35s" repeatCount="indefinite"/>
                </rect>
                <rect x="958.50" y="146.00" width="6" height="8.00" rx="3.00">
                  <animate attributeName="height" values="8.00;20.00;15.80;8.00" dur="0.93s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="146.00;140.00;142.10;146.00" dur="0.93s" begin="-0.42s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.65;1;0.82;0.65" dur="0.93s" begin="-0.42s" repeatCount="indefinite"/>
                </rect>
                </g>

            </g>
        `;*/
    }

    return svg;
}
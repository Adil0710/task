"use client"; // Ensures this component is client-rendered

import React from "react";

function GooglePlayLogo() {
  return (
    <svg
      width="36"
      height="38"
      viewBox="0 0 36 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_1441"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="36"
        height="38"
      >
        {/* Directly set the `mask-type` attribute */}
        <path
          d="M34.2217 16.6737C36.0673 17.6893 36.0673 20.3115 34.2217 21.3271L4.70589 37.5689C2.90844 38.558 0.696777 37.2745 0.696777 35.2422L0.696779 2.75857C0.696779 0.726326 2.90844 -0.557204 4.70589 0.431891L34.2217 16.6737Z"
          fill="#C4C4C4"
          mask-type="alpha"
        />
      </mask>
      <g mask="url(#mask0_1_1441)">
        <path
          d="M1.62001 37.2492L20.031 18.7347L1.92323 0.525146C1.20083 0.988254 0.696777 1.7878 0.696777 2.75798V35.2417C0.696777 36.0694 1.06366 36.7729 1.62001 37.2492Z"
          fill="url(#paint0_linear_1_1441)"
        />
        <path
          d="M34.2217 16.6735C36.0673 17.689 36.0673 20.3112 34.2217 21.3268L26.7755 25.4243L20.0311 18.7349L26.4315 12.3867L34.2217 16.6735Z"
          fill="url(#paint1_linear_1_1441)"
        />
        <path
          d="M26.7753 25.4242L20.0309 18.7349L1.61981 37.2494C2.42944 37.9427 3.64036 38.1548 4.70576 37.5686L26.7753 25.4242Z"
          fill="url(#paint2_linear_1_1441)"
        />
        <path
          d="M1.9234 0.525464L20.0312 18.735L26.4316 12.3867L4.70602 0.431647C3.76668 -0.0852511 2.71421 0.0185216 1.9234 0.525464Z"
          fill="url(#paint3_linear_1_1441)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_1441"
          x1="13.3178"
          y1="11.5435"
          x2="0.80013"
          y2="24.1641"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C3FF" />
          <stop offset="1" stopColor="#1BE2FA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_1441"
          x1="20.0311"
          y1="18.735"
          x2="36.6801"
          y2="18.735"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCE00" />
          <stop offset="1" stopColor="#FFEA00" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_1441"
          x1="1.23371"
          y1="39.5095"
          x2="23.3802"
          y2="21.7542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DE2453" />
          <stop offset="1" stopColor="#FE3944" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1_1441"
          x1="2.30809"
          y1="-1.50695"
          x2="23.3842"
          y2="15.7077"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11D574" />
          <stop offset="1" stopColor="#01F176" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GooglePlayLogo;

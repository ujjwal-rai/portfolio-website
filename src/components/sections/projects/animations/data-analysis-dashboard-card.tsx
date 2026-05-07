"use client";

import { useId } from "react";

import type { HeroCardVariant } from "../types";

export function DataAnalysisDashboardCard({
  variant,
}: {
  variant: HeroCardVariant;
}) {
  const uid = useId().replace(/:/g, "");
  const stockGradientId = `${uid}-stockGradient`;
  const greenAreaGradientId = `${uid}-greenAreaGradient`;
  const redAreaGradientId = `${uid}-redAreaGradient`;

  return (
    <div
      className={`dad-root ${variant === "card" ? "dad-root--card" : "dad-root--modal"}`}
    >
      <div className="dad-inner">
        <div className="dad-grid-wrap">
          <div className="dad-grid-lines" />
        </div>

        <div className="dad-chart-wrap">
          <svg
            className="dad-chart-svg"
            viewBox="0 0 560 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0 190C40 175 80 120 120 138C160 156 185 88 230 108C270 126 310 72 350 82C390 92 425 138 470 120C510 102 535 46 560 58V220H0V190Z"
              fill={`url(#${greenAreaGradientId})`}
              opacity="0.32"
              className="dad-graph-area-green"
            />
            <path
              d="M0 220L0 190C40 175 80 120 120 138C160 156 185 88 230 108C270 126 310 72 350 82C390 92 425 138 470 120C510 102 535 46 560 58V220Z"
              fill={`url(#${redAreaGradientId})`}
              opacity="0.14"
              className="dad-graph-area-red"
            />
            <path
              d="M0 190C40 175 80 120 120 138C160 156 185 88 230 108C270 126 310 72 350 82C390 92 425 138 470 120C510 102 535 46 560 58"
              stroke={`url(#${stockGradientId})`}
              strokeWidth="6"
              strokeLinecap="round"
              className="dad-graph-line"
            />
            <g className="dad-moving-arrow">
              <path
                d="M0 0L26 0L18 -8M26 0L18 8"
                stroke="#EF4444"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
            <defs>
              <linearGradient id={stockGradientId} x1="0" y1="190" x2="560" y2="58">
                <stop stopColor="#EF4444" />
                <stop offset="0.25" stopColor="#F97316" />
                <stop offset="0.5" stopColor="#EAB308" />
                <stop offset="0.75" stopColor="#22C55E" />
                <stop offset="1" stopColor="#4ADE80" />
              </linearGradient>
              <linearGradient id={greenAreaGradientId} x1="280" y1="58" x2="280" y2="220">
                <stop stopColor="#22C55E" />
                <stop offset="1" stopColor="#22C55E" stopOpacity="0" />
              </linearGradient>
              <linearGradient id={redAreaGradientId} x1="280" y1="120" x2="280" y2="220">
                <stop stopColor="#EF4444" />
                <stop offset="1" stopColor="#EF4444" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="dad-bars">
          <div className="dad-bar" />
          <div className="dad-bar dad-delay-bar-1" />
          <div className="dad-bar dad-delay-bar-2" />
          <div className="dad-bar dad-delay-bar-3" />
        </div>
      </div>

      <style jsx>{`
        .dad-root {
          position: relative;
          width: 100%;
          background: transparent;
          border: none;
          border-radius: 0;
          overflow: visible;
        }

        .dad-root--card {
          flex: 1;
          min-height: 0;
          height: 100%;
          overflow: hidden;
        }

        .dad-root--modal {
          min-height: 280px;
        }

        .dad-inner {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: inherit;
        }

        .dad-root--card .dad-inner {
          min-height: 0;
        }

        .dad-grid-wrap {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          pointer-events: none;
        }

        .dad-grid-lines {
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: dadGridMove 12s linear infinite;
        }

        .dad-chart-wrap {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .dad-root--card .dad-chart-wrap {
          height: 62%;
        }

        .dad-root--modal .dad-chart-wrap {
          height: 240px;
        }

        .dad-chart-svg {
          width: 100%;
          height: 100%;
        }

        .dad-graph-line {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: dadDrawLine 5s ease infinite;
          filter: drop-shadow(0 0 18px rgba(74, 222, 128, 0.45));
        }

        .dad-moving-arrow {
          animation: dadMoveArrow 1.4s linear infinite;
          filter: drop-shadow(0 0 12px rgba(239, 68, 68, 0.8));
        }

        .dad-graph-area-green {
          animation: dadAreaPulseGreen 4s ease-in-out infinite;
        }

        .dad-graph-area-red {
          animation: dadAreaPulseRed 4s ease-in-out infinite;
        }

        .dad-bars {
          position: absolute;
          bottom: 24px;
          left: 32px;
          display: flex;
          align-items: flex-end;
          gap: 12px;
          opacity: 0.7;
          pointer-events: none;
        }

        .dad-bar {
          width: 16px;
          border-radius: 999px;
          background: linear-gradient(to top, #0891b2, #67e8f9);
          animation: dadBarBounce 2s ease-in-out infinite;
          box-shadow: 0 0 14px rgba(34, 211, 238, 0.35);
        }

        .dad-root--card .dad-bar:nth-child(1) {
          height: 40px;
        }
        .dad-root--card .dad-bar:nth-child(2) {
          height: 70px;
        }
        .dad-root--card .dad-bar:nth-child(3) {
          height: 110px;
        }
        .dad-root--card .dad-bar:nth-child(4) {
          height: 85px;
        }

        .dad-root--modal .dad-bar:nth-child(1) {
          height: 48px;
        }
        .dad-root--modal .dad-bar:nth-child(2) {
          height: 78px;
        }
        .dad-root--modal .dad-bar:nth-child(3) {
          height: 118px;
        }
        .dad-root--modal .dad-bar:nth-child(4) {
          height: 92px;
        }

        .dad-delay-bar-1 {
          animation-delay: 0.2s;
        }
        .dad-delay-bar-2 {
          animation-delay: 0.4s;
        }
        .dad-delay-bar-3 {
          animation-delay: 0.6s;
        }

        @keyframes dadDrawLine {
          0% {
            stroke-dashoffset: 1200;
          }
          40% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes dadMoveArrow {
          0% {
            transform: translate(0px, 190px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          20% {
            transform: translate(120px, 138px);
          }
          40% {
            transform: translate(230px, 108px);
          }
          60% {
            transform: translate(350px, 82px);
          }
          80% {
            transform: translate(470px, 120px);
          }
          100% {
            transform: translate(560px, 58px);
            opacity: 0;
          }
        }

        @keyframes dadBarBounce {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.18);
          }
        }

        @keyframes dadAreaPulseGreen {
          0%,
          100% {
            opacity: 0.22;
          }
          50% {
            opacity: 0.42;
          }
        }

        @keyframes dadAreaPulseRed {
          0%,
          100% {
            opacity: 0.08;
          }
          50% {
            opacity: 0.18;
          }
        }

        @keyframes dadGridMove {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(40px);
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import { useId } from "react";

import type { HeroCardVariant } from "../types";

export function FlyingBirdSkyCard({
  variant,
}: {
  variant: HeroCardVariant;
}) {
  const uid = useId().replace(/:/g, "");
  const bodyGradientId = `${uid}-bodyGradient`;
  const headGradientId = `${uid}-headGradient`;
  const wingFrontGradientId = `${uid}-wingFrontGradient`;
  const wingBackGradientId = `${uid}-wingBackGradient`;

  const panelClass =
    variant === "card"
      ? "fbs-panel fbs-panel--card"
      : "fbs-panel fbs-panel--modal";

  return (
    <div className={panelClass}>
      <div className="fbs-inner">
        <div className="fbs-clouds">
          <div className="fbs-cloud fbs-cloud-1" />
          <div className="fbs-cloud fbs-cloud-2" />
          <div className="fbs-cloud fbs-cloud-3" />
          <div className="fbs-cloud fbs-cloud-4" />
          <div className="fbs-cloud-small fbs-cloud-small-1" />
          <div className="fbs-cloud-small fbs-cloud-small-2" />
          <div className="fbs-cloud-small fbs-cloud-small-3" />
        </div>

        <div className="fbs-bird-layer">
          <div className={variant === "card" ? "fbs-bird-wrapper" : "fbs-bird-wrapper fbs-bird-wrapper--modal"}>
            <svg
              className="fbs-bird-svg"
              width="280"
              height="180"
              viewBox="0 0 280 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                className="fbs-wing-back"
                d="M110 92C74 46 98 10 170 54C152 62 136 82 130 100"
                fill={`url(#${wingBackGradientId})`}
              />
              <path
                className="fbs-tail-feather"
                d="M78 112C42 104 22 88 24 66C50 76 70 84 92 94"
                fill="#2563EB"
              />
              <path
                d="M88 106C88 72 120 52 166 52C212 52 240 76 240 106C240 136 212 154 164 154C118 154 88 136 88 106Z"
                fill={`url(#${bodyGradientId})`}
              />
              <ellipse cx="176" cy="126" rx="40" ry="22" fill="#E0F2FE" opacity="0.95" />
              <path
                className="fbs-wing-front"
                d="M126 102C84 72 86 138 164 142C154 122 144 110 126 102Z"
                fill={`url(#${wingFrontGradientId})`}
              />
              <circle cx="212" cy="92" r="34" fill={`url(#${headGradientId})`} />
              <circle cx="224" cy="88" r="9" fill="white" />
              <circle cx="227" cy="88" r="4" fill="#0F172A" />
              <circle cx="228" cy="86" r="1.5" fill="white" />
              <path d="M240 96L268 88L242 78C236 84 236 92 240 96Z" fill="#FDBA24" />
              <path
                d="M136 74C164 72 186 82 196 102"
                stroke="#BFDBFE"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <defs>
                <linearGradient id={bodyGradientId} x1="88" y1="52" x2="240" y2="154">
                  <stop stopColor="#38BDF8" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id={headGradientId} x1="178" y1="58" x2="246" y2="128">
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id={wingFrontGradientId} x1="90" y1="72" x2="176" y2="146">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#1E40AF" />
                </linearGradient>
                <linearGradient id={wingBackGradientId} x1="74" y1="24" x2="174" y2="108">
                  <stop stopColor="#7DD3FC" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>

      <style jsx>{`
        .fbs-panel {
          position: relative;
          width: 100%;
          border-radius: 0;
          overflow: visible;
          border: none;
          outline: none;
          background: transparent;
          box-shadow: none;
          pointer-events: none;
        }

        .fbs-panel--card {
          min-height: 0;
          height: 100%;
          flex: 1;
          overflow: hidden;
        }

        .fbs-panel--modal {
          min-height: 280px;
        }

        .fbs-inner {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: inherit;
          contain: paint;
          pointer-events: auto;
          background: transparent;
        }

        .fbs-panel--card .fbs-inner {
          min-height: 0;
        }

        .fbs-clouds {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .fbs-bird-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .fbs-bird-wrapper {
          animation: fbsFloatBird 3s ease-in-out infinite;
          filter: drop-shadow(0 15px 25px rgba(37, 99, 235, 0.25));
        }

        .fbs-bird-wrapper--modal {
          animation: fbsFloatBirdModal 3s ease-in-out infinite;
          filter: drop-shadow(0 15px 25px rgba(37, 99, 235, 0.25));
        }

        .fbs-bird-svg {
          overflow: visible;
          animation: fbsBirdTilt 4s ease-in-out infinite;
        }

        .fbs-wing-front {
          transform-origin: 130px 100px;
          animation: fbsWingFrontFlap 1.2s ease-in-out infinite;
        }

        .fbs-wing-back {
          transform-origin: 130px 88px;
          animation: fbsWingBackFlap 1.2s ease-in-out infinite;
        }

        .fbs-tail-feather {
          transform-origin: 62px 86px;
          animation: fbsTailMove 1.6s ease-in-out infinite;
        }

        @keyframes fbsFloatBird {
          0% {
            transform: translateY(0px) scale(0.82);
          }
          50% {
            transform: translateY(-12px) scale(0.82);
          }
          100% {
            transform: translateY(0px) scale(0.82);
          }
        }

        @keyframes fbsFloatBirdModal {
          0% {
            transform: translateY(0px) scale(1.15);
          }
          50% {
            transform: translateY(-12px) scale(1.15);
          }
          100% {
            transform: translateY(0px) scale(1.15);
          }
        }

        @keyframes fbsBirdTilt {
          0% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
          100% {
            transform: rotate(-2deg);
          }
        }

        @keyframes fbsWingFrontFlap {
          0% {
            transform: rotate(0deg) translateY(0px);
          }
          50% {
            transform: rotate(-10deg) translateY(-6px);
          }
          100% {
            transform: rotate(0deg) translateY(0px);
          }
        }

        @keyframes fbsWingBackFlap {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(8deg) translateY(-4px);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes fbsTailMove {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-6deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .fbs-cloud,
        .fbs-cloud-small {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 999px;
          filter: blur(2px);
        }

        .fbs-cloud::before,
        .fbs-cloud::after,
        .fbs-cloud-small::before,
        .fbs-cloud-small::after {
          content: "";
          position: absolute;
          background: inherit;
          border-radius: inherit;
        }

        .fbs-cloud {
          width: 160px;
          height: 52px;
          animation: fbsMoveClouds 18s linear infinite;
        }

        .fbs-cloud::before {
          width: 70px;
          height: 70px;
          top: -28px;
          left: 20px;
        }

        .fbs-cloud::after {
          width: 80px;
          height: 80px;
          top: -36px;
          right: 18px;
        }

        .fbs-cloud-1 {
          top: 38px;
          left: -220px;
        }

        .fbs-cloud-2 {
          top: 120px;
          left: -320px;
          animation-delay: 6s;
        }

        .fbs-cloud-3 {
          top: 210px;
          left: -260px;
          animation-delay: 10s;
        }

        .fbs-cloud-4 {
          top: 70px;
          left: -420px;
          animation-delay: 13s;
        }

        .fbs-cloud-small {
          width: 90px;
          height: 28px;
          animation: fbsMoveClouds 12s linear infinite;
          opacity: 0.75;
        }

        .fbs-cloud-small::before {
          width: 36px;
          height: 36px;
          top: -12px;
          left: 14px;
        }

        .fbs-cloud-small::after {
          width: 40px;
          height: 40px;
          top: -16px;
          right: 12px;
        }

        .fbs-cloud-small-1 {
          top: 85px;
          left: -140px;
          animation-delay: 2s;
        }

        .fbs-cloud-small-2 {
          top: 170px;
          left: -240px;
          animation-delay: 5s;
        }

        .fbs-cloud-small-3 {
          top: 245px;
          left: -180px;
          animation-delay: 8s;
        }

        @keyframes fbsMoveClouds {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(900px);
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import type { HeroCardVariant } from "../types";

export function GenderAgePredictionCard({
  variant,
}: {
  variant: HeroCardVariant;
}) {
  return (
    <div
      className={`gendage-root ${variant === "card" ? "gendage-root--card" : "gendage-root--modal"}`}
    >
      <div
        className={`gendage-scene ${variant === "card" ? "gendage-scene--card" : "gendage-scene--modal"}`}
      >
        <div className="gendage-inner">
          <div className="gendage-scanner-lines" />

          <div className="gendage-face-layer">
            <div className="gendage-face-container">
              <div className="gendage-face-circle">

                {/* Hair */}
                <div className="gendage-hair" />

                {/* Eyes */}
                <div className="gendage-eye gendage-left-eye" />
                <div className="gendage-eye gendage-right-eye" />

                {/* Confused Eyebrows */}
                <div className="gendage-brow gendage-left-brow" />
                <div className="gendage-brow gendage-right-brow" />

                {/* Nose */}
                <div className="gendage-nose" />

                {/* Confused Mouth */}
                <div className="gendage-mouth" />

              </div>

              {/* Scanner Rings */}
              <div className="gendage-scanner-ring" />
              <div className="gendage-scanner-ring gendage-delay-ring" />

              {/* AI Tracking Points */}
              <div className="gendage-point gendage-p1" />
              <div className="gendage-point gendage-p2" />
              <div className="gendage-point gendage-p3" />
              <div className="gendage-point gendage-p4" />
            </div>
          </div>

          {/* Gender Prediction */}
          <div className="gendage-prediction gendage-gender-label">
            <div className="gendage-prediction-title">Gender</div>
            <div className="gendage-prediction-value gendage-gender-text">
              Male ↔ Female ↔ ??
            </div>
          </div>

          {/* Age Prediction */}
          <div className="gendage-prediction gendage-age-label">
            <div className="gendage-prediction-title">Age Prediction</div>
            <div className="gendage-prediction-value gendage-age-text">
              18? → 22? → 27? → 21?
            </div>
          </div>

          {/* Corners */}
          <div className="gendage-corner gendage-tl" />
          <div className="gendage-corner gendage-tr" />
          <div className="gendage-corner gendage-bl" />
          <div className="gendage-corner gendage-br" />
        </div>
      </div>

      <style jsx>{`
        .gendage-root {
          position: relative;
          width: 100%;
          background: transparent;
          overflow: visible;
        }

        .gendage-root--card {
          flex: 1;
          height: 100%;
          overflow: hidden;
        }

        .gendage-root--modal {
          min-height: 340px;
        }

        .gendage-scene--card {
          width: 100%;
          height: calc(340px * 0.46);
          max-height: calc(340px * 0.46);
          overflow: hidden;
          position: relative;
        }

        .gendage-scene--modal {
          width: 100%;
        }

        .gendage-inner {
          position: relative;
          width: 100%;
          min-height: 340px;
        }

        .gendage-root--card .gendage-inner {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          min-height: 340px;
          transform: translate(-50%, -50%) scale(0.46);
          transform-origin: center center;
        }

        .gendage-scanner-lines {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
            rgba(255,255,255,0.04) 1px,
            transparent 1px
          );
          background-size: 100% 8px;
          animation: gendageScanBg 6s linear infinite;
          opacity: 0.25;
        }

        .gendage-face-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gendage-face-container {
          position: relative;
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gendage-face-circle {
          position: relative;
          width: 150px;
          height: 170px;
          border-radius: 80px;
          background: linear-gradient(135deg, #FFD6B0, #EAB38D);
          animation: gendageFaceFloat 4s ease-in-out infinite;
          box-shadow: 0 0 40px rgba(255,255,255,0.08);
        }

        .gendage-hair {
          position: absolute;
          width: 140px;
          height: 70px;
          background: #111827;
          border-radius: 90px 90px 30px 30px;
          top: 0;
          left: 5px;
        }

        .gendage-eye {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #111827;
          border-radius: 999px;
          top: 76px;
        }

        .gendage-left-eye {
          left: 42px;
        }

        .gendage-right-eye {
          right: 42px;
        }

        .gendage-brow {
          position: absolute;
          width: 28px;
          height: 5px;
          background: #111827;
          border-radius: 999px;
          top: 58px;
        }

        .gendage-left-brow {
          left: 34px;
          transform: rotate(-18deg);
        }

        .gendage-right-brow {
          right: 34px;
          transform: rotate(18deg);
        }

        .gendage-nose {
          position: absolute;
          width: 10px;
          height: 24px;
          border-radius: 999px;
          background: rgba(0,0,0,0.08);
          left: 70px;
          top: 88px;
        }

        .gendage-mouth {
          position: absolute;
          width: 34px;
          height: 12px;
          border-bottom: 4px solid #111827;
          border-radius: 0 0 30px 30px;
          bottom: 38px;
          left: 58px;
          transform: rotate(-10deg);
        }

        .gendage-scanner-ring {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 999px;
          border: 2px solid rgba(34,211,238,0.6);
          animation: gendageScannerPulse 2.5s ease-out infinite;
        }

        .gendage-delay-ring {
          animation-delay: 1.2s;
        }

        .gendage-point {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #67E8F9;
          border-radius: 999px;
          box-shadow: 0 0 14px rgba(103,232,249,0.9);
          animation: gendagePointBlink 1.6s ease-in-out infinite;
        }

        .gendage-p1 {
          top: 40px;
          left: 105px;
        }

        .gendage-p2 {
          top: 95px;
          left: 52px;
        }

        .gendage-p3 {
          top: 95px;
          right: 52px;
        }

        .gendage-p4 {
          bottom: 48px;
          left: 105px;
        }

        .gendage-prediction {
          position: absolute;
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(15,23,42,0.72);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(34,211,238,0.15);
          min-width: 170px;
        }

        .gendage-gender-label {
          top: 34px;
          left: 28px;
        }

        .gendage-age-label {
          bottom: 34px;
          right: 28px;
        }

        .gendage-prediction-title {
          color: #67E8F9;
          font-size: 12px;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .gendage-prediction-value {
          color: white;
          font-size: 18px;
          font-weight: 700;
        }

        .gendage-gender-text {
          animation: gendageGenderFlash 3s infinite;
        }

        .gendage-age-text {
          animation: gendageAgeShift 2s infinite;
        }

        .gendage-corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border-color: rgba(103,232,249,0.7);
        }

        .gendage-tl {
          top: 16px;
          left: 16px;
          border-top: 3px solid;
          border-left: 3px solid;
        }

        .gendage-tr {
          top: 16px;
          right: 16px;
          border-top: 3px solid;
          border-right: 3px solid;
        }

        .gendage-bl {
          bottom: 16px;
          left: 16px;
          border-bottom: 3px solid;
          border-left: 3px solid;
        }

        .gendage-br {
          bottom: 16px;
          right: 16px;
          border-bottom: 3px solid;
          border-right: 3px solid;
        }

        @keyframes gendageScannerPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes gendageFaceFloat {
          0%,100% {
            transform: translateY(0px) rotate(-2deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes gendagePointBlink {
          0%,100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.5);
          }
        }

        @keyframes gendageGenderFlash {
          0% {
            color: #60A5FA;
            text-shadow: 0 0 12px rgba(96,165,250,0.8);
          }
          50% {
            color: #F472B6;
            text-shadow: 0 0 12px rgba(244,114,182,0.8);
          }
          100% {
            color: #60A5FA;
            text-shadow: 0 0 12px rgba(96,165,250,0.8);
          }
        }

        @keyframes gendageAgeShift {
          0%,100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes gendageScanBg {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </div>
  );
}
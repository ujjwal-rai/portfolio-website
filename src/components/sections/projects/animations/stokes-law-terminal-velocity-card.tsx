"use client";

import type { HeroCardVariant } from "../types";

export function StokesLawTerminalVelocityCard({
  variant,
}: {
  variant: HeroCardVariant;
}) {
  return (
    <div
      className={`stk-root ${variant === "card" ? "stk-root--card" : "stk-root--modal"}`}
    >
      <div
        className={`stk-scene ${variant === "card" ? "stk-scene--card" : "stk-scene--modal"}`}
      >
      <div className="stk-inner">
        <div className="stk-liquid-bg" />

        <div className="stk-bubble stk-bubble-1" />
        <div className="stk-bubble stk-bubble-2" />
        <div className="stk-bubble stk-bubble-3" />
        <div className="stk-bubble stk-bubble-4" />
        <div className="stk-bubble stk-bubble-5" />

        <div className="stk-tube-layer">
          <div className="stk-tube">
            <div className="stk-flow-line stk-line-1" />
            <div className="stk-flow-line stk-line-2" />
            <div className="stk-flow-line stk-line-3" />

            <div className="stk-ball-container">
              <div className="stk-force-up">
                <span>↑</span>
              </div>
              <div className="stk-ball">
                <div className="stk-ball-glow" />
              </div>
              <div className="stk-force-down">
                <span>↓</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stk-physics-ring stk-ring-1" />
        <div className="stk-physics-ring stk-ring-2" />

        <div className="stk-energy-wave stk-wave-left" />
        <div className="stk-energy-wave stk-wave-right" />
      </div>
      </div>

      <style jsx>{`
        .stk-root {
          position: relative;
          width: 100%;
          background: transparent;
          overflow: visible;
        }

        .stk-root--modal {
          overflow: hidden;
          min-height: 360px;
        }

        .stk-root--card {
          flex: 1;
          min-height: 0;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stk-scene--card {
          width: calc(620px * 0.38);
          height: calc(360px * 0.38);
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .stk-scene--modal {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .stk-inner {
          position: relative;
          width: 620px;
          height: 360px;
          flex-shrink: 0;
          overflow: visible;
        }

        .stk-root--modal .stk-inner {
          margin: 0 auto;
          overflow: hidden;
          border-radius: 32px;
        }

        .stk-root--card .stk-inner {
          position: absolute;
          left: 0;
          top: 0;
          transform: scale(0.38);
          transform-origin: top left;
        }

        .stk-liquid-bg {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            to bottom,
            rgba(56, 189, 248, 0.08),
            rgba(37, 99, 235, 0.14),
            rgba(15, 23, 42, 0.22)
          );
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .stk-tube-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .stk-tube {
          position: relative;
          width: 220px;
          height: 300px;
          border-radius: 999px;
          border: 2px solid rgba(125, 211, 252, 0.18);
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.03), rgba(56, 189, 248, 0.08));
          overflow: hidden;
          box-shadow: inset 0 0 40px rgba(56, 189, 248, 0.08);
        }

        .stk-tube::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
          animation: stkWaterShine 4s linear infinite;
        }

        .stk-ball-container {
          position: absolute;
          left: 50%;
          top: 40px;
          transform: translateX(-50%);
          animation: stkTerminalFall 4s ease-in-out infinite;
        }

        .stk-ball {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 30%, #f8fafc, #2563eb);
          box-shadow:
            0 0 24px rgba(59, 130, 246, 0.6),
            inset -8px -8px 18px rgba(15, 23, 42, 0.5);
        }

        .stk-ball-glow {
          position: absolute;
          inset: -10px;
          border-radius: inherit;
          border: 2px solid rgba(125, 211, 252, 0.25);
          animation: stkPulseGlow 2s ease-in-out infinite;
        }

        .stk-force-up,
        .stk-force-down {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          filter: drop-shadow(0 0 12px currentColor);
        }

        .stk-force-up {
          top: -54px;
          color: #22c55e;
          animation: stkBuoyancyForce 1.5s ease-in-out infinite;
        }

        .stk-force-down {
          bottom: -54px;
          color: #ef4444;
          animation: stkGravityForce 1.5s ease-in-out infinite;
        }

        .stk-flow-line {
          position: absolute;
          width: 120px;
          height: 2px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(125, 211, 252, 0.9), transparent);
          opacity: 0.7;
        }

        .stk-line-1 {
          top: 70px;
          animation: stkFlowMove 1.6s linear infinite;
        }

        .stk-line-2 {
          top: 150px;
          animation: stkFlowMove 1.6s linear infinite 0.5s;
        }

        .stk-line-3 {
          top: 230px;
          animation: stkFlowMove 1.6s linear infinite 1s;
        }

        .stk-bubble {
          position: absolute;
          border-radius: 999px;
          background: rgba(191, 219, 254, 0.2);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: stkBubbleRise linear infinite;
        }

        .stk-bubble-1 {
          width: 16px;
          height: 16px;
          left: 120px;
          bottom: -20px;
          animation-duration: 5s;
        }

        .stk-bubble-2 {
          width: 12px;
          height: 12px;
          right: 140px;
          bottom: -10px;
          animation-duration: 6s;
          animation-delay: 1s;
        }

        .stk-bubble-3 {
          width: 20px;
          height: 20px;
          left: 260px;
          bottom: -30px;
          animation-duration: 7s;
        }

        .stk-bubble-4 {
          width: 10px;
          height: 10px;
          right: 240px;
          bottom: -10px;
          animation-duration: 4s;
        }

        .stk-bubble-5 {
          width: 14px;
          height: 14px;
          left: 420px;
          bottom: -20px;
          animation-duration: 5.5s;
        }

        .stk-physics-ring {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(125, 211, 252, 0.14);
          animation: stkRingPulse 6s linear infinite;
        }

        .stk-ring-1 {
          width: 240px;
          height: 240px;
          left: 190px;
          top: 60px;
        }

        .stk-ring-2 {
          width: 340px;
          height: 340px;
          left: 140px;
          top: 10px;
          animation-delay: 3s;
        }

        .stk-energy-wave {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 999px;
          border: 2px dashed rgba(56, 189, 248, 0.12);
          top: 90px;
          animation: stkRotateWave 12s linear infinite;
        }

        .stk-wave-left {
          left: -60px;
        }

        .stk-wave-right {
          right: -60px;
          animation-direction: reverse;
        }

        @keyframes stkTerminalFall {
          0% {
            transform: translateX(-50%) translateY(0px);
          }
          40% {
            transform: translateX(-50%) translateY(120px);
          }
          70% {
            transform: translateX(-50%) translateY(180px);
          }
          100% {
            transform: translateX(-50%) translateY(190px);
          }
        }

        @keyframes stkBuoyancyForce {
          0%,
          100% {
            transform: translateX(-50%) translateY(0px);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
            opacity: 0.7;
          }
        }

        @keyframes stkGravityForce {
          0%,
          100% {
            transform: translateX(-50%) translateY(0px);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) translateY(8px);
            opacity: 0.7;
          }
        }

        @keyframes stkFlowMove {
          0% {
            transform: translateX(-50%) translateY(-20px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
          }
        }

        @keyframes stkBubbleRise {
          from {
            transform: translateY(0px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          to {
            transform: translateY(-420px);
            opacity: 0;
          }
        }

        @keyframes stkPulseGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.15;
          }
        }

        @keyframes stkRingPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.15;
          }
          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        @keyframes stkRotateWave {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes stkWaterShine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

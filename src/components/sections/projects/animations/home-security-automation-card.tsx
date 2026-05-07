"use client";

import type { HeroCardVariant } from "../types";

export function HomeSecurityAutomationCard({
  variant,
}: {
  variant: HeroCardVariant;
}) {
  return (
    <div
      className={`hsa-root ${variant === "card" ? "hsa-root--card" : "hsa-root--modal"}`}
    >
      <div
        className={`hsa-scene ${variant === "card" ? "hsa-scene--card" : "hsa-scene--modal"}`}
      >
      <div className="hsa-inner">
        <div className="hsa-smart-grid" />

        <div className="hsa-house-layer">
          <div className="hsa-house-wrapper">
            <div className="hsa-security-ring hsa-ring-1" />
            <div className="hsa-security-ring hsa-ring-2" />

            <div className="hsa-house">
              <div className="hsa-roof" />
              <div className="hsa-window hsa-left-window" />
              <div className="hsa-window hsa-right-window" />
              <div className="hsa-door">
                <div className="hsa-door-lock" />
              </div>
              <div className="hsa-siren">
                <div className="hsa-siren-light" />
              </div>
            </div>

            <div className="hsa-thief">
              <div className="hsa-thief-head" />
              <div className="hsa-thief-body" />
              <div className="hsa-thief-bag" />
            </div>
          </div>
        </div>

        <div className="hsa-alarm-wave hsa-wave-left" />
        <div className="hsa-alarm-wave hsa-wave-right" />

        <div className="hsa-sensor-line hsa-sensor-1" />
        <div className="hsa-sensor-line hsa-sensor-2" />

        <div className="hsa-alert-dot hsa-dot-1" />
        <div className="hsa-alert-dot hsa-dot-2" />
        <div className="hsa-alert-dot hsa-dot-3" />
        <div className="hsa-alert-dot hsa-dot-4" />
      </div>
      </div>

      <style jsx>{`
        .hsa-root {
          position: relative;
          width: 100%;
          background: transparent;
          overflow: visible;
        }

        .hsa-root--modal {
          overflow: hidden;
          min-height: 360px;
        }

        .hsa-root--card {
          flex: 1;
          min-height: 0;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hsa-scene--card {
          width: calc(620px * 0.38);
          height: calc(360px * 0.38);
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .hsa-scene--modal {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .hsa-inner {
          position: relative;
          width: 620px;
          height: 360px;
          flex-shrink: 0;
          overflow: visible;
        }

        .hsa-root--modal .hsa-inner {
          margin: 0 auto;
          overflow: hidden;
          border-radius: 32px;
        }

        .hsa-root--card .hsa-inner {
          position: absolute;
          left: 0;
          top: 0;
          transform: scale(0.38);
          transform-origin: top left;
        }

        .hsa-smart-grid {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: hsaGridMove 12s linear infinite;
          opacity: 0.25;
        }

        .hsa-house-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .hsa-house-wrapper {
          position: relative;
          width: 320px;
          height: 260px;
        }

        .hsa-house {
          position: absolute;
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%);
          width: 220px;
          height: 150px;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 40px rgba(239, 68, 68, 0.12);
        }

        .hsa-roof {
          position: absolute;
          width: 180px;
          height: 180px;
          background: linear-gradient(135deg, #334155, #111827);
          transform: rotate(45deg);
          top: -90px;
          left: 20px;
          border-radius: 20px;
        }

        .hsa-window {
          position: absolute;
          width: 42px;
          height: 42px;
          background: #38bdf8;
          border-radius: 10px;
          top: 40px;
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.5);
          animation: hsaWindowBlink 2s ease-in-out infinite;
        }

        .hsa-left-window {
          left: 34px;
        }

        .hsa-right-window {
          right: 34px;
          animation-delay: 1s;
        }

        .hsa-door {
          position: absolute;
          width: 54px;
          height: 78px;
          background: linear-gradient(135deg, #475569, #1e293b);
          border-radius: 14px 14px 8px 8px;
          bottom: 0;
          left: 83px;
        }

        .hsa-door-lock {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #f8fafc;
          right: 12px;
          top: 36px;
        }

        .hsa-siren {
          position: absolute;
          width: 44px;
          height: 24px;
          background: #7f1d1d;
          border-radius: 12px 12px 6px 6px;
          top: -16px;
          left: 88px;
          overflow: visible;
        }

        .hsa-siren-light {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: #ef4444;
          animation: hsaSirenFlash 0.5s linear infinite;
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.9);
        }

        .hsa-thief {
          position: absolute;
          width: 70px;
          height: 120px;
          left: -20px;
          bottom: 30px;
          animation: hsaThiefSneak 4s ease-in-out infinite;
        }

        .hsa-thief-head {
          position: absolute;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: #111827;
          left: 18px;
          top: 0;
        }

        .hsa-thief-body {
          position: absolute;
          width: 44px;
          height: 64px;
          background: linear-gradient(135deg, #1f2937, #000000);
          border-radius: 20px;
          left: 13px;
          top: 28px;
        }

        .hsa-thief-bag {
          position: absolute;
          width: 32px;
          height: 42px;
          background: #334155;
          border-radius: 16px;
          right: -2px;
          top: 40px;
          animation: hsaBagBounce 1s ease-in-out infinite;
        }

        .hsa-security-ring {
          position: absolute;
          border-radius: 999px;
          border: 2px solid rgba(239, 68, 68, 0.15);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: hsaSecurityPulse 3s linear infinite;
        }

        .hsa-ring-1 {
          width: 240px;
          height: 240px;
        }

        .hsa-ring-2 {
          width: 340px;
          height: 340px;
          animation-delay: 1.5s;
        }

        .hsa-alarm-wave {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          border: 2px dashed rgba(239, 68, 68, 0.18);
          top: 70px;
          animation: hsaRotateWave 8s linear infinite;
        }

        .hsa-wave-left {
          left: -80px;
        }

        .hsa-wave-right {
          right: -80px;
          animation-direction: reverse;
        }

        .hsa-sensor-line {
          position: absolute;
          width: 120px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.9), transparent);
        }

        .hsa-sensor-1 {
          top: 120px;
          left: 110px;
          animation: hsaSensorScan1 1.5s linear infinite;
        }

        .hsa-sensor-2 {
          top: 160px;
          right: 110px;
          animation: hsaSensorScan2 1.5s linear infinite;
          animation-delay: 0.7s;
        }

        .hsa-alert-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #ef4444;
          box-shadow: 0 0 14px rgba(239, 68, 68, 0.9);
          animation: hsaAlertBlink 1s ease-in-out infinite;
        }

        .hsa-dot-1 {
          top: 40px;
          left: 160px;
        }
        .hsa-dot-2 {
          top: 70px;
          right: 160px;
          animation-delay: 0.3s;
        }
        .hsa-dot-3 {
          bottom: 60px;
          left: 200px;
          animation-delay: 0.6s;
        }
        .hsa-dot-4 {
          bottom: 40px;
          right: 200px;
          animation-delay: 0.9s;
        }

        @keyframes hsaThiefSneak {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(180px);
          }
          100% {
            transform: translateX(220px);
          }
        }

        @keyframes hsaSirenFlash {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
        }

        @keyframes hsaSecurityPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }

        @keyframes hsaRotateWave {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes hsaSensorScan1 {
          0% {
            opacity: 0;
            transform: rotate(20deg) translateX(-20px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(20deg) translateX(20px);
          }
        }

        @keyframes hsaSensorScan2 {
          0% {
            opacity: 0;
            transform: rotate(-20deg) translateX(-20px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(-20deg) translateX(20px);
          }
        }

        @keyframes hsaAlertBlink {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }

        @keyframes hsaBagBounce {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }

        @keyframes hsaWindowBlink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes hsaGridMove {
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

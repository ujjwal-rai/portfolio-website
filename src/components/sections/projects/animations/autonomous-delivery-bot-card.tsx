"use client";

import type { HeroCardVariant } from "../types";

export function AutonomousDeliveryBotCard({
  variant,
}: {
  variant: HeroCardVariant;
}) {
  return (
    <div
      className={`adb-root ${variant === "card" ? "adb-root--card" : "adb-root--modal"}`}
    >
      <div
        className={`adb-scene ${variant === "card" ? "adb-scene--card" : "adb-scene--modal"}`}
      >
      <div className="adb-inner">
        <div className="adb-cyber-grid" />

        <div className="adb-nav-path" />

        <div className="adb-door-wrapper">
          <div className="adb-door">
            <div className="adb-door-light" />
            <div className="adb-door-handle" />
          </div>

          <div className="adb-knock-ring adb-kring-1" />
          <div className="adb-knock-ring adb-kring-2" />
        </div>

        <div className="adb-robot-wrapper">
          <div className="adb-robot-shadow" />

          <div className="adb-robot">
            <div className="adb-robot-head">
              <div className="adb-eye adb-left-eye" />
              <div className="adb-eye adb-right-eye" />

              <div className="adb-mouth" />

              <div className="adb-antenna">
                <div className="adb-antenna-dot" />
              </div>
            </div>

            <div className="adb-robot-body">
              <div className="adb-parcel">
                <div className="adb-parcel-tape" />
              </div>

              <div className="adb-robot-arm">
                <div className="adb-robot-hand" />
              </div>
            </div>

            <div className="adb-wheel adb-left-wheel" />
            <div className="adb-wheel adb-right-wheel" />
          </div>
        </div>

        <div className="adb-nav-dot adb-ndot-1" />
        <div className="adb-nav-dot adb-ndot-2" />
        <div className="adb-nav-dot adb-ndot-3" />

        <div className="adb-signal-wave adb-sw-1" />
        <div className="adb-signal-wave adb-sw-2" />
      </div>
      </div>

      <style jsx>{`
          .adb-root {
            position: relative;
            width: 100%;
            background: transparent;
            overflow: visible;
          }

          .adb-root--card {
            flex: 1;
            min-height: 0;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .adb-root--modal {
            width: 100%;
          }

          .adb-scene--card {
            width: calc(620px * 0.38);
            height: calc(360px * 0.38);
            overflow: hidden;
            position: relative;
            flex-shrink: 0;
          }

          .adb-scene--modal {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .adb-inner {
            position: relative;
            width: 620px;
            height: 360px;
            flex-shrink: 0;
            overflow: hidden;
            border-radius: 32px;
            background: transparent;
          }

          .adb-root--modal .adb-inner {
            margin: 0 auto;
            min-height: 360px;
          }

          .adb-root--card .adb-inner {
            position: absolute;
            left: 0;
            top: 0;
            transform: scale(0.38);
            transform-origin: top left;
          }

          .adb-cyber-grid {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
            background-size: 36px 36px;
            animation: adbGridMove 10s linear infinite;
            opacity: 0.3;
          }

          .adb-door-wrapper {
            position: absolute;
            right: 80px;
            bottom: 60px;
            width: 120px;
            height: 220px;
          }

          .adb-door {
            position: absolute;
            inset: 0;
            border-radius: 22px;
            background: linear-gradient(135deg, #1e293b, #0f172a);
            border: 2px solid rgba(255, 255, 255, 0.08);
            overflow: hidden;
            box-shadow: 0 0 30px rgba(56, 189, 248, 0.15);
          }

          .adb-door-light {
            position: absolute;
            top: 24px;
            left: 28px;
            width: 64px;
            height: 12px;
            border-radius: 999px;
            background: #22c55e;
            box-shadow: 0 0 14px rgba(34, 197, 94, 0.8);
            animation: adbLightBlink 2s ease-in-out infinite;
          }

          .adb-door-handle {
            position: absolute;
            width: 10px;
            height: 44px;
            border-radius: 999px;
            background: #cbd5e1;
            right: 18px;
            top: 88px;
          }

          .adb-robot-wrapper {
            position: absolute;
            left: 120px;
            bottom: 55px;
            animation: adbRobotMove 5s ease-in-out infinite;
          }

          .adb-robot-shadow {
            position: absolute;
            width: 130px;
            height: 24px;
            background: rgba(0, 0, 0, 0.25);
            border-radius: 999px;
            bottom: -12px;
            left: -10px;
            filter: blur(8px);
            animation: adbShadowMove 2s ease-in-out infinite;
          }

          .adb-robot {
            position: relative;
            width: 120px;
            height: 180px;
          }

          .adb-robot-head {
            position: absolute;
            width: 90px;
            height: 76px;
            border-radius: 24px;
            background: linear-gradient(135deg, #38bdf8, #2563eb);
            left: 15px;
            top: 0;
            box-shadow: 0 0 28px rgba(56, 189, 248, 0.35);
            animation: adbRobotBounce 2s ease-in-out infinite;
          }

          .adb-eye {
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 999px;
            background: white;
            top: 24px;
            animation: adbEyeBlink 3s infinite;
          }

          .adb-eye::after {
            content: "";
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: #111827;
            top: 5px;
            left: 5px;
          }

          .adb-left-eye {
            left: 20px;
          }

          .adb-right-eye {
            right: 20px;
          }

          .adb-mouth {
            position: absolute;
            width: 30px;
            height: 10px;
            border-bottom: 4px solid white;
            border-radius: 0 0 20px 20px;
            bottom: 14px;
            left: 30px;
          }

          .adb-antenna {
            position: absolute;
            width: 4px;
            height: 28px;
            background: #67e8f9;
            left: 43px;
            top: -22px;
            border-radius: 999px;
          }

          .adb-antenna-dot {
            position: absolute;
            width: 14px;
            height: 14px;
            border-radius: 999px;
            background: #f472b6;
            top: -8px;
            left: -5px;
            animation: adbAntennaGlow 1s ease-in-out infinite;
          }

          .adb-robot-body {
            position: absolute;
            width: 110px;
            height: 90px;
            border-radius: 24px;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            left: 5px;
            top: 72px;
            border: 2px solid rgba(255, 255, 255, 0.08);
          }

          .adb-parcel {
            position: absolute;
            width: 46px;
            height: 38px;
            border-radius: 10px;
            background: linear-gradient(135deg, #f59e0b, #d97706);
            left: -34px;
            top: 22px;
            animation: adbParcelBounce 1.2s ease-in-out infinite;
          }

          .adb-parcel-tape {
            position: absolute;
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.4);
            top: 16px;
          }

          .adb-robot-arm {
            position: absolute;
            width: 52px;
            height: 10px;
            background: #38bdf8;
            left: -12px;
            top: 34px;
            transform-origin: right center;
            border-radius: 999px;
            animation: adbKnockDoor 1s ease-in-out infinite;
          }

          .adb-robot-hand {
            position: absolute;
            width: 14px;
            height: 14px;
            border-radius: 999px;
            background: white;
            left: -4px;
            top: -2px;
          }

          .adb-wheel {
            position: absolute;
            width: 28px;
            height: 28px;
            border-radius: 999px;
            background: #111827;
            bottom: -10px;
            border: 4px solid #38bdf8;
            animation: adbWheelSpin 1s linear infinite;
          }

          .adb-left-wheel {
            left: 10px;
          }

          .adb-right-wheel {
            right: 10px;
          }

          .adb-nav-path {
            position: absolute;
            left: 80px;
            right: 180px;
            bottom: 88px;
            height: 4px;
            border-radius: 999px;
            background: linear-gradient(
              90deg,
              rgba(56, 189, 248, 0),
              rgba(56, 189, 248, 0.9),
              rgba(56, 189, 248, 0)
            );
            animation: adbPathFlow 2s linear infinite;
          }

          .adb-knock-ring {
            position: absolute;
            border-radius: 999px;
            border: 2px solid rgba(255, 255, 255, 0.2);
            left: -18px;
            top: 92px;
            animation: adbKnockPulse 1s ease-out infinite;
          }

          .adb-kring-1 {
            width: 30px;
            height: 30px;
          }

          .adb-kring-2 {
            width: 46px;
            height: 46px;
            left: -26px;
            top: 84px;
            animation-delay: 0.4s;
          }

          .adb-nav-dot {
            position: absolute;
            width: 12px;
            height: 12px;
            border-radius: 999px;
            background: #38bdf8;
            box-shadow: 0 0 14px rgba(56, 189, 248, 0.8);
            animation: adbDotPulse 1.5s ease-in-out infinite;
          }

          .adb-ndot-1 {
            left: 180px;
            bottom: 82px;
          }

          .adb-ndot-2 {
            left: 290px;
            bottom: 82px;
            animation-delay: 0.5s;
          }

          .adb-ndot-3 {
            left: 400px;
            bottom: 82px;
            animation-delay: 1s;
          }

          .adb-signal-wave {
            position: absolute;
            border-radius: 999px;
            border: 2px dashed rgba(56, 189, 248, 0.12);
            animation: adbRotateWave 10s linear infinite;
          }

          .adb-sw-1 {
            width: 220px;
            height: 220px;
            left: -80px;
            top: 70px;
          }

          .adb-sw-2 {
            width: 220px;
            height: 220px;
            right: -80px;
            top: 70px;
            animation-direction: reverse;
          }

          @keyframes adbRobotMove {
            0%,
            100% {
              transform: translateX(0px);
            }
            50% {
              transform: translateX(210px);
            }
          }

          @keyframes adbKnockDoor {
            0%,
            100% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(-35deg);
            }
          }

          @keyframes adbKnockPulse {
            0% {
              transform: scale(0.8);
              opacity: 0.8;
            }
            100% {
              transform: scale(1.8);
              opacity: 0;
            }
          }

          @keyframes adbRobotBounce {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
          }

          @keyframes adbParcelBounce {
            0%,
            100% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(-6deg);
            }
          }

          @keyframes adbAntennaGlow {
            0%,
            100% {
              transform: scale(1);
              box-shadow: 0 0 10px rgba(244, 114, 182, 0.8);
            }
            50% {
              transform: scale(1.3);
              box-shadow: 0 0 24px rgba(244, 114, 182, 1);
            }
          }

          @keyframes adbWheelSpin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes adbPathFlow {
            0% {
              opacity: 0.2;
              transform: translateX(-10px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0.2;
              transform: translateX(10px);
            }
          }

          @keyframes adbDotPulse {
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

          @keyframes adbRotateWave {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes adbLightBlink {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @keyframes adbEyeBlink {
            0%,
            94%,
            100% {
              transform: scaleY(1);
            }
            96% {
              transform: scaleY(0.1);
            }
          }

          @keyframes adbShadowMove {
            0%,
            100% {
              transform: scaleX(1);
            }
            50% {
              transform: scaleX(0.9);
            }
          }

          @keyframes adbGridMove {
            0% {
              transform: translateY(0px);
            }
            100% {
              transform: translateY(36px);
            }
          }
        `}</style>
    </div>
  );
}

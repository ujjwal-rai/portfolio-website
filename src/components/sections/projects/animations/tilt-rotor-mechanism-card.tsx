"use client";

import type { HeroCardVariant } from "../types";

export function TiltRotorMechanismCard({
  variant,
}: {
  variant: HeroCardVariant;
}) {
  return (
    <div
      className={`tr-root ${variant === "card" ? "tr-root--card" : "tr-root--modal"}`}
    >
      <div
        className={`tr-scene ${variant === "card" ? "tr-scene--card" : "tr-scene--modal"}`}
      >
      <div className="tr-inner">
        <div className="tr-hud-grid" />

        <div className="tr-aircraft-layer">
          <div className="tr-aircraft">
            <div className="tr-rotor-system tr-left-system">
              <div className="tr-rotor-arm" />
              <div className="tr-rotor-engine">
                <div className="tr-rotor-blades">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="tr-fuselage">
              <div className="tr-cockpit" />
              <div className="tr-body-glow" />
            </div>

            <div className="tr-rotor-system tr-right-system">
              <div className="tr-rotor-arm" />
              <div className="tr-rotor-engine">
                <div className="tr-rotor-blades">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tr-air-flow tr-flow-1" />
        <div className="tr-air-flow tr-flow-2" />
        <div className="tr-air-flow tr-flow-3" />

        <div className="tr-tech-ring tr-ring-1" />
        <div className="tr-tech-ring tr-ring-2" />
      </div>
      </div>

      <style jsx>{`
        .tr-root {
          position: relative;
          width: 100%;
          background: transparent;
          border: none;
          border-radius: 0;
          overflow: visible;
        }

        .tr-root--modal {
          overflow: hidden;
          min-height: 340px;
        }

        .tr-root--card {
          flex: 1;
          min-height: 0;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Fixed layout box so scaled scene does not reserve full design size (transform ignores layout). */
        .tr-scene--card {
          width: calc(620px * 0.38);
          height: calc(340px * 0.38);
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .tr-scene--modal {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .tr-inner {
          position: relative;
          width: 620px;
          height: 340px;
          flex-shrink: 0;
          overflow: visible;
        }

        .tr-root--modal .tr-inner {
          margin: 0 auto;
          overflow: hidden;
        }

        .tr-root--card .tr-inner {
          position: absolute;
          left: 0;
          top: 0;
          transform: scale(0.38);
          transform-origin: top left;
        }

        .tr-hud-grid {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: trGridMove 12s linear infinite;
        }

        .tr-aircraft-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .tr-aircraft {
          position: relative;
          width: 420px;
          height: 180px;
          animation: trAircraftFloat 4s ease-in-out infinite;
        }

        .tr-fuselage {
          position: absolute;
          left: 110px;
          top: 58px;
          width: 200px;
          height: 64px;
          border-radius: 999px;
          background: linear-gradient(135deg, #38bdf8, #2563eb);
          box-shadow: 0 0 40px rgba(56, 189, 248, 0.25);
        }

        .tr-fuselage::before {
          content: "";
          position: absolute;
          right: -28px;
          top: 12px;
          width: 50px;
          height: 40px;
          border-radius: 50%;
          background: inherit;
        }

        .tr-cockpit {
          position: absolute;
          width: 56px;
          height: 28px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 30px 30px 12px 12px;
          left: 28px;
          top: 14px;
        }

        .tr-body-glow {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .tr-rotor-system {
          position: absolute;
          top: 0;
          width: 120px;
          height: 180px;
          animation: trTiltRotor 5s ease-in-out infinite;
          transform-origin: center center;
        }

        .tr-left-system {
          left: 0;
        }

        .tr-right-system {
          right: 0;
        }

        .tr-rotor-arm {
          position: absolute;
          width: 100px;
          height: 14px;
          background: linear-gradient(90deg, #1e3a8a, #38bdf8);
          top: 82px;
          border-radius: 999px;
        }

        .tr-left-system .tr-rotor-arm {
          left: 20px;
        }

        .tr-right-system .tr-rotor-arm {
          right: 20px;
        }

        .tr-rotor-engine {
          position: absolute;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          background: radial-gradient(circle, #67e8f9, #1d4ed8);
          top: 60px;
          box-shadow: 0 0 25px rgba(103, 232, 249, 0.4);
        }

        .tr-left-system .tr-rotor-engine {
          left: -2px;
        }

        .tr-right-system .tr-rotor-engine {
          right: -2px;
        }

        .tr-rotor-blades {
          position: absolute;
          inset: -44px;
          animation: trSpinRotor 0.18s linear infinite;
        }

        .tr-rotor-blades span {
          position: absolute;
          width: 6px;
          height: 140px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            rgba(125, 211, 252, 0.9),
            rgba(255, 255, 255, 0)
          );
          left: 50%;
          top: 50%;
          transform-origin: center center;
          margin-left: -3px;
          margin-top: -70px;
          border-radius: 999px;
          filter: blur(1px);
        }

        .tr-rotor-blades span:nth-child(1) {
          transform: rotate(0deg);
        }

        .tr-rotor-blades span:nth-child(2) {
          transform: rotate(45deg);
        }

        .tr-rotor-blades span:nth-child(3) {
          transform: rotate(90deg);
        }

        .tr-rotor-blades span:nth-child(4) {
          transform: rotate(135deg);
        }

        .tr-air-flow {
          position: absolute;
          width: 180px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(103, 232, 249, 0.7),
            transparent
          );
          animation: trAirflowMove 2s linear infinite;
        }

        .tr-flow-1 {
          top: 90px;
          left: 60px;
        }

        .tr-flow-2 {
          top: 140px;
          right: 80px;
          animation-delay: 0.5s;
        }

        .tr-flow-3 {
          bottom: 70px;
          left: 180px;
          animation-delay: 1s;
        }

        .tr-tech-ring {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(56, 189, 248, 0.18);
          animation: trTechPulse 5s linear infinite;
        }

        .tr-ring-1 {
          width: 220px;
          height: 220px;
          left: 120px;
          top: 60px;
        }

        .tr-ring-2 {
          width: 320px;
          height: 320px;
          left: 70px;
          top: 10px;
          animation-delay: 2s;
        }

        @keyframes trSpinRotor {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes trTiltRotor {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-65deg);
          }
        }

        @keyframes trAircraftFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes trAirflowMove {
          0% {
            transform: translateX(-40px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(40px);
            opacity: 0;
          }
        }

        @keyframes trTechPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }

        @keyframes trGridMove {
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

"use client";

import type { HeroCardVariant } from "../types";

export function ChatbotYappingCard({
  variant,
}: {
  variant: HeroCardVariant;
}) {
  return (
    <div
      className={`yap-root ${variant === "card" ? "yap-root--card" : "yap-root--modal"}`}
    >
      <div
        className={`yap-scene ${variant === "card" ? "yap-scene--card" : "yap-scene--modal"}`}
      >
      <div className="yap-inner">
        <div className="yap-chat-wave yap-wave-1" />
        <div className="yap-chat-wave yap-wave-2" />
        <div className="yap-chat-wave yap-wave-3" />

        <div className="yap-robot-layer">
          <div className="yap-robot-container">
            <div className="yap-robot-head">
              <div className="yap-robot-eye yap-left-eye" />
              <div className="yap-robot-eye yap-right-eye" />
              <div className="yap-robot-mouth">
                <div className="yap-teeth" />
              </div>
              <div className="yap-antenna">
                <div className="yap-antenna-dot" />
              </div>
            </div>
            <div className="yap-speech yap-speech-1">bla bla bla</div>
            <div className="yap-speech yap-speech-2">HAHA 😂</div>
            <div className="yap-speech yap-speech-3">beep boop</div>
          </div>
        </div>

        <div className="yap-msg yap-msg-1" />
        <div className="yap-msg yap-msg-2" />
        <div className="yap-msg yap-msg-3" />
        <div className="yap-msg yap-msg-4" />
      </div>
      </div>

      <style jsx>{`
        .yap-root {
          position: relative;
          width: 100%;
          background: transparent;
          border: none;
          border-radius: 0;
          overflow: visible;
        }

        .yap-root--card {
          flex: 1;
          min-height: 0;
          height: 100%;
          overflow: hidden;
        }

        .yap-root--modal {
          min-height: 340px;
        }

        /* Waves/speech extend past the robot — smaller scale so nothing clips in the grid card. */
        .yap-scene--card {
          width: 100%;
          height: calc(340px * 0.46);
          max-height: calc(340px * 0.46);
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .yap-scene--modal {
          width: 100%;
        }

        .yap-inner {
          position: relative;
          width: 100%;
          min-height: 340px;
        }

        .yap-root--card .yap-inner {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          min-height: 340px;
          transform: translate(-50%, -50%) scale(0.46);
          transform-origin: center center;
        }

        .yap-robot-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .yap-robot-container {
          position: relative;
          width: 240px;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .yap-robot-head {
          position: relative;
          width: 170px;
          height: 170px;
          border-radius: 36px;
          background: linear-gradient(135deg, #38bdf8, #2563eb);
          box-shadow: 0 0 40px rgba(56, 189, 248, 0.35);
          animation: yapRobotTalk 1.2s ease-in-out infinite;
        }

        .yap-robot-head::before {
          content: "";
          position: absolute;
          inset: 10px;
          border-radius: 28px;
          border: 2px solid rgba(255, 255, 255, 0.15);
        }

        .yap-robot-eye {
          position: absolute;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 999px;
          top: 52px;
          animation: yapEyeBlink 2s infinite;
        }

        .yap-robot-eye::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          background: #111827;
          border-radius: 999px;
          top: 7px;
          left: 7px;
        }

        .yap-left-eye {
          left: 42px;
        }

        .yap-right-eye {
          right: 42px;
        }

        .yap-robot-mouth {
          position: absolute;
          width: 74px;
          height: 36px;
          background: #0f172a;
          border-radius: 0 0 30px 30px;
          left: 48px;
          bottom: 42px;
          overflow: hidden;
          animation: yapLaugh 0.6s ease-in-out infinite;
        }

        .yap-teeth {
          width: 100%;
          height: 12px;
          background: repeating-linear-gradient(
            90deg,
            white,
            white 8px,
            #cbd5e1 8px,
            #cbd5e1 10px
          );
        }

        .yap-antenna {
          position: absolute;
          width: 6px;
          height: 36px;
          background: #67e8f9;
          top: -28px;
          left: 82px;
          border-radius: 999px;
        }

        .yap-antenna-dot {
          position: absolute;
          width: 18px;
          height: 18px;
          background: #f472b6;
          border-radius: 999px;
          top: -10px;
          left: -6px;
          animation: yapAntennaGlow 1s ease-in-out infinite;
        }

        .yap-speech {
          position: absolute;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.8);
          color: white;
          font-weight: 700;
          font-size: 14px;
          border: 1px solid rgba(103, 232, 249, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: yapSpeechFloat 2s ease-in-out infinite;
          white-space: nowrap;
        }

        .yap-speech-1 {
          top: 30px;
          left: -30px;
        }

        .yap-speech-2 {
          top: 20px;
          right: -40px;
          animation-delay: 0.6s;
        }

        .yap-speech-3 {
          bottom: 10px;
          right: -10px;
          animation-delay: 1.2s;
        }

        .yap-msg {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 6px;
          background: linear-gradient(135deg, #38bdf8, #a855f7);
          opacity: 0.7;
          animation: yapFloatMsg 4s ease-in-out infinite;
        }

        .yap-msg-1 {
          top: 40px;
          left: 80px;
        }

        .yap-msg-2 {
          top: 100px;
          right: 70px;
          animation-delay: 1s;
        }

        .yap-msg-3 {
          bottom: 60px;
          left: 120px;
          animation-delay: 2s;
        }

        .yap-msg-4 {
          bottom: 30px;
          right: 120px;
          animation-delay: 3s;
        }

        .yap-chat-wave {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 999px;
          border: 2px solid rgba(56, 189, 248, 0.12);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: yapWaveExpand 4s linear infinite;
          pointer-events: none;
        }

        .yap-wave-2 {
          animation-delay: 1.2s;
        }

        .yap-wave-3 {
          animation-delay: 2.4s;
        }

        @keyframes yapRobotTalk {
          0%,
          100% {
            transform: rotate(-2deg) translateY(0px);
          }
          50% {
            transform: rotate(2deg) translateY(-8px);
          }
        }

        @keyframes yapLaugh {
          0%,
          100% {
            height: 36px;
          }
          50% {
            height: 48px;
          }
        }

        @keyframes yapEyeBlink {
          0%,
          90%,
          100% {
            transform: scaleY(1);
          }
          95% {
            transform: scaleY(0.1);
          }
        }

        @keyframes yapAntennaGlow {
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

        @keyframes yapSpeechFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes yapFloatMsg {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(12deg);
          }
        }

        @keyframes yapWaveExpand {
          0% {
            transform: translate(-50%, -50%) scale(0.7);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

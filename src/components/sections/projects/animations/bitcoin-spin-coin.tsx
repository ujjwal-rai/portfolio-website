"use client";

import type { CSSProperties } from "react";

export type BitcoinSpinCoinProps = {
  /** Pixel diameter of the coin */
  sizePx: number;
  /** Half-thickness of the coin in px (CSS --coin-depth) */
  depthPx: number;
};

/** 3D-style spinning Bitcoin used for the Cryptage / crypto tracker hero */
export function BitcoinSpinCoin({ sizePx, depthPx }: BitcoinSpinCoinProps) {
  const coinStyle: CSSProperties = {
    width: sizePx,
    height: sizePx,
    ["--coin-depth" as string]: `${depthPx}px`,
  };

  return (
    <div className="btc-coin-wrapper" style={{ width: sizePx, height: sizePx }}>
      <div className="btc-bitcoin-coin" style={coinStyle}>
        <div className="btc-coin-face btc-front">
          <div className="btc-symbol">₿</div>
        </div>
        <div className="btc-coin-face btc-back">
          <div className="btc-symbol">₿</div>
        </div>
        <div className="btc-coin-edge" />
      </div>

      <style jsx>{`
        .btc-coin-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1400px;
        }

        .btc-bitcoin-coin {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: btcSpinCoin 5s linear infinite;
          will-change: transform;
          filter: drop-shadow(0 0 30px rgba(255, 180, 0, 0.5));
        }

        .btc-coin-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(
            circle at 30% 30%,
            #ffe082,
            #ffb300 45%,
            #ff8f00 70%,
            #e65100 100%
          );
          border: 6px solid rgba(255, 255, 255, 0.15);
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.25),
            inset 0 -10px 25px rgba(0, 0, 0, 0.35),
            0 0 35px rgba(255, 170, 0, 0.4);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
        }

        .btc-coin-face::before {
          content: "";
          position: absolute;
          inset: 12px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .btc-coin-face::after {
          content: "";
          position: absolute;
          width: 60%;
          height: 14px;
          background: rgba(255, 255, 255, 0.25);
          top: 20px;
          left: -30px;
          transform: rotate(-25deg);
          filter: blur(8px);
        }

        .btc-front {
          transform: translateZ(var(--coin-depth, 14px));
        }

        .btc-back {
          transform: rotateY(180deg) translateZ(var(--coin-depth, 14px));
        }

        .btc-coin-edge {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: repeating-linear-gradient(90deg, #ffcc33 0px, #ffb300 4px, #f57c00 8px);
          transform: rotateY(90deg);
          width: calc(var(--coin-depth, 14px) * 2);
          left: 50%;
          margin-left: calc(var(--coin-depth, 14px) * -1);
          height: 100%;
          box-shadow: 0 0 15px rgba(255, 180, 0, 0.5);
        }

        .btc-symbol {
          font-size: 90px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.98);
          text-shadow: 0 2px 0 rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          font-family: Arial, sans-serif;
          line-height: 1;
        }

        @keyframes btcSpinCoin {
          0% {
            transform: rotateY(0deg) rotateX(8deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(8deg);
          }
        }
      `}</style>
    </div>
  );
}

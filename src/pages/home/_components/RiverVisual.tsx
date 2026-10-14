// Style
import "./RiverVisual.css";

const OFFSETS = [0, 12, 24];
const OPACITY = [1, 0.55, 0.3];

export function RiverVisual() {
  return (
    <svg
      className="river anim-fade-in"
      viewBox="0 0 480 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {OFFSETS.map((offset, index) => (
        <g
          key={offset}
          transform={`translate(0 ${offset})`}
          opacity={OPACITY[index]}
        >
          <path
            className="river__trunk"
            d="M-20 90C50 50 110 140 190 150S240 160 250 160"
          />
          <path
            className="river__tech"
            d="M250 160C320 165 345 105 410 112S480 150 520 130"
          />
          <path
            className="river__media"
            d="M250 160C310 200 335 260 400 268S475 250 520 290"
          />
        </g>
      ))}
      <text className="river__label" x="372" y="84">
        BBT
      </text>
      <text className="river__label" x="372" y="330">
        BBM
      </text>
    </svg>
  );
}

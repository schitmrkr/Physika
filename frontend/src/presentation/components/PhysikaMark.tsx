export const PhysikaMark = () => (
  <svg viewBox="0 0 48 48" className="brand__glyph" aria-hidden="true">
    <defs>
      <radialGradient id="physika-lobe-blue" cx="38%" cy="28%" r="78%">
        <stop offset="0%" stopColor="#e8ecff" />
        <stop offset="42%" stopColor="#7188ff" />
        <stop offset="100%" stopColor="#2646f0" />
      </radialGradient>
      <radialGradient id="physika-lobe-ember" cx="36%" cy="24%" r="82%">
        <stop offset="0%" stopColor="#ffe3d9" />
        <stop offset="44%" stopColor="#f2825d" />
        <stop offset="100%" stopColor="#c93a15" />
      </radialGradient>
      <radialGradient id="physika-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fffdf8" />
        <stop offset="55%" stopColor="#fffdf8" />
        <stop offset="100%" stopColor="#fffdf8" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="24" cy="24" r="19" fill="none" stroke="#fffdf8" strokeOpacity="0.1" />
    <circle cx="24" cy="24" r="16.4" fill="none" stroke="#fffdf8" strokeOpacity="0.2" />
    <ellipse
      cx="24"
      cy="24"
      rx="7.8"
      ry="16.4"
      fill="none"
      stroke="#fffdf8"
      strokeOpacity="0.16"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="16.4"
      ry="6.1"
      fill="none"
      stroke="#fffdf8"
      strokeOpacity="0.16"
    />

    <path
      d="M8.4 24C8.4 20.6 15.4 17.9 24 17.9s15.6 2.7 15.6 6.1"
      fill="none"
      stroke="#fffdf8"
      strokeOpacity="0.34"
      strokeWidth="1.1"
    />

    <path
      d="M24 22.4C20.6 21.5 18.7 18 18.7 13.5 18.7 8.8 21 4.8 24 3 27 4.8 29.3 8.8 29.3 13.5 29.3 18 27.4 21.5 24 22.4Z"
      fill="url(#physika-lobe-blue)"
      stroke="#fffdf8"
      strokeOpacity="0.4"
      strokeWidth="0.8"
    />
    <path
      d="M24 25.6C20.6 26.5 18.7 30 18.7 34.5 18.7 39.2 21 43.2 24 45 27 43.2 29.3 39.2 29.3 34.5 29.3 30 27.4 26.5 24 25.6Z"
      fill="url(#physika-lobe-ember)"
      stroke="#fffdf8"
      strokeOpacity="0.35"
      strokeWidth="0.8"
    />

    <path
      d="M8.4 24C8.4 27.4 15.4 30.1 24 30.1s15.6-2.7 15.6-6.1"
      fill="none"
      stroke="#fffdf8"
      strokeOpacity="0.78"
      strokeWidth="1.2"
    />
    <ellipse cx="24" cy="24" rx="10.6" ry="2.2" fill="#fffdf8" fillOpacity="0.1" />
    <circle cx="24" cy="24" r="4.2" fill="url(#physika-core)" />
    <circle cx="24" cy="24" r="1.35" fill="#fffdf8" />
    <circle cx="21.4" cy="11" r="1.2" fill="#fffdf8" fillOpacity="0.55" />
  </svg>
);

/** A thin strip of Kashi-tile pattern, after the glazed tilework of old Lahore. */
export default function TileBand() {
  return (
    <div className="tileband" aria-hidden="true">
      <svg width="100%" height="28" preserveAspectRatio="none">
        <defs>
          <pattern id="kashi" width="28" height="28" patternUnits="userSpaceOnUse">
            <rect width="28" height="28" fill="#1c2e4a" />
            <path d="M14 3 L17 11 L25 14 L17 17 L14 25 L11 17 L3 14 L11 11 Z" fill="#3e8c84" />
            <circle cx="14" cy="14" r="2.4" fill="#d9a03f" />
            <circle cx="0" cy="0" r="2" fill="#e9efec" />
            <circle cx="28" cy="0" r="2" fill="#e9efec" />
            <circle cx="0" cy="28" r="2" fill="#e9efec" />
            <circle cx="28" cy="28" r="2" fill="#e9efec" />
          </pattern>
        </defs>
        <rect width="100%" height="28" fill="url(#kashi)" />
      </svg>
    </div>
  );
}

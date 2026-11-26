import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#2a1c14" }}>
        <svg width="120" height="120" viewBox="0 0 32 32">
          <ellipse cx="16" cy="16" rx="7" ry="10" transform="rotate(30 16 16)" fill="#d3a374" />
          <path d="M11.5 22.5c3.2-3.2 3.6-9 9-13" stroke="#2a1c14" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    ),
    size
  );
}

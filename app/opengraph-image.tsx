import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Robin Chabert — Développeur Web Freelance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f0ece6",
            lineHeight: 1.1,
          }}
        >
          Robin Chabert
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#e85d3a",
            marginTop: 20,
          }}
        >
          Développeur Web Freelance
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#a8a29e",
            marginTop: 24,
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Sites vitrine · E-commerce · Applications web sur mesure
        </div>
      </div>
    ),
    { ...size }
  );
}

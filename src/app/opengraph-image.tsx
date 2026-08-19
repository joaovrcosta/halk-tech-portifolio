import { ImageResponse } from "next/og";
import { defaultTitle, siteName } from "@/lib/site";

export const alt = defaultTitle;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e0e0e",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          {siteName}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 500,
            }}
          >
            You feel the brand, we build the experience
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.4,
              maxWidth: 640,
            }}
          >
            Digital products, brand platforms, and e-commerce systems that convert.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.legalName} — Ev ve ofis tipi kahve makinesi tamiri ve teknik servis`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#2a1c14",
          color: "#f8f3ec",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 64, background: "#d3a374" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 700 }}>{site.name}</div>
            <div style={{ fontSize: 20, letterSpacing: 4, color: "#a99d92", textTransform: "uppercase" }}>{site.tagline}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 980 }}>Kahve Makineniz İçin Profesyonel Teknik Servis</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#d3a374" }}>Ev Tipi · Ofis Tipi · Tamir · Bakım · Temizlik</div>
        </div>
      </div>
    ),
    size
  );
}

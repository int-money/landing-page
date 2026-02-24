import { ImageResponse } from "next/og";

export const alt = "IntMoney - AI-Powered Cross-Border Payments";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(135deg, #4c1d95 0%, #170f2e 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "80px",
                    color: "white",
                    fontFamily: "Inter, sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
                    <div
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "16px",
                            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0.2) 100%)",
                            border: "2px solid rgba(255, 255, 255, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "24px",
                            fontSize: "40px",
                            fontWeight: "bold",
                        }}
                    >
                        iM
                    </div>
                    <span style={{ fontSize: "64px", fontWeight: "bold", letterSpacing: "-0.02em" }}>
                        IntMoney
                    </span>
                </div>

                <h1
                    style={{
                        fontSize: "72px",
                        fontWeight: "bold",
                        textAlign: "center",
                        lineHeight: 1.2,
                        marginBottom: "32px",
                        letterSpacing: "-0.02em",
                        color: "white",
                    }}
                >
                    Your personal AI agent for cross-border payments
                </h1>

                <p
                    style={{
                        fontSize: "36px",
                        color: "#c4b5fd",
                        textAlign: "center",
                        maxWidth: "900px",
                        lineHeight: 1.4,
                    }}
                >
                    Built on Stellar • Always learning • Always working for you
                </p>
            </div>
        ),
        {
            ...size,
        }
    );
}

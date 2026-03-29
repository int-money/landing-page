import { NextRequest, NextResponse } from "next/server";
import { validateCsrfToken } from "@/lib/csrf";

export async function POST(request: NextRequest) {
  // 1. Validate CSRF token
  const isValid = await validateCsrfToken(request);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid CSRF token" }, { status: 403 });
  }

  try {
    const values = await request.json();
    
    // 2. Process the waitlist (e.g., forward it to the real API)
    const apiUrl = process.env.NEXT_PUBLIC_WAITLIST_API_URL;
    
    if (apiUrl) {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to forward waitlist entry to external API");
      }
      
      return NextResponse.json({ success: true });
    } else {
      // Demo mode/fallback
      console.log("Local Waitlist Submission (Demo Mode):", values);
      return NextResponse.json({ success: true, message: "Demo mode: Submission received locally" });
    }
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json({ error: "Failed to process waitlist" }, { status: 500 });
  }
}

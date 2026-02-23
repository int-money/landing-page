"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles, Check, ArrowRight, CircleDot, Send, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Scene {
  userMessage: string;
  reasoningSteps: string[];
  agentResponse: string;
  statusLabel: string;
  statusType: "success" | "active";
}

const SCENES: Scene[] = [
  {
    userMessage: "Send $50 to Alice",
    reasoningSteps: [
      "Found Alice in your contacts",
      "Best route: USDC on Stellar (0.1s, <$0.01 fee)",
      "Transaction ready for your confirmation",
    ],
    agentResponse: "Sending 50 USDC to alice@stellar. Confirm?",
    statusLabel: "Delivered in 3.2s",
    statusType: "success",
  },
  {
    userMessage: "Swap 500 XLM to USDC",
    reasoningSteps: [
      "Checking rates across 3 DEXs",
      "Best rate found: 1 XLM = 0.1247 USDC",
      "Swap prepared with minimal slippage",
    ],
    agentResponse: "Swapping 500 XLM → 62.35 USDC. Confirm?",
    statusLabel: "62.35 USDC received",
    statusType: "success",
  },
  {
    userMessage: "Set up a weekly $25 save into USDC",
    reasoningSteps: [
      "Recurring schedule understood: weekly, $25",
      "Source: XLM balance (auto-swap enabled)",
      "Schedule configured and ready",
    ],
    agentResponse: "Weekly save of $25 → USDC is set. Starting next Monday.",
    statusLabel: "Active — next save in 5 days",
    statusType: "active",
  },
];

export function HeroDemo() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [phase, setPhase] = useState<
    "idle" | "typing" | "user" | "thinking" | "reasoning" | "response" | "status" | "fadeout"
  >("idle");
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scene = SCENES[sceneIndex];

  const clearAllTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scheduleNext = useCallback(
    (fn: () => void, delay: number) => {
      clearAllTimeouts();
      timeoutRef.current = setTimeout(fn, delay);
    },
    [clearAllTimeouts]
  );

  // Auto-scroll to bottom when content changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [phase, visibleSteps]);

  // Start scene
  useEffect(() => {
    setTypedChars(0);
    scheduleNext(() => setPhase("typing"), 500);
    return () => clearAllTimeouts();
  }, [sceneIndex]);

  // Typewriter effect
  useEffect(() => {
    if (phase !== "typing") return;
    if (typedChars < scene.userMessage.length) {
      scheduleNext(() => setTypedChars((prev) => prev + 1), 40);
    } else {
      scheduleNext(() => setPhase("user"), 300);
    }
  }, [phase, typedChars]);

  // Phase transitions
  useEffect(() => {
    switch (phase) {
      case "user":
        scheduleNext(() => setPhase("thinking"), 600);
        break;
      case "thinking":
        scheduleNext(() => {
          setVisibleSteps(0);
          setPhase("reasoning");
        }, 1400);
        break;
      case "response":
        scheduleNext(() => setPhase("status"), 800);
        break;
      case "status":
        scheduleNext(() => setPhase("fadeout"), 3000);
        break;
      case "fadeout":
        setIsFading(true);
        scheduleNext(() => {
          setIsFading(false);
          setPhase("idle");
          setVisibleSteps(0);
          setTypedChars(0);
          setSceneIndex((prev) => (prev + 1) % SCENES.length);
        }, 600);
        break;
    }
  }, [phase]);

  // Reasoning steps one by one
  useEffect(() => {
    if (phase !== "reasoning") return;
    if (visibleSteps < scene.reasoningSteps.length) {
      scheduleNext(() => setVisibleSteps((prev) => prev + 1), 700);
    } else {
      scheduleNext(() => setPhase("response"), 400);
    }
  }, [phase, visibleSteps]);

  const showInput = phase !== "idle";
  const showThinking = phase === "thinking";
  const showReasoning = ["reasoning", "response", "status", "fadeout"].includes(phase);
  const showResponse = ["response", "status", "fadeout"].includes(phase);
  const showStatus = ["status", "fadeout"].includes(phase);

  return (
    <div className={cn("transition-opacity duration-500", isFading ? "opacity-0" : "opacity-100")}>
      <Card className="overflow-hidden border border-border/50 rounded-2xl bg-card shadow-2xl shadow-primary/10">
        {/* Terminal-style top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-background border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-muted/30" />
              <div className="h-3 w-3 rounded-full bg-muted/30" />
              <div className="h-3 w-3 rounded-full bg-muted/30" />
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">IntMoney Agent</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400"></span>
            </span>
            <span className="text-[10px] text-muted-foreground/70 uppercase tracking-wider font-medium">
              Live
            </span>
          </div>
        </div>

        {/* Main content — fixed height, scrolls internally */}
        <div
          ref={scrollRef}
          className="p-3 sm:p-5 md:p-6 space-y-5 h-[340px] sm:h-[400px] overflow-y-auto scrollbar-hide"
        >
          {/* Command input area */}
          <div
            className={cn(
              "rounded-xl border border-border/50 bg-muted/20 p-4 transition-all duration-300 shrink-0",
              showInput ? "border-primary/30 bg-primary/[0.03]" : ""
            )}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                <Send className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground/50 mb-1 font-medium">
                  Your request
                </p>
                <p className="text-sm text-foreground/90 font-medium truncate">
                  {phase === "typing"
                    ? scene.userMessage.slice(0, typedChars)
                    : showInput
                      ? scene.userMessage
                      : ""}
                  {phase === "typing" && (
                    <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle animate-pulse" />
                  )}
                  {!showInput && (
                    <span className="text-muted-foreground/30">Type a command...</span>
                  )}
                </p>
              </div>
              {showInput && phase !== "typing" && (
                <div className="chat-slide-in">
                  <ArrowRight className="h-4 w-4 text-primary/60" />
                </div>
              )}
            </div>
          </div>

          {/* Agent processing area */}
          <div className="flex flex-col gap-4">
            {/* Thinking state */}
            {showThinking && (
              <div className="flex items-center gap-3 chat-slide-in px-1">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <RotateCw className="h-3.5 w-3.5 text-primary animate-spin" />
                </div>
                <span className="text-xs text-muted-foreground/70 font-medium">
                  Agent is reasoning...
                </span>
                <div className="agent-thinking ml-1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            {/* Reasoning trace */}
            {showReasoning && (
              <div className="rounded-xl border border-border/40 bg-muted/10 overflow-hidden">
                <div className="px-4 py-2.5 border-b border-border/40 flex items-center gap-2">
                  <CircleDot className="h-3 w-3 text-primary/60" />
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50 font-medium">
                    Agent Trace
                  </span>
                </div>
                <div className="p-3 space-y-0">
                  {scene.reasoningSteps.map((step, i) =>
                    i < visibleSteps ? (
                      <div key={i} className="flex items-center gap-3 py-2 px-1 chat-slide-in">
                        <span className="step-check-pop inline-flex">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/15">
                            <Check className="h-3 w-3 text-green-400" />
                          </div>
                        </span>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            )}

            {/* Agent response */}
            {showResponse && (
              <div className="rounded-xl border border-primary/20 bg-primary/[0.05] p-4 chat-slide-in">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20 mt-0.5">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-primary/50 mb-1 font-medium">
                      Agent Response
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {scene.agentResponse}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Status badge */}
            {showStatus && (
              <div className="flex justify-center pt-1 chat-slide-in">
                <div
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2",
                    scene.statusType === "success"
                      ? "bg-green-500/10 border border-green-500/20"
                      : "bg-blue-500/10 border border-blue-500/20"
                  )}
                >
                  <div
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      scene.statusType === "success" ? "bg-green-400" : "bg-blue-400"
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs font-medium",
                      scene.statusType === "success" ? "text-green-400" : "text-blue-400"
                    )}
                  >
                    {scene.statusLabel}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar with scene indicators */}
        <div className="px-5 py-3 bg-background border-t border-border/40 flex items-center justify-between">
          <p className="text-[10px] text-muted-foreground/40 font-medium">
            <Sparkles className="h-3 w-3 text-primary/40 inline mr-1 align-middle" />
            Your agent handles the rest
          </p>
          <div className="flex items-center gap-1.5">
            {SCENES.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  i === sceneIndex ? "w-4 bg-primary" : "w-1 bg-muted/40"
                )}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

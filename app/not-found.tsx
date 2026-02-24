"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Navbar } from "@/components/organisms/navbar";
import { Button } from "@/components/atoms/button";
import { GradientText } from "@/components/atoms/gradient-text";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-8xl md:text-9xl font-bold tracking-tight"
          >
            <GradientText>404</GradientText>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-2xl md:text-3xl font-semibold"
          >
            Page not found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-muted-foreground max-w-md mx-auto"
          >
            The page you’re looking for doesn’t exist or may have been moved.
            Let’s get you back to something useful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8"
          >
            <Link href="/">
              <Button size="lg">
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <div className="absolute inset-0 -z-10 flex justify-center items-center">
            <div className="w-125 h-125 bg-primary/20 blur-3xl rounded-full opacity-30" />
          </div>
        </div>
      </main>
    </div>
  );
}
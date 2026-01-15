"use client";

import { Button, Badge, Alert, AlertTitle, AlertDescription } from "@popsticker/ui";
import { Github, Rocket, Sparkles, Palette, Zap, Package, Star, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install @popsticker/ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated floating shapes */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-popsticker-lime/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-popsticker-purple/10 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-popsticker-orange/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Decorative sticker dots */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-popsticker-lime border-2 border-black rounded-full animate-bounce" />
        <div className="absolute top-40 right-32 w-8 h-8 bg-popsticker-purple border-2 border-black rounded-full animate-bounce delay-200" />
        <div className="absolute bottom-40 left-40 w-5 h-5 bg-popsticker-orange border-2 border-black rounded-full animate-bounce delay-400" />
      </div>

      {/* Main Content */}
      <div className="relative py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center space-y-10">
          {/* Top Badge */}
          <div className="inline-block group">
            <Badge className="bg-black text-white border-2 border-white text-lg px-6 py-3 hover:animate-spin cursor-pointer transform transition-all duration-300 hover:scale-110">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                <span>v0.1.6 is now live!</span>
                <Zap className="w-5 h-5 text-popsticker-lime" />
              </div>
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              <span className="relative inline-block">
                <span className="text-slate-900">Make Your</span>
                <span className="absolute -top-2 -right-4 text-3xl md:text-4xl bg-popsticker-purple text-white px-3 py-1 rounded-full rotate-12 border-2 border-black">
                  UI
                </span>
              </span>
              <br />
              <span className="relative inline-block mt-4">
                <span className="text-popsticker-lime bg-black px-6 py-3 transform rotate-[-3deg] inline-block border-4 border-white shadow-sticker-lg hover:rotate-0 transition-transform duration-300">
                  POP!
                </span>
              
              </span>
            </h1>

            {/* Floating Stickers */}
            <div className="absolute -top-6 left-10 md:left-20">
              <div className="w-16 h-16 bg-white border-3 border-black rounded-2xl rotate-12 shadow-sticker animate-wiggle">
                <div className="flex items-center justify-center h-full">
                  <Palette className="w-8 h-8 text-popsticker-purple" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-10 md:right-20">
              <div className="w-20 h-20 bg-popsticker-orange border-3 border-black rounded-full rotate-[-8deg] shadow-sticker animate-wiggle delay-300">
                <div className="flex items-center justify-center h-full">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-2xl md:text-3xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            A <span className="font-black text-black">bold</span>,{" "}
            <span className="font-black text-popsticker-lime">playful</span>, and{" "}
            <span className="font-black text-popsticker-purple">animated</span> React component library
            that brings <span className="relative inline-block">
              <span className="text-popsticker-orange font-black">stickers</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-popsticker-lime/30 -rotate-1" />
            </span> to your UI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"  // Changed from "xl" to "lg" (available size)
              className="text-xl px-10 py-6 border-4 border-black shadow-sticker-lg hover:shadow-sticker-xl hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group"
              onClick={handleCopy}
            >
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6" />
                <span className="font-mono">npm install @popsticker/ui</span>
                {copied ? (
                  <Badge className="bg-green-500 text-white ml-2 animate-bounce-in">
                    <Check className="w-4 h-4 mr-1" />
                    Copied!
                  </Badge>
                ) : (
                  <div className="w-6 h-6 bg-black/10 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="w-4 h-4" />
                  </div>
                )}
              </div>
            </Button>

            {/* <Button
              size="lg"  // Changed from "xl" to "lg"
              variant="outline"
              className="text-xl px-10 py-6 border-4 border-black bg-white hover:bg-popsticker-lime/10 hover:animate-shake"
            >
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6" />
                <span>View Components</span>
              </div>
            </Button> */}
          </div>

          {/* GitHub Button */}
          {/* <div className="pt-4">
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-slate-100 hover:border-2 hover:border-slate-300"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5" />
                <span>Star on GitHub</span>
                <Badge className="bg-slate-900 text-white">1.2k ★</Badge>
              </div>
            </Button>
          </div> */}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-white border-3 border-black rounded-2xl shadow-sticker hover:translate-y-[-4px] transition-transform">
            <div className="text-4xl font-black text-popsticker-lime">35+</div>
            <div className="text-slate-600 mt-2">Components</div>
          </div>
          <div className="text-center p-6 bg-white border-3 border-black rounded-2xl shadow-sticker hover:translate-y-[-4px] transition-transform">
            <div className="text-4xl font-black text-popsticker-purple">100%</div>
            <div className="text-slate-600 mt-2">Accessible</div>
          </div>
          <div className="text-center p-6 bg-white border-3 border-black rounded-2xl shadow-sticker hover:translate-y-[-4px] transition-transform">
            <div className="text-4xl font-black text-popsticker-orange">0</div>
            <div className="text-slate-600 mt-2">Dependencies</div>
          </div>
          <div className="text-center p-6 bg-white border-3 border-black rounded-2xl shadow-sticker hover:translate-y-[-4px] transition-transform">
            <div className="text-4xl font-black text-black">∞</div>
            <div className="text-slate-600 mt-2">Customizable</div>
          </div>
        </div>

        {/* Important Alert */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Alert className="bg-white border-3 border-black shadow-sticker animate-bounce-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
                <Zap className="w-6 h-6 text-yellow-700" />
              </div>
              <div className="flex-1 text-left">
                <AlertTitle className="font-black text-xl mb-2">🚨 Client Components Only</AlertTitle>
                <AlertDescription className="text-slate-700">
                  PopSticker UI is optimized for client-side interactivity. Add{" "}
                  <code className="bg-slate-100 border border-slate-300 px-2 py-1 rounded font-mono">
                    "use client"
                  </code>{" "}
                  at the top of your files. Perfect for Next.js App Router!
                </AlertDescription>
              </div>
            </div>
          </Alert>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="text-sm text-slate-500 font-medium">Scroll to explore</div>
          <div className="w-6 h-10 border-3 border-black rounded-full flex justify-center">
            <div className="w-2 h-2 bg-black rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

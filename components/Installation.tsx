"use client";

import { Card, CardHeader, CardTitle, CardContent, Label, Button, Separator, Alert, AlertTitle, AlertDescription } from "@popsticker/ui";
import { Copy, Check, Package } from "lucide-react";
import { useState } from "react";

export function Installation() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const tailwindConfig = `module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@popsticker/ui/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      colors: {
        popsticker: {
          lime: '#D4FF00',
          purple: '#A78BFA',
          orange: '#FF9D5C',
        },
      },
      borderWidth: {
        3: '3px',
        4: '4px',
      },
      boxShadow: {
        'sticker': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'sticker-lg': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
}`;

  const importExample = `"use client"
import { Button, Card, Badge } from '@popsticker/ui';

function App() {
  return (
    <Card>
      <h1>Hello PopSticker!</h1>
      <Button variant="default">Lime Green Button</Button>
      <Badge className="animate-wiggle-infinite">New!</Badge>
    </Card>
  );
}`;

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold">Installation</h2>
        <p className="text-xl text-slate-600">Get started with PopSticker UI in minutes</p>
      </div>

      <Card className="max-w-4xl mx-auto border-3 border-black bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-6 h-6" />
            Install Package
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Install PopSticker UI */}
          <div className="space-y-2">
            <Label className="text-lg font-semibold">Install PopSticker UI</Label>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-slate-100 p-3 rounded-md border-2 border-slate-200 font-mono text-sm overflow-x-auto">
                npm install @popsticker/ui
              </code>
              <Button
                size="sm"
                variant="outline"
                className="border-2 border-black"
                onClick={() => copyToClipboard("npm install @popsticker/ui", "main")}
              >
                {copied === "main" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          <Separator className="border-black" />

          {/* Peer Dependencies */}
          <div className="space-y-2">
            <Label className="text-lg font-semibold">Peer Dependencies</Label>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-slate-100 p-3 rounded-md border-2 border-slate-200 font-mono text-sm">
                npm install react react-dom tailwindcss
              </code>
              <Button
                size="sm"
                variant="outline"
                className="border-2 border-black"
                onClick={() => copyToClipboard("npm install react react-dom tailwindcss", "peer")}
              >
                {copied === "peer" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Quick Start Alert */}
          <Alert className="bg-popsticker-lime/20 border-popsticker-lime">
            <AlertTitle className="font-bold">🚀 Quick Start</AlertTitle>
            <AlertDescription>
              Follow these steps to configure PopSticker UI in your project
            </AlertDescription>
          </Alert>

          {/* Step 1: Configure Tailwind CSS */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-lg font-semibold">1. Configure Tailwind CSS</Label>
              <p className="text-slate-600">Add to your <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">tailwind.config.js</code>:</p>
            </div>
            <div className="relative">
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-md text-sm overflow-x-auto border-2 border-black">
                <code>{tailwindConfig}</code>
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 bg-white border-2 border-black"
                onClick={() => copyToClipboard(tailwindConfig, "config")}
              >
                {copied === "config" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Step 2: Import Components */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-lg font-semibold">2. Import Components</Label>
              <p className="text-slate-600">Use components in your React app:</p>
            </div>
            <div className="relative">
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-md text-sm overflow-x-auto border-2 border-black">
                <code>{importExample}</code>
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 bg-white border-2 border-black"
                onClick={() => copyToClipboard(importExample, "import")}
              >
                {copied === "import" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Client Component Note */}
          <Alert className="bg-yellow-100 border-yellow-500 text-left">
            <AlertTitle className="font-bold text-yellow-800">Important Note</AlertTitle>
            <AlertDescription className="text-yellow-800">
              This library supports and works in client components only. Please add <code className="bg-yellow-200 px-1 py-0.5 rounded">"use client"</code> at the top of your file when using components.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </section>
  );
    }

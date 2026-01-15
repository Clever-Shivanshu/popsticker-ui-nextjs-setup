"use client";

import { useState } from "react";
import { Card, CardContent, Button, Badge } from "@popsticker/ui";
import { Code, Eye, Copy, Check } from "lucide-react";

interface PlaygroundProps {
    title: string;
    description?: string;
    code: string;
    children: React.ReactNode;
}

export function Playground({ title, description, code, children }: PlaygroundProps) {
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                    {description && <p className="text-slate-600">{description}</p>}
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowCode(!showCode)}
                        className="flex items-center gap-2"
                    >
                        {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
                        {showCode ? "Preview" : "View Code"}
                    </Button>
                </div>
            </div>

            <Card className="overflow-hidden border-3 border-black shadow-sticker bg-white">
                <div className="grid md:grid-cols-1 lg:grid-cols-2">
                    {/* Preview Area */}
                    <div className={`p-8 flex items-center justify-center bg-slate-50 border-b-3 md:border-b-0 md:border-r-3 border-black min-h-[300px] ${showCode ? 'hidden lg:flex' : 'flex'}`}>
                        {children}
                    </div>

                    {/* Code Area */}
                    <div className={`bg-slate-900 relative ${showCode ? 'block' : 'hidden lg:block'}`}>
                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={handleCopy}
                                className="p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                            >
                                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                        <div className="h-full max-h-[400px] overflow-auto p-6 font-mono text-sm">
                            <pre className="text-blue-300">
                                <code>{code}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

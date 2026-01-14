"use client";

import { useState } from "react";
import { Card, CardContent, Button, Badge, Tabs, TabsList, TabsTrigger } from "@popsticker/ui";
import { Code, Eye, Copy, Check, Sparkles } from "lucide-react";

interface PlaygroundProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  badge?: string;
}

export function Playground({ title, description, code, children, badge }: PlaygroundProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Extract the component name from the code for a fun badge
  const componentName = code.includes("export default function") 
    ? code.match(/export default function (\w+)/)?.[1] || "Component"
    : "Example";

  return (
    <div className="space-y-6 group">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-extrabold text-slate-900 group-hover:text-popsticker-purple transition-colors">
              {title}
            </h3>
            {badge && (
              <Badge className="animate-bounce-in bg-popsticker-lime text-black">
                {badge}
              </Badge>
            )}
          </div>
          {description && (
            <p className="text-lg text-slate-600 max-w-2xl">{description}</p>
          )}
        </div>
        
        {/* Component Badge */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-slate-100 border-2 border-slate-300 rounded-full text-sm font-mono">
            {componentName}
          </div>
          <Sparkles className="w-5 h-5 text-popsticker-orange animate-pulse" />
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
          <TabsList className="grid w-full max-w-xs grid-cols-2 bg-slate-100 p-1 rounded-lg">
            <TabsTrigger 
              value="preview" 
              className="data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black data-[state=active]:shadow-sticker"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </TabsTrigger>
            <TabsTrigger 
              value="code" 
              className="data-[state=active]:bg-white data-[state=active]:border-2 data-[state=active]:border-black data-[state=active]:shadow-sticker"
            >
              <Code className="w-4 h-4 mr-2" />
              Code
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="flex items-center gap-2 border-2 border-black hover:animate-shake"
        >
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy Code"}
        </Button>
      </div>

      {/* Main Card */}
      <Card className="overflow-hidden border-3 border-black shadow-sticker-lg hover:shadow-sticker-xl transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] bg-gradient-to-br from-white to-slate-50">
        {/* Preview Section */}
        {activeTab === "preview" && (
          <div className="p-8 md:p-12">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-popsticker-lime/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-popsticker-purple/20 rounded-full blur-xl" />
              
              {/* Preview Content */}
              <div className="relative bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl p-6 min-h-[300px] flex items-center justify-center">
                <div className="w-full max-w-3xl mx-auto">
                  {children}
                </div>
              </div>
              
              {/* Corner Badge */}
              <div className="absolute -top-3 -left-3">
                <Badge className="bg-popsticker-orange text-white border-2 border-black animate-wiggle">
                  Live Preview
                </Badge>
              </div>
            </div>
          </div>
        )}

        {/* Code Section */}
        {activeTab === "code" && (
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800">
            {/* Code Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b-2 border-slate-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-slate-400 font-mono text-sm">
                  {componentName.toLowerCase()}.tsx
                </span>
              </div>
              
              {/* Line Count */}
              <div className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full">
                <span className="text-slate-400 text-sm font-mono">
                  {code.split('\n').length} lines
                </span>
              </div>
            </div>

            {/* Code Content */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-slate-800/50 border-r border-slate-700 flex flex-col items-end pr-4 py-6">
                {code.split('\n').map((_, i) => (
                  <div key={i} className="text-slate-500 text-sm font-mono">
                    {i + 1}
                  </div>
                ))}
              </div>
              
              <div className="pl-16 pr-6 py-6 overflow-auto max-h-[500px]">
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="text-slate-100">
                    {code.split('\n').map((line, i) => {
                      // Syntax highlighting
                      let className = "";
                      if (line.includes("import")) className = "text-blue-400";
                      else if (line.includes("export") || line.includes("function") || line.includes("return")) 
                        className = "text-purple-400";
                      else if (line.includes("use client") || line.includes("className")) 
                        className = "text-green-400";
                      else if (line.includes("<") && line.includes(">")) 
                        className = "text-yellow-300";
                      else if (line.includes('"') || line.includes("'") || line.includes("`")) 
                        className = "text-orange-300";
                      
                      return (
                        <div key={i} className="group/line hover:bg-slate-800/50 px-2 rounded">
                          <span className={className}>{line}</span>
                          <button
                            onClick={() => navigator.clipboard.writeText(line.trim())}
                            className="ml-2 opacity-0 group-hover/line:opacity-100 transition-opacity text-slate-500 hover:text-white"
                          >
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      );
                    })}
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Copy Button */}
            <Button
              variant="default"
              size="sm"
              onClick={handleCopy}
              className="absolute bottom-6 right-6 bg-popsticker-lime text-black border-2 border-black hover:bg-popsticker-lime/90 hover:animate-bounce"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Code Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy All Code
                </>
              )}
            </Button>
          </div>
        )}

        {/* Bottom Decoration */}
        <div className="h-2 bg-gradient-to-r from-popsticker-lime via-popsticker-purple to-popsticker-orange" />
      </Card>

      {/* Helper Text */}
      <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
        <Eye className="w-4 h-4" />
        <span>Click the tabs above to switch between preview and code</span>
        <Code className="w-4 h-4" />
      </div>
    </div>
  );
}                    >
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

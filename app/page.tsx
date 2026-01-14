"use client";

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Input,
  Label,
  Alert,
  AlertTitle,
  AlertDescription,
  Separator,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Slider,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Progress,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Skeleton,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from "@popsticker/ui";
import { Playground } from "@/components/Playground";
import { ArrowRight, Github, Package, Zap, Layout, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      {/* Navbar */}
      <nav className="border-b-3 border-black bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-popsticker-lime border-2 border-black rounded-full animate-wiggle-infinite" />
            <span className="text-xl font-extrabold">PopSticker</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">Docs</Button>
            <Button variant="default" size="sm" className="gap-2">
              <Github className="w-4 h-4" /> GitHub
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center space-y-8 max-w-4xl mx-auto">
        <Badge className="animate-bounce-in bg-popsticker-purple text-white hover:bg-popsticker-purple/90">
          v0.1.6 is now live! 🚀
        </Badge>

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          Make your UI <br />
          <span className="text-popsticker-lime bg-black px-4 transform -rotate-2 inline-block mt-2">
            POP!
          </span>
        </h1>

        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          A React component library with bold borders, bright colors, and playful animations.
          Built on Radix UI and Tailwind CSS.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" className="text-lg px-8 hover:animate-shake">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-white">
            npm install @popsticker/ui
          </Button>
        </div>

        <div className="max-w-2xl mx-auto pt-8">
          <Alert className="bg-yellow-100 border-yellow-500 text-left">
            <AlertTitle className="font-bold text-yellow-800">Important Note</AlertTitle>
            <AlertDescription className="text-yellow-800">
              This library supports and works in client components only. Please add <code>"use client"</code> at the top of your file.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white border-y-3 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-popsticker-lime/20 border-popsticker-lime">
              <CardHeader>
                <Zap className="w-10 h-10 mb-2" />
                <CardTitle>Bold Design</CardTitle>
              </CardHeader>
              <CardContent>
                Thick borders, offset shadows, and vibrant colors that stand out from the crowd.
              </CardContent>
            </Card>
            <Card className="bg-popsticker-purple/20 border-popsticker-purple">
              <CardHeader>
                <Layout className="w-10 h-10 mb-2" />
                <CardTitle>35+ Components</CardTitle>
              </CardHeader>
              <CardContent>
                Everything you need from Buttons to Dialogs, fully accessible and typed.
              </CardContent>
            </Card>
            <Card className="bg-popsticker-orange/20 border-popsticker-orange">
              <CardHeader>
                <Star className="w-10 h-10 mb-2" />
                <CardTitle>Animations</CardTitle>
              </CardHeader>
              <CardContent>
                Built-in wiggles, bounces, and shakes to bring your interface to life.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Playground Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold">Interactive Playground</h2>
          <p className="text-xl text-slate-600">See the code, touch the UI.</p>
        </div>

        {/* Button Playground */}
        <Playground
          title="Buttons"
          description="Clickable elements with various styles and states."
          code={`"use client";

import { Button } from '@popsticker/ui';

export default function Example() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button className="hover:animate-shake">
        Shake Me! 😱
      </Button>
    </div>
  );
}`}
        >
          <div className="flex gap-4 flex-wrap justify-center">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button className="hover:animate-shake">
              Shake Me! 😱
            </Button>
          </div>
        </Playground>

        {/* Card & Form Playground */}
        <Playground
          title="Cards & Forms"
          description="Building blocks for content and user input."
          code={`"use client";

import { 
  Card, CardHeader, CardTitle, CardContent, 
  Label, Input, Button 
} from '@popsticker/ui';

export default function LoginCard() {
  return (
    <Card className="w-[350px] animate-bounce-in">
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="hello@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button className="w-full">Sign In</Button>
      </CardContent>
    </Card>
  );
}`}
        >
          <Card className="w-full max-w-[350px] animate-bounce-in bg-white">
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="hello@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">Sign In</Button>
            </CardContent>
          </Card>
        </Playground>

        {/* Alert Playground */}
        <Playground
          title="Alerts"
          description="Callout messages for user feedback."
          code={`"use client";

import { Alert, AlertTitle, AlertDescription } from '@popsticker/ui';
import { Terminal, AlertCircle } from 'lucide-react';

export default function AlertDemo() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  );
}`}
        >
          <div className="space-y-4 w-full max-w-md">
            <Alert className="bg-white">
              <Package className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive" className="bg-white">
              <Zap className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>
          </div>
        </Playground>

      </section>

      {/* Extended Playground Sections */}
      <section className="pb-20 max-w-7xl mx-auto px-4 space-y-16">

        {/* Selection Controls */}
        <Playground
          title="Selection Controls"
          description="Checkboxes, Radio Groups, Switches, and Sliders."
          code={`"use client";

import { Checkbox, RadioGroup, RadioGroupItem, Switch, Slider, Label } from '@popsticker/ui';

export default function SelectionDemo() {
  return (
    <div className="space-y-8 w-full max-w-md">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>

      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>

      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>

      <div className="space-y-2">
        <Label>Volume</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-8 w-full max-w-md bg-white p-6 rounded-lg border-2 border-black">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>

            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>

            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>

            <div className="space-y-2">
              <Label>Volume</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </div>
        </Playground>

        {/* Text Inputs */}
        <Playground
          title="Text Inputs"
          description="Textareas and Select menus."
          code={`"use client";

import { Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@popsticker/ui';

export default function InputDemo() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <Textarea placeholder="Type your message here." />
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`}
        >
          <div className="space-y-4 w-full max-w-md">
            <Textarea placeholder="Type your message here." className="bg-white" />

            <Select>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Playground>

        {/* Data Display */}
        <Playground
          title="Data Display"
          description="Avatars, Badges, Progress bars, and Skeletons."
          code={`"use client";

import { Avatar, AvatarImage, AvatarFallback, Badge, Progress, Skeleton } from '@popsticker/ui';

export default function DisplayDemo() {
  return (
    <div className="space-y-8 w-full max-w-md">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/92704295?v=4" />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@shivanshu.codes</h4>
          <div className="flex gap-2">
            <Badge>Pro</Badge>
            <Badge variant="outline">Developer</Badge>
          </div>
        </div>
      </div>

      <Progress value={33} />

      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-8 w-full max-w-md bg-white p-6 rounded-lg border-2 border-black">
            <div className="flex gap-4 items-center">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/92704295?v=4" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@shivanshu.codes</h4>
                <div className="flex gap-2">
                  <Badge>Pro</Badge>
                  <Badge variant="outline">Developer</Badge>
                </div>
              </div>
            </div>

            <Progress value={66} />

            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full bg-slate-200" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px] bg-slate-200" />
                <Skeleton className="h-4 w-[150px] bg-slate-200" />
              </div>
            </div>
          </div>
        </Playground>

        {/* Navigation */}
        <Playground
          title="Navigation"
          description="Tabs for organizing content."
          code={`"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardContent } from '@popsticker/ui';

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent className="pt-6">
            Make changes to your account here.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent className="pt-6">
            Change your password here.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}`}
        >
          <Tabs defaultValue="account" className="w-full max-w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  Make changes to your account here.
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  Change your password here.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Playground>

        {/* Overlays */}
        <Playground
          title="Overlays"
          description="Dialogs, Popovers, and Tooltips."
          code={`"use client";

import { 
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription,
  Popover, PopoverTrigger, PopoverContent,
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
  Button 
} from '@popsticker/ui';

export default function OverlayDemo() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          Place content for the popover here.
        </PopoverContent>
      </Popover>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}`}
        >
          <div className="flex gap-4 flex-wrap justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-white">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="bg-white">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                Place content for the popover here.
              </PopoverContent>
            </Popover>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="bg-white">Hover Me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </Playground>

      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t-3 border-black">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-6 h-6 bg-popsticker-lime rounded-full animate-pulse-soft" />
            <span className="text-lg font-bold">PopSticker UI</span>
          </div>
          <p className="text-slate-400">
            Built with 💜 by Shivanshu Bhashkar.
          </p>
          <div className="flex justify-center gap-6 text-sm font-mono text-popsticker-lime">
            {/* <a href="#" className="hover:underline">GitHub</a> */}
            <a href="https://x.com/ShivanshuCodes" className="hover:underline">Twitter</a>
            <a href="https://www.npmjs.com/package/@popsticker/ui" className="hover:underline">NPM</a>
          </div>
        </div>
      </footer>
    </div >
  );
}

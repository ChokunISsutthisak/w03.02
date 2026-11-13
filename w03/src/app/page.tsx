import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <Card className="shadow-lg border-zinc-200 dark:border-zinc-800">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-4xl font-extrabold tracking-tight">Welcome to Course Profile</CardTitle>
          <CardDescription className="text-base mt-2">นี่คือหน้าแรกของเว็บไซต์</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4 pt-4">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            เว็บไซต์นี้ถูกออกแบบใหม่ด้วย <strong>Next.js</strong> และ <strong>Shadcn UI</strong> <br />
            เน้น (Monochrome) 
          </p>
          <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-sm font-mono text-zinc-500">
            "Design is intelligence made visible."
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center border-t border-zinc-100 dark:border-zinc-800 pt-6">
          <Link href="/bio" className="w-full sm:w-auto">
            <Button className="w-full" size="lg">ดูประวัติส่วนตัว (Bio)</Button>
          </Link>
          <Link href="/assignment" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full" size="lg">ดูงานที่มอบหมาย</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
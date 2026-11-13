import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function AssignmentPage() {
  return (
    <div className="w-full max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight">Assignments</h1>
        <p className="text-zinc-500">รายการงานที่ได้รับมอบหมายในรายวิชา</p>
      </div>
      
      <div className="grid gap-6">
        <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Assignment 1: Next.js & Shadcn Setup</CardTitle>
                <CardDescription className="mt-1">อ้างอิงจากเอกสาร 9024131-w03.docx</CardDescription>
              </div>
              <span className="px-3 py-1 bg-zinc-900 text-zinc-50 text-xs rounded-full font-medium dark:bg-zinc-100 dark:text-zinc-900">
                W03
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>สร้างโปรเจค Next.js (App Router) </li>
              <li>Custom Components (Navbar, Footer)</li>
              <li>เรียกใช้งาน Shadcn UI (Card, Button)</li>
              <li>ออกแบบ(Monochrome Style)</li>
            </ul>
          </CardContent>
          <CardFooter className="bg-zinc-50 dark:bg-zinc-900/50 py-4 border-t border-zinc-100 dark:border-zinc-800 mt-2">
            <Button variant="default" className="w-full sm:w-auto">ดูรายละเอียดเพิ่มเติม</Button>
          </CardFooter>
        </Card>
      </div>

    </div>
  );
}
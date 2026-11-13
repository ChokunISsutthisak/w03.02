import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function BioPage() {
   return(
    <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <Card className="shadow-lg border-zinc-200 dark:border-zinc-800">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold">Biography</CardTitle>
          <CardDescription>ข้อมูลประวัติส่วนตัว</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-8">
          
          {/* Profile Picture with B&W Grayscale filter */}
          <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-zinc-100 dark:border-zinc-800 shadow-md group">
            <Image 
              src="/images/mao.jpg" 
              alt="Mao Profile" 
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
            />
            {/* Fallback text just in case image is missing */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 bg-zinc-200 text-zinc-500 font-mono text-xs">
              mao.jpg
            </div>
          </div>

          <div className="text-center space-y-3 w-full">
            <h2 className="text-2xl font-bold">Hello World</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
              ยินดีต้อนรับสู่หน้า Bio ของฉัน ฉันกำลังศึกษาการพัฒนาเว็บแอปพลิเคชัน
            </p>
          </div>

          <div className="w-full border-t border-zinc-100 dark:border-zinc-800 pt-6 flex justify-center">
            <Link href="/">
              <Button variant="secondary">กลับสู่หน้าหลัก</Button>
            </Link>
          </div>

        </CardContent>
      </Card>
    </div>
   );    
}
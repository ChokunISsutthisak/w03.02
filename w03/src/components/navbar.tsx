import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link href="/" className="font-extrabold text-xl tracking-tighter relative z-10">
          Course<span className="text-zinc-500">Profile.</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="font-semibold cursor-pointer">Home</Button>
          </Link>
          <Link href="/bio">
            <Button variant="ghost" className="font-semibold cursor-pointer">Bio</Button>
          </Link>
          <Link href="/assignment">
            <Button variant="ghost" className="font-semibold cursor-pointer">Assignment</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
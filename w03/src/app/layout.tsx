import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Course Profile Web",
  description: "Decorated with Shadcn UI (B&W)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex-1 flex justify-center items-start pt-12 px-4 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
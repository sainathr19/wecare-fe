import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Doctor",
  description: "Remote Patient Monitoring System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body>
          <main className="flex">
            <Sidebar />
            <div className="w-full">
              <Navbar />
              {children}
            </div>
          </main>
        </body>
      </TooltipProvider>
    </html>
  );
}

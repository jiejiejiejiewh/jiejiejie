import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "jiejiejie. — a little space on the internet", description: "A personal digital space for learning, building, and living." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

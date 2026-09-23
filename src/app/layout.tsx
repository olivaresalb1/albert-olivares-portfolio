import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Albert Olivares | Senior Software Engineer & Frontend Architect",
  description: "Personal portfolio featuring interactive 2D physics sandbox, high-craft UI, and frontend engineering projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}

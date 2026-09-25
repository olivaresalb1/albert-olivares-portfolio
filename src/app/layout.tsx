import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Albert Olivares | Senior Software Engineer & Lead Frontend Architect",
  description:
    "Senior Software Engineer with 15 years of experience building performant React/TypeScript systems, leading frontend architecture initiatives, and delivering scalable full-stack applications.",
  keywords: [
    "Albert Olivares",
    "Senior Software Engineer",
    "Lead Frontend Architect",
    "React",
    "TypeScript",
    "Node.js",
    "Laravel",
    "San Diego",
    "Oceanside",
    "Matter.js",
    "Web Architecture",
  ],
  authors: [{ name: "Albert Olivares", url: "https://linkedin.com/in/albertolivares" }],
  openGraph: {
    title: "Albert Olivares | Senior Software Engineer",
    description:
      "Senior Software Engineer with 15 years of experience leading frontend architecture, decoupled systems, and high-conversion digital experiences.",
    siteName: "Albert Olivares Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert Olivares | Senior Software Engineer",
    description:
      "Senior Software Engineer with 15 years of experience leading frontend architecture and high-craft web applications.",
  },
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

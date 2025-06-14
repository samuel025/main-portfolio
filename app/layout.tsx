import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Olayemi Samuel",
  description: "Samuel Olayemi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}

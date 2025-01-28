import type { Metadata } from "next";
import "./globals.css";
import { inter, primary, secondary, tertiary } from "@/lib/font";

export const metadata: Metadata = {
  title: "CodeKerdos",
  description: "CodeKerdos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primary.variable} ${secondary.variable} ${tertiary.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

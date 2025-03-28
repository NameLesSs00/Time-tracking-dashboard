import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Time tracking dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="bg-[#0c1323] py-4">
        {children}
      </body>
    </html>
  );
}

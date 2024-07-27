import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devdiaz",
  description: "Diseño y Desarrollo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xqw0rpx.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: "Mi Equipaje GPS",
  description:
    "Localiza tu equipaje y asegurate de que llegue al lugar correcto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full flex flex-col">{children}</body>
    </html>
  );
}

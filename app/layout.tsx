import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Decolonial Dogs CIC | Manchester Performance Art Theatre",
  description:
    "Decolonial Dogs CIC is a Manchester-based performance art theatre company making theatre, readings, workshops and community-led cultural work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

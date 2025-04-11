import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashBoardWrapper from "./dashboardWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PM",
  description: "Project managemnet app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashBoardWrapper>
          {children}
        </DashBoardWrapper>
      </body>
    </html>
  );
}

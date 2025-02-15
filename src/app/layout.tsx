import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { Poppins, DM_Serif_Display } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Bridger Labs",
  description: "We're building a better toolkit so small businesses can succeed.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-dm-serif",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="sunset" className={`${poppins.variable} ${dmSerif.variable}`}>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

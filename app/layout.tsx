import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundacja Gada — wydarzenia dla młodych w Krakowie",
  description:
    "Fundacja Gada tworzy w Krakowie wydarzenia, które łączą młodych ludzi. Poznaj naszą społeczność, dołącz do spotkań i skontaktuj się z nami.",
  openGraph: {
    title: "Fundacja Gada — wydarzenia dla młodych w Krakowie",
    description:
      "Tworzymy wydarzenia łączące młodych ludzi w Krakowie. Poznaj społeczność Fundacji Gada i znajdź wydarzenie dla siebie.",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Fundacja Gada — wydarzenia dla młodych w Krakowie",
    description:
      "Tworzymy wydarzenia łączące młodych ludzi w Krakowie. Poznaj społeczność Fundacji Gada i znajdź wydarzenie dla siebie.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

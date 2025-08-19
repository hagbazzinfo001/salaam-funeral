import "./globals.css";
import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import { Providers } from "@/components/providers";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Salaam Funeral Services - Compassionate Islamic Funeral Care",
  description:
    "Professional Islamic funeral services with dignity, respect, and adherence to Islamic traditions. Serving the community with compassionate care during difficult times.",
  keywords:
    "Islamic funeral, Muslim funeral, burial services, Islamic burial, funeral arrangements",
  authors: [{ name: "Salaam Funeral Services" }],
  openGraph: {
    title: "Salaam Funeral Services - Compassionate Islamic Funeral Care",
    description:
      "Professional Islamic funeral services with dignity, respect, and adherence to Islamic traditions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body
        className={`${inter.className} min-h-screen bg-background antialiased`}
      >
        <Header />

        <Providers>
          {children}
          <WhatsAppButton />
          <Toaster />
        </Providers>
        <Footer />
      </body>
    </html>
  );
}

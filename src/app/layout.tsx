import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ProjectTransitionProvider } from "@/components/project-transition";
import { JsonLd } from "@/components/json-ld";
import { ContactModalProvider, ContactModalBlur } from "@/components/contact-modal";
import {
  defaultDescription,
  defaultOpenGraph,
  defaultTitle,
  defaultTwitter,
  organizationGraph,
  siteName,
  siteUrl,
} from "@/lib/site";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-exo-2",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/halk.svg", type: "image/svg+xml" }],
    apple: "/halk.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} ${exo2.className} antialiased`}>
        <JsonLd data={organizationGraph()} />
        <SmoothScroll>
          <ContactModalProvider>
            <ProjectTransitionProvider>
              <Header />
              <ContactModalBlur>{children}</ContactModalBlur>
            </ProjectTransitionProvider>
          </ContactModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

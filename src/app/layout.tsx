import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: {
        default: "Ibrahim Youssouf Abdelatif | Data Science and Quantitative ML",
        template: "%s | Ibrahim Youssouf Abdelatif",
    },
    description:
        "Portfolio of Ibrahim Youssouf Abdelatif, an Applied Mathematics student building end-to-end machine learning, quantitative finance, signal processing, and reinforcement learning projects.",
    keywords: [
        "Data Science",
        "Machine Learning",
        "Quantitative Finance",
        "Time Series",
        "Signal Processing",
        "Reinforcement Learning",
        "Python",
        "R",
        "C++",
        "Portfolio",
    ],
    authors: [{ name: "Ibrahim Youssouf Abdelatif" }],
    metadataBase: new URL("https://ibrahim-abdelatif.vercel.app"),
    openGraph: {
        title: "Ibrahim Youssouf Abdelatif | Data Science and Quantitative ML",
        description:
            "Applied mathematics, machine learning, quantitative modeling, and end-to-end project delivery.",
        type: "website",
        url: "https://ibrahim-abdelatif.vercel.app",
        siteName: "Ibrahim Abdelatif Portfolio",
        locale: "en_US",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Ibrahim Abdelatif portfolio preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ibrahim Youssouf Abdelatif | Data Science and Quantitative ML",
        description:
            "Portfolio focused on end-to-end machine learning, quant, signal processing, and RL projects.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sans.variable} ${mono.variable} grain antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}

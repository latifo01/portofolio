import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Ibrahim Abdelatif | Data Scientist & Applied AI",
        template: "%s | Ibrahim Abdelatif",
    },
    description:
        "Data Scientist at Paris-Dauphine building rigorous machine-learning experiments and tested Applied AI systems with FastAPI, RAG, agents and cloud deployment.",
    keywords: [
        "Data Scientist",
        "Applied AI Engineer",
        "Machine Learning",
        "RAG",
        "LangGraph",
        "FastAPI",
        "Time Series",
        "MLOps",
        "Python",
        "Paris",
    ],
    authors: [{ name: "Ibrahim Youssouf Abdelatif" }],
    creator: "Ibrahim Youssouf Abdelatif",
    metadataBase: new URL("https://ibrahim-abdelatif.vercel.app"),
    alternates: { canonical: "/" },
    openGraph: {
        title: "Ibrahim Abdelatif | Data Scientist & Applied AI",
        description: "From rigorous experiments to tested, deployed AI systems.",
        type: "website",
        url: "https://ibrahim-abdelatif.vercel.app",
        siteName: "Ibrahim Abdelatif — Evidence Portfolio",
        locale: "en_US",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ibrahim Abdelatif portfolio" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ibrahim Abdelatif | Data Scientist & Applied AI",
        description: "From rigorous experiments to tested, deployed AI systems.",
        images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#f1eee6",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className="grain antialiased"
                style={
                    {
                        "--font-sans": '"Arial", "Helvetica Neue", sans-serif',
                        "--font-mono": '"IBM Plex Mono", "Courier New", monospace',
                        "--font-display": '"Iowan Old Style", "Palatino Linotype", Georgia, serif',
                    } as React.CSSProperties
                }
            >
                <a className="skip-link" href="#main-content">
                    Skip to content
                </a>
                {children}
                <Analytics />
            </body>
        </html>
    );
}

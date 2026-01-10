import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"; // 1. Ajout de l'import
import "./globals.css";

export const metadata: Metadata = {
    title: "Ibrahim Youssouf ABDELATIF | Data Scientist & Applied Mathematician",
    description: "Portfolio of Ibrahim Youssouf ABDELATIF - Data Science, Machine Learning, and Applied Mathematics projects from Paris-Dauphine University",
    keywords: ["Data Science", "Machine Learning", "Applied Mathematics", "Python", "R", "C++", "Portfolio"],
    authors: [{ name: "Ibrahim Youssouf ABDELATIF" }],
    openGraph: {
        title: "Ibrahim Youssouf ABDELATIF | Data Scientist",
        description: "Data Science & Applied Mathematics Portfolio",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="grain antialiased">
                {children}
                <Analytics /> {/* 2. Ajout du composant ici */}
            </body>
        </html>
    );
}
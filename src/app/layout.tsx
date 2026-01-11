import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"; // 1. Ajout de l'import
import "./globals.css";

export const metadata: Metadata = {
    title: "Ibrahim Youssouf ABDELATIF | Data Scientist – ML & GenAI",
    description: "Portfolio of Ibrahim Youssouf ABDELATIF - Data Scientist specialized in Machine Learning & GenAI. Projects in Finance, Tech & Strategy consulting from Paris-Dauphine University",
    keywords: ["Data Science", "Machine Learning", "GenAI", "Applied Mathematics", "Python", "R", "C++", "Portfolio", "Finance", "XGBoost"],
    authors: [{ name: "Ibrahim Youssouf ABDELATIF" }],
    openGraph: {
        title: "Ibrahim Youssouf ABDELATIF | Data Scientist – ML & GenAI",
        description: "Data Science & Machine Learning Portfolio - Finance, Tech & Strategy",
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
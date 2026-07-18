import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                "background-secondary": "var(--background-secondary)",
                foreground: "var(--foreground)",
                border: "var(--border)",
                primary: {
                    DEFAULT: "var(--primary)",
                    light: "var(--primary-light)",
                    dark: "var(--primary-dark)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    light: "var(--secondary-light)",
                },
                card: {
                    DEFAULT: "var(--card)",
                    hover: "var(--card-hover)",
                },
                paper: "var(--paper)",
                ink: "var(--ink)",
                acid: "var(--acid)",
                signal: "var(--signal)",
                blue: "var(--blue)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "accent-gradient": "var(--accent-gradient)",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out",
                "slide-up": "slideUp 0.5s ease-out",
                glow: "glow 2.4s ease-in-out infinite alternate",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 8px rgba(61, 214, 198, 0.18)" },
                    "100%": { boxShadow: "0 0 24px rgba(242, 178, 75, 0.18)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;

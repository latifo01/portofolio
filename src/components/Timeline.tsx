interface TimelineItem {
    period: string;
    type: "Experience" | "Research" | "Education";
    title: string;
    organization: string;
    focus: string;
}

const timelineData: TimelineItem[] = [
    {
        period: "Apr — Sep 2026",
        type: "Experience",
        title: "Agentic AI Data Scientist Intern",
        organization: "BNP Paribas — Data Office Europe Mediterranean",
        focus: "Agentic AI experimentation, internal LLM platform workflows, use-case framing and evaluation across business, IT and data constraints.",
    },
    {
        period: "Jun — Sep 2025",
        type: "Experience",
        title: "Data Scientist Intern",
        organization: "Deloitte Chad",
        focus: "Time-series budgeting models, reporting automation and translation of finance needs into analytical specifications.",
    },
    {
        period: "Oct 2024 — May 2025",
        type: "Research",
        title: "Junior Researcher — Non-linear dimension reduction",
        organization: "Paris-Dauphine University",
        focus: "Comparative PCA/KPCA analysis and a Python workflow for latent-space visualisation.",
    },
    {
        period: "2025 — 2026",
        type: "Education",
        title: "M2 Statistical & Financial Engineering — Data Science",
        organization: "Paris-Dauphine University — PSL",
        focus: "Deep learning, NLP, reinforcement learning, cybersecurity, data quality and climate-risk modelling.",
    },
    {
        period: "2024 — 2025",
        type: "Education",
        title: "M1 Applied Mathematics — Statistics",
        organization: "Paris-Dauphine University — PSL",
        focus: "Statistical learning, GLMs, stochastic processes, optimisation and scientific computing.",
    },
    {
        period: "2021 — 2024",
        type: "Education",
        title: "BSc Applied Mathematics",
        organization: "University of Strasbourg",
        focus: "Mathematics, algorithms, modelling and scientific computing foundations.",
    },
];

export default function Timeline() {
    return (
        <ol className="border-t border-foreground">
            {timelineData.map((item, index) => (
                <li key={`${item.period}-${item.title}`} className="grid gap-3 border-b border-foreground/20 py-6 sm:grid-cols-[150px_130px_1fr]">
                    <p className="font-code text-[10px] uppercase tracking-[0.15em] text-foreground/52">{item.period}</p>
                    <p className="font-code text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{String(index + 1).padStart(2, "0")} / {item.type}</p>
                    <div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="mt-1 text-sm font-semibold text-secondary">{item.organization}</p>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/62">{item.focus}</p>
                    </div>
                </li>
            ))}
        </ol>
    );
}

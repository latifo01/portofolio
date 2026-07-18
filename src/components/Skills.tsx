const capabilityGroups = [
    {
        index: "A",
        title: "Model with evidence",
        description: "Statistical foundations, explicit baselines and evaluation protocols before headline metrics.",
        items: ["scikit-learn", "XGBoost", "Time series", "Clustering", "Monte Carlo", "Econometrics"],
        proof: "6 curated case studies",
    },
    {
        index: "B",
        title: "Engineer the boundary",
        description: "APIs, structured outputs and deterministic safeguards around model behavior.",
        items: ["FastAPI", "Pydantic", "LangGraph", "RAG", "Docker", "SQL"],
        proof: "81 tests verified",
    },
    {
        index: "C",
        title: "Ship for a user",
        description: "Interfaces and deployments that make assumptions, evidence and limitations inspectable.",
        items: ["React", "Next.js", "R Shiny", "Cloud Run", "Vercel", "Git"],
        proof: "2 live products",
    },
];

export default function Skills() {
    return (
        <div className="divide-y divide-foreground/20 border-y border-foreground">
            {capabilityGroups.map((group) => (
                <article key={group.title} className="grid gap-4 py-7 md:grid-cols-[56px_1fr_1fr_auto] md:items-start">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-foreground font-code text-xs font-bold">{group.index}</span>
                    <div>
                        <h3 className="text-xl font-bold">{group.title}</h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/62">{group.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                            <span key={item} className="rounded-full border border-foreground/20 bg-paper px-3 py-1.5 font-code text-[10px] uppercase tracking-[0.1em]">
                                {item}
                            </span>
                        ))}
                    </div>
                    <span className="w-fit rounded-full bg-foreground px-3 py-1.5 font-code text-[10px] uppercase tracking-[0.12em] text-white">{group.proof}</span>
                </article>
            ))}
        </div>
    );
}

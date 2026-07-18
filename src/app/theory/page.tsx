import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import MathBlock from "@/components/MathBlock";
import Navbar from "@/components/Navbar";

const methods = [
    {
        index: "01",
        title: "Validation before optimisation",
        project: "Credit risk modelling",
        description: "A score is useful only inside a declared evaluation protocol. The case study separates the training population, validation split, class balance and threshold decision before comparing models.",
        formula: "\\operatorname{AUC}=P(s(X^+) > s(X^-))",
        checks: ["Split before preprocessing", "Report class prevalence", "Calibrate the operating threshold"],
        href: "/projects/credit-risk-modelling",
    },
    {
        index: "02",
        title: "Representation shapes clustering",
        project: "Customer segmentation",
        description: "K-Means is a compact objective, but scaling and feature geometry determine what a centroid means. Cluster stability and business interpretability matter more than a decorative two-dimensional projection.",
        formula: "W = \\sum_{k=1}^{K} \\sum_{x_i \\in C_k} \\lVert x_i - \\mu_k \\rVert^2",
        checks: ["Scale the feature space", "Compare seeds and K values", "Name clusters after inspection"],
        href: "/projects/customer-segmentation",
    },
    {
        index: "03",
        title: "Model conditional risk",
        project: "Financial time series",
        description: "Price levels may be close to unpredictable while volatility remains persistent. GARCH models conditional variance and makes the risk object explicit instead of claiming directional foresight.",
        formula: "\\sigma_t^2 = \\omega + \\alpha \\varepsilon_{t-1}^2 + \\beta \\sigma_{t-1}^2",
        checks: ["Work on returns", "Inspect persistence", "Test heavy-tailed innovations"],
        href: "/projects/financial-time-series",
    },
    {
        index: "04",
        title: "Spend simulation where it matters",
        project: "Monte Carlo quantiles",
        description: "Importance sampling changes the proposal distribution to visit rare but consequential regions more often, then reweights observations to preserve the target expectation.",
        formula: "\\hat{\\delta}_{IS}=\\frac{1}{n}\\sum_{i=1}^{n}\\frac{f(X_i)}{g(X_i)}h(X_i)",
        checks: ["Cover the target support", "Inspect weight dispersion", "Measure variance reduction"],
        href: "/projects/monte-carlo-methods",
    },
];

export default function TheoryPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="px-5 pb-24 pt-32 sm:px-8">
                <div className="section-shell">
                    <div className="grid gap-10 border-b border-foreground pb-12 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <div className="eyebrow">Method notes</div>
                            <p className="mt-5 font-code text-[10px] uppercase tracking-[0.16em] text-foreground/48">Four recurring research reflexes</p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold leading-[0.92] tracking-[-0.065em] sm:text-7xl">Theory becomes useful when it changes <span className="display-serif text-primary">what you check.</span></h1>
                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/64 sm:text-lg">Compact notes connected to working case studies. Each one states the object, the practical consequence and the checks required before trusting a result.</p>
                        </div>
                    </div>

                    <div className="divide-y divide-foreground border-b border-foreground">
                        {methods.map((method) => (
                            <article key={method.index} className="grid gap-7 py-10 lg:grid-cols-[120px_1fr] lg:py-14">
                                <div>
                                    <p className="font-code text-xs font-bold text-primary">{method.index}</p>
                                    <p className="mt-2 font-code text-[10px] uppercase tracking-[0.14em] text-foreground/48">{method.project}</p>
                                </div>
                                <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
                                    <div>
                                        <h2 className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{method.title}</h2>
                                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/66 sm:text-base">{method.description}</p>
                                        <div className="mt-7 overflow-x-auto border border-foreground bg-paper px-4 py-6 text-center text-lg sm:px-7 sm:text-xl">
                                            <MathBlock formula={method.formula} />
                                        </div>
                                    </div>
                                    <div className="paper-card self-start p-6">
                                        <p className="font-code text-[10px] font-bold uppercase tracking-[0.15em] text-primary">Before trusting the result</p>
                                        <ul className="mt-5 divide-y divide-foreground/15 border-y border-foreground/15">
                                            {method.checks.map((check, index) => <li key={check} className="grid grid-cols-[30px_1fr] py-3 text-sm"><span className="font-code text-[10px] text-foreground/42">0{index + 1}</span>{check}</li>)}
                                        </ul>
                                        <Link href={method.href} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold hover:text-primary">Open case study <ArrowUpRight className="h-4 w-4" /></Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

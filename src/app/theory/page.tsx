import Link from "next/link";
import { Github } from "lucide-react";
import Footer from "@/components/Footer";
import MathBlock from "@/components/MathBlock";
import Navbar from "@/components/Navbar";

interface MethodCard {
    id: string;
    title: string;
    source: string;
    description: string;
    formula: string;
    sections: Array<{
        title: string;
        body: string;
    }>;
    takeaways: string[];
    projectLink: string;
    githubLink?: string;
}

const methodCards: MethodCard[] = [
    {
        id: "bellman",
        title: "Bellman optimality and value iteration",
        source: "MDP and Dynamic Programming in C++",
        description:
            "The Bellman equation rewrites a sequential decision problem as a fixed-point problem. Once the transition kernel and reward function are known, dynamic programming turns policy search into repeated value updates.",
        formula:
            "V^*(s) = \\max_a \\left[ \\sum_{s'} P(s'|s,a) \\left(R(s,a,s') + \\gamma V^*(s')\\right) \\right]",
        sections: [
            {
                title: "Core object",
                body:
                    "The value function V*(s) is the best discounted reward attainable from state s. The optimal policy is obtained by selecting the action that maximizes the Bellman operator at each state.",
            },
            {
                title: "Why it matters",
                body:
                    "This is the cleanest way to separate modeling assumptions from optimization. If the model is explicit, policy computation becomes transparent, testable, and reproducible.",
            },
            {
                title: "Research reflex",
                body:
                    "Before running value iteration, I check whether the state space is small enough for exact dynamic programming, whether rewards are well-scaled, and whether gamma implies a contraction strong enough for stable convergence.",
            },
        ],
        takeaways: [
            "Model-based dynamic programming is not the same thing as model-free reinforcement learning.",
            "Convergence is driven by repeated Bellman backups, not by ad hoc search over policies.",
        ],
        projectLink: "/projects/reinforcement-learning",
        githubLink: "https://github.com/latifo01/reinforcement-learning-mdp",
    },
    {
        id: "importance-sampling",
        title: "Importance sampling for tail estimation",
        source: "Monte Carlo Methods for Quantile Estimation",
        description:
            "Importance sampling is a change-of-measure technique. Instead of sampling where the probability mass is common, it deliberately samples where the estimator is expensive or rare, then reweights to remain unbiased.",
        formula:
            "\\hat{\\delta}_{IS} = \\frac{1}{n} \\sum_{i=1}^{n} \\frac{f(X_i) \\mathbf{1}_{\\{X_i \\ge q\\}}}{g(X_i)}",
        sections: [
            {
                title: "Core object",
                body:
                    "The target density is f and the proposal density is g. The estimator remains valid as long as g has support wherever the target integrand matters.",
            },
            {
                title: "Why it matters",
                body:
                    "For rare events, naive Monte Carlo spends most of its budget in regions that contribute almost nothing to the final estimate. Importance sampling moves the simulation effort toward the tail.",
            },
            {
                title: "Research reflex",
                body:
                    "I never look only at the point estimate. I also check the weight dispersion, whether the proposal actually covers the tail correctly, and whether the variance reduction is large enough to justify the change of measure.",
            },
        ],
        takeaways: [
            "A good proposal reduces variance without introducing unstable importance weights.",
            "In practice, tail estimation quality depends more on the proposal design than on raw simulation volume.",
        ],
        projectLink: "/projects/monte-carlo-methods",
        githubLink: "https://github.com/latifo01/monte-carlo-methods",
    },
    {
        id: "kmeans",
        title: "K-Means as a representation-dependent objective",
        source: "Customer Segmentation and Environmental Audio Clustering",
        description:
            "K-Means is often presented as a simple clustering baseline, but in practice most of its power comes from preprocessing, scaling, and the geometry of the latent space rather than from the optimization routine itself.",
        formula:
            "W = \\sum_{k=1}^{K} \\sum_{x_i \\in C_k} \\lVert x_i - \\mu_k \\rVert^2",
        sections: [
            {
                title: "Core object",
                body:
                    "The objective minimizes within-cluster inertia around centroids. The algorithm alternates assignment and centroid updates, but the problem remains non-convex and sensitive to initialization.",
            },
            {
                title: "Why it matters",
                body:
                    "The same objective can behave very differently across raw variables, PCA factors, UMAP embeddings, or transformer representations. That is why clustering quality is often a feature-space question before it is an algorithm question.",
            },
            {
                title: "Research reflex",
                body:
                    "I check scaling, latent dimension, cluster stability across seeds, and internal metrics such as silhouette or Davies-Bouldin. I do not treat a clean-looking cluster plot as sufficient evidence on its own.",
            },
        ],
        takeaways: [
            "Good clustering results usually come from better representations, not from decorative model changes.",
            "The objective is simple, but the methodological discipline around it matters a lot.",
        ],
        projectLink: "/projects/customer-segmentation",
        githubLink: "https://github.com/latifo01/Segmentation-des-clients",
    },
    {
        id: "garch",
        title: "GARCH(1,1) and conditional volatility",
        source: "Financial Time Series and Actuarial Modeling",
        description:
            "Financial prices are often close to random walks in level, but volatility is not. GARCH models exploit this asymmetry by modeling the dynamics of conditional variance rather than forcing predictability where there is little in the mean.",
        formula:
            "\\sigma_t^2 = \\omega + \\alpha \\varepsilon_{t-1}^2 + \\beta \\sigma_{t-1}^2",
        sections: [
            {
                title: "Core object",
                body:
                    "Conditional variance today depends on a long-run level omega, yesterday's shock magnitude, and yesterday's variance. Large moves create volatility clustering because shocks feed into future risk estimates.",
            },
            {
                title: "Why it matters",
                body:
                    "For risk measurement, derivatives, and market diagnostics, volatility is often the object that remains forecastable even when returns themselves are close to unpredictable.",
            },
            {
                title: "Research reflex",
                body:
                    "I fit GARCH on returns, not price levels, and I check persistence, residual diagnostics, and whether Gaussian innovations are too optimistic. In the portfolio project, Student-t innovations were more credible because of fat tails.",
            },
        ],
        takeaways: [
            "The key question is often not whether price levels can be forecast, but whether conditional risk can be modeled well.",
            "Heavy tails are not a cosmetic choice; they change the plausibility of the fitted risk model.",
        ],
        projectLink: "/projects/financial-time-series",
    },
    {
        id: "adf",
        title: "Unit roots, differencing, and the ADF test",
        source: "Financial Time Series and Actuarial Modeling",
        description:
            "Before fitting ARIMA, VAR, or macro regressions, I first ask whether the series is stationary. The ADF test is one of the standard tools for deciding whether a level series behaves like an integrated process that should be differenced.",
        formula:
            "\\Delta y_t = \\alpha + \\beta t + \\gamma y_{t-1} + \\sum_{i=1}^{p} \\phi_i \\Delta y_{t-i} + \\varepsilon_t",
        sections: [
            {
                title: "Core object",
                body:
                    "The null hypothesis is a unit root, which means the series is non-stationary in level. The lagged differences are added so that short-run autocorrelation does not contaminate the test.",
            },
            {
                title: "Why it matters",
                body:
                    "If a series is I(1), regressions in level can look impressive while being almost entirely spurious. In quantitative work, checking integration order is basic hygiene before interpreting coefficients or forecasting performance.",
            },
            {
                title: "Research reflex",
                body:
                    "I choose the deterministic part carefully, compare the result with visual diagnostics and ACF behavior, and then work on returns or differences when the data behaves like a random walk. In finance, this often changes the whole modeling strategy.",
            },
        ],
        takeaways: [
            "A strong-looking regression can be statistically empty if the underlying series is not stationary.",
            "Differencing is not a technical nuisance; it determines what object is actually being modeled.",
        ],
        projectLink: "/projects/financial-time-series",
    },
    {
        id: "granger-var",
        title: "Granger causality, VARs, and predictive structure",
        source: "Financial Time Series and Actuarial Modeling",
        description:
            "In macro and financial data, I separate predictive content from structural causality. Granger tests and VAR models are useful because they ask a modest question: do lagged values of one series improve the forecast of another?",
        formula:
            "y_t = c + A_1 y_{t-1} + \\cdots + A_p y_{t-p} + \\varepsilon_t",
        sections: [
            {
                title: "Core object",
                body:
                    "A VAR stacks several time series into one system. Granger causality in that setting means testing whether the lagged coefficients of one variable in another variable's equation are jointly zero.",
            },
            {
                title: "Why it matters",
                body:
                    "This gives a disciplined way to talk about lead-lag structure without pretending to have identified a structural economic mechanism. In the portfolio project, construction activity had predictive content for GDP growth, which is economically plausible and empirically testable.",
            },
            {
                title: "Research reflex",
                body:
                    "I difference non-stationary series first, control the lag order, and interpret impulse responses and out-of-sample RMSE alongside the test. I do not translate a Granger result into a causal claim without stronger identification.",
            },
        ],
        takeaways: [
            "Predictive precedence is weaker than structural causality, but still useful for research and forecasting.",
            "VARs are informative only when the dimensionality stays compatible with the sample size.",
        ],
        projectLink: "/projects/financial-time-series",
    },
    {
        id: "kpca",
        title: "Kernel PCA for nonlinear denoising",
        source: "ECG Signal Denoising",
        description:
            "Kernel PCA extends PCA by replacing linear covariance structure with a kernel-induced feature space. That makes it useful when the signal geometry is nonlinear and linear components no longer separate signal from noise well enough.",
        formula:
            "\\widetilde{K} \\alpha_k = \\lambda_k \\alpha_k",
        sections: [
            {
                title: "Core object",
                body:
                    "Instead of diagonalizing a covariance matrix in the original space, Kernel PCA diagonalizes the centered kernel matrix. The eigenvectors define principal directions in an implicit nonlinear feature map.",
            },
            {
                title: "Why it matters",
                body:
                    "For ECG denoising, the structure of the waveform is not purely linear. Kernel PCA can preserve morphology better than standard PCA when the signal manifold is curved or locally nonlinear.",
            },
            {
                title: "Research reflex",
                body:
                    "I treat the kernel and its scale parameter as modeling assumptions, not defaults. In the denoising benchmark, the point was not to declare one method universally superior, but to compare methods across noise regimes and records with a common MSE protocol.",
            },
        ],
        takeaways: [
            "Kernel methods are useful when linear projections discard too much structure.",
            "Benchmarking by noise type is often more informative than reporting a single aggregate win.",
        ],
        projectLink: "/projects/ecg-signal-denoising",
        githubLink: "https://github.com/latifo01/memoire_ecg",
    },
];

export default function TheoryPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="px-6 pb-24 pt-32">
                <div className="section-shell max-w-6xl">
                    <div className="mb-14 max-w-4xl">
                        <div className="eyebrow mb-5">Methods</div>
                        <h1 className="text-5xl font-semibold md:text-6xl">
                            Crash courses on the methods that recur across the portfolio.
                        </h1>
                        <p className="mt-5 text-lg leading-relaxed text-foreground/68">
                            This page is written as a compact research note rather than a formula gallery. For each
                            topic, I keep the same structure: what the object is, why it matters in practice, and what
                            I check before trusting the result.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {methodCards.map((card) => (
                            <article key={card.id} className="glass-card p-8 md:p-9">
                                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                    <div className="max-w-3xl">
                                        <p className="font-code text-xs uppercase tracking-[0.22em] text-primary-light mb-3">
                                            {card.source}
                                        </p>
                                        <h2 className="text-3xl font-semibold md:text-4xl">{card.title}</h2>
                                        <p className="mt-4 text-base leading-relaxed text-foreground/68 md:text-lg">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {card.githubLink && (
                                            <a
                                                href={card.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-foreground/76 transition-colors hover:bg-white/10 hover:text-foreground"
                                            >
                                                <Github className="h-4 w-4" />
                                                Code
                                            </a>
                                        )}
                                        <Link
                                            href={card.projectLink}
                                            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-foreground/76 transition-colors hover:bg-white/10 hover:text-foreground"
                                        >
                                            Related project
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-[24px] border border-border bg-background/40 p-6 text-center text-xl text-primary-light md:p-8">
                                    <MathBlock formula={card.formula} />
                                </div>

                                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                                    {card.sections.map((section) => (
                                        <div
                                            key={section.title}
                                            className="rounded-[22px] border border-border bg-white/5 p-5"
                                        >
                                            <p className="font-code text-xs uppercase tracking-[0.2em] text-primary-light mb-3">
                                                {section.title}
                                            </p>
                                            <p className="text-sm leading-relaxed text-foreground/72">{section.body}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 grid gap-4 md:grid-cols-2">
                                    {card.takeaways.map((takeaway) => (
                                        <div
                                            key={takeaway}
                                            className="rounded-2xl border border-border bg-background/35 px-4 py-4 text-sm leading-relaxed text-foreground/72"
                                        >
                                            {takeaway}
                                        </div>
                                    ))}
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

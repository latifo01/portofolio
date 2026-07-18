export type ProjectCategory = "applied-ai" | "data-science" | "ml-systems" | "quant";

export interface ProjectEvidence {
    value: string;
    label: string;
    note: string;
}

export interface ProjectLink {
    label: string;
    href: string;
    kind: "code" | "demo" | "report";
}

export interface Project {
    id: string;
    ordinal: string;
    title: string;
    shortTitle: string;
    tagline: string;
    summary: string;
    description: string;
    context: string;
    status: string;
    featured: boolean;
    categories: ProjectCategory[];
    technologies: string[];
    image?: string;
    visual: "clinical" | "agent" | "risk" | "segments" | "timeseries" | "simulation";
    evidence: ProjectEvidence[];
    problem: string;
    approach: string;
    outcome: string;
    validation: string;
    limitation: string;
    architecture: string[];
    highlights: string[];
    nextSteps: string[];
    role: string;
    links: ProjectLink[];
}

export const projects: Project[] = [
    {
        id: "imciflow",
        ordinal: "01",
        title: "ImciFlow — grounded pediatric triage",
        shortTitle: "ImciFlow",
        tagline: "LLM extraction, RAG evidence and deterministic IMCI rules in one auditable workflow.",
        summary:
            "A multilingual clinical decision-support prototype that combines Gemma 4, retrieval over IMCI references, deterministic safety rules and a human-review boundary.",
        description:
            "ImciFlow explores a safer architecture for high-stakes AI: the model structures multilingual intake, retrieval surfaces source evidence, Python tools keep safety-critical classification deterministic, and the interface exposes missing information instead of hiding uncertainty.",
        context: "Gemma 4 Hackathon · 2026",
        status: "Live research demo",
        featured: true,
        categories: ["applied-ai", "ml-systems"],
        technologies: ["Gemma 4", "LangGraph", "FastAPI", "React", "Chroma", "Cloud Run"],
        image: "/projects/imciflow-thumbnail.png",
        visual: "clinical",
        evidence: [
            { value: "3", label: "languages", note: "English, French and Sudanese Arabic paths" },
            { value: "15/15", label: "rule cases", note: "Deterministic IMCI evaluation, not a clinical trial" },
            { value: "2", label: "live services", note: "Vercel frontend and Cloud Run API" },
        ],
        problem:
            "Clinicians in constrained settings need fast protocol lookup, multilingual intake and explicit safety checks without delegating the final decision to a generative model.",
        approach:
            "A graph routes intake through structured extraction, local retrieval, deterministic IMCI tools and a verification step before producing an explanation for human review.",
        outcome:
            "The full-stack prototype is deployed and demonstrates traceable evidence, streaming pipeline events, audio/video inputs and an online/offline model-routing concept.",
        validation:
            "Backend, frontend and safety tests are present. A 15-case fixture evaluation verifies the deterministic classification layer after symptoms have already been structured.",
        limitation:
            "The evaluation does not yet measure end-to-end extraction quality, multilingual robustness or clinical outcomes. The hosted demo is research software and must not be used for diagnosis.",
        architecture: [
            "Multimodal intake → structured clinical signals",
            "IMCI retrieval → cited protocol evidence",
            "Deterministic safety rules → triage class",
            "Human review → final decision",
        ],
        highlights: [
            "FastAPI backend and React/Vite interface deployed separately.",
            "Safety-critical rules are kept outside the LLM path.",
            "Sessions capture model route, evidence, timing and safety flags for auditability.",
        ],
        nextSteps: [
            "Move verification after translation and expand citation checks.",
            "Add authentication, rate limiting, encrypted durable storage and retention controls.",
            "Benchmark extraction, retrieval, multilingual fidelity, latency and cost end to end.",
        ],
        role:
            "Designed and implemented as an end-to-end hackathon system covering product framing, orchestration, backend, frontend integration, evaluation assets and cloud deployment.",
        links: [
            { label: "Live demo", href: "https://gemma-4-hackathon.vercel.app", kind: "demo" },
            { label: "Source code", href: "https://github.com/latifo01/GEMMA-4-HACKATHON", kind: "code" },
        ],
    },
    {
        id: "genai-data-preprocessing",
        ordinal: "02",
        title: "Human-in-the-loop GenAI data preparation",
        shortTitle: "GenAI Data Prep",
        tagline: "Deterministic data-quality checks first; LLM recommendations second.",
        summary:
            "A LangGraph workflow that profiles a dataset, proposes preprocessing decisions, validates transformations and keeps a human approval point before output generation.",
        description:
            "This project treats the LLM as a bounded recommendation layer rather than a statistical oracle. Target leakage checks, split strategy and transformations remain explicit and testable, while Pydantic contracts and repair loops constrain model responses.",
        context: "Applied AI engineering · 2026",
        status: "Tested prototype",
        featured: true,
        categories: ["applied-ai", "ml-systems", "data-science"],
        technologies: ["LangGraph", "FastAPI", "Streamlit", "Pydantic", "OpenAI", "W&B"],
        visual: "agent",
        evidence: [
            { value: "81/81", label: "tests", note: "Verified locally with an isolated test configuration" },
            { value: "4", label: "workflow stages", note: "Profile, recommend, validate and approve" },
            { value: "3×", label: "repair budget", note: "Schema-validated LLM retries" },
        ],
        problem:
            "Generic preprocessing automation can silently introduce leakage, fit transforms on test data or apply plausible-looking choices without an auditable reason.",
        approach:
            "The workflow separates deterministic statistical rules from LLM suggestions, versions prompts in YAML, validates structured outputs with Pydantic and pauses for human approval.",
        outcome:
            "A CLI, Streamlit interface and FastAPI surface share the same pipeline. A local SQLite cache makes repeated development runs faster and avoids duplicate model calls.",
        validation:
            "The audited test run passed all 81 tests. Tests cover statistical fallbacks, split strategies, target checks, response contracts and workflow behavior.",
        limitation:
            "Data samples can be sent to an external model when that provider is enabled. Production use requires explicit consent, redaction, path/URL restrictions and a retention policy.",
        architecture: [
            "Dataset contract → deterministic profiling",
            "LLM recommendation → Pydantic validation",
            "Transformation plan → human approval",
            "Train-only fitting → reproducible artifacts",
        ],
        highlights: [
            "Prompts and model configuration live outside application code.",
            "Human review is a first-class graph state rather than an interface afterthought.",
            "Locked dependencies and a dense deterministic test harness support reproducibility.",
        ],
        nextSteps: [
            "Inject the LLM client so deterministic tests never require an API key.",
            "Add PII detection, redaction, encrypted cache storage and time-based deletion.",
            "Restrict remote URLs and local paths before exposing the API beyond localhost.",
        ],
        role:
            "Built the agent graph, deterministic safeguards, structured-response layer, API, interface, experiment tracking hooks and automated tests.",
        links: [
            { label: "Source code", href: "https://github.com/latifo01/Projet-IA-GEN", kind: "code" },
        ],
    },
    {
        id: "credit-risk-modelling",
        ordinal: "03",
        title: "Credit risk modelling with explicit validation scope",
        shortTitle: "Credit Risk",
        tagline: "A modular XGBoost pipeline presented with its evidence and its current limits.",
        summary:
            "A notebook-to-pipeline refactor for loan approval classification, batch inference and probability-based risk grouping, packaged with YAML configuration and Docker.",
        description:
            "The project turns an exploratory credit notebook into separate feature, training and inference modules. The case study deliberately distinguishes the reported holdout results from the validation work still required for a real credit decision system.",
        context: "Independent ML project · 2025",
        status: "Reproducible training pipeline",
        featured: true,
        categories: ["data-science", "ml-systems"],
        technologies: ["Python", "XGBoost", "scikit-learn", "Pandas", "Docker", "YAML"],
        image: "/projects/credit-risk-architecture.png",
        visual: "risk",
        evidence: [
            { value: "0.99", label: "ROC-AUC", note: "Reported on one holdout split" },
            { value: "94.89%", label: "F1", note: "Reported project metric" },
            { value: "A–E", label: "risk bands", note: "Probability quintiles, not validated grades" },
        ],
        problem:
            "Loan decisions need a repeatable classification workflow and interpretable score outputs, but high headline accuracy alone is not enough for a regulated use case.",
        approach:
            "A scikit-learn pipeline applies feature engineering and preprocessing before XGBoost training, serialization and batch inference from versioned configuration.",
        outcome:
            "The repository separates experimentation from execution and produces approval probabilities, scores and quintile-based bands through a repeatable command-line flow.",
        validation:
            "The current headline metrics come from a single random 70/30 holdout. The code and case study now state that scope explicitly rather than implying production validation.",
        limitation:
            "Calibration, temporal validation, fairness, decision cost and threshold sensitivity are not yet demonstrated. The risk bands are descriptive quantiles only.",
        architecture: [
            "Raw applications → schema and feature rules",
            "Preprocessing pipeline → XGBoost classifier",
            "Holdout evaluation → serialized artifact",
            "Batch inference → score and risk quintile",
        ],
        highlights: [
            "Training and inference use dedicated entry points.",
            "Configuration is externalized in YAML and the workflow is containerized.",
            "Research notebooks preserve the path from EDA to business-oriented evaluation.",
        ],
        nextSteps: [
            "Add stratified cross-validation, calibration and confidence intervals.",
            "Evaluate subgroup fairness and expected decision cost across thresholds.",
            "Expose schema-validated inference behind a tested API and CI pipeline.",
        ],
        role:
            "Refactored the full experimental workflow into modular training and inference code, then documented the technical and business interpretation boundaries.",
        links: [
            { label: "Source code", href: "https://github.com/latifo01/Credit-Risk-Modelling", kind: "code" },
        ],
    },
    {
        id: "customer-segmentation",
        ordinal: "04",
        title: "Customer segmentation decision dashboard",
        shortTitle: "Segmentation",
        tagline: "From clustering diagnostics to an interface a marketing team can actually explore.",
        summary:
            "An R/Shiny product that compares unsupervised methods, profiles four customer groups and makes the assumptions and cluster diagnostics inspectable.",
        description:
            "The work combines cleaning, feature engineering, K-means/CAH/GMM comparison and an interactive dashboard. The emphasis is not only on cluster labels but on the behaviors a stakeholder can inspect before designing a campaign.",
        context: "Paris-Dauphine · 2025",
        status: "Live interactive demo",
        featured: true,
        categories: ["data-science"],
        technologies: ["R", "Shiny", "K-means", "CAH", "GMM", "Plotly"],
        image: "/projects/customer-segmentation-banner.svg",
        visual: "segments",
        evidence: [
            { value: "2,240", label: "customers", note: "Behavioral and demographic observations" },
            { value: "3", label: "methods", note: "K-means, hierarchical clustering and GMM" },
            { value: "4", label: "segments", note: "Selected with elbow and silhouette diagnostics" },
        ],
        problem:
            "A single marketing message ignores meaningful differences in purchasing behavior, engagement, recency and channel preference.",
        approach:
            "After cleaning and feature engineering, three clustering families are compared with internal diagnostics before the selected partition is translated into stakeholder-readable profiles.",
        outcome:
            "The deployed Shiny dashboard supports filtering, PCA views, cluster sizes, radar profiles and re-running the selected clustering configuration.",
        validation:
            "Internal validation uses elbow, silhouette and Davies-Bouldin diagnostics. The current silhouette is approximately 0.35, indicating useful but overlapping groups.",
        limitation:
            "The segments have not yet been validated through campaign uplift, temporal stability or out-of-sample assignment. They support exploration, not causal targeting claims.",
        architecture: [
            "Raw customer table → cleaning and features",
            "Scaled matrix → three clustering candidates",
            "Internal diagnostics → selected partition",
            "Segment profiles → interactive Shiny dashboard",
        ],
        highlights: [
            "The interface exposes both diagnostic and stakeholder views.",
            "Cluster descriptions connect behavior, recency, spending and channels.",
            "The live application is independently accessible without local setup.",
        ],
        nextSteps: [
            "Publish the cleaned source repository with a reproducible R environment.",
            "Measure cluster stability under resampling and across time windows.",
            "Validate campaign value through an uplift or controlled-experiment design.",
        ],
        role:
            "Led data preparation, method comparison, interpretation and full Shiny dashboard implementation.",
        links: [
            {
                label: "Live dashboard",
                href: "https://ibrahimabdelatif-segmentation-des-clients.share.connect.posit.cloud",
                kind: "demo",
            },
        ],
    },
    {
        id: "financial-time-series",
        ordinal: "05",
        title: "Financial and macroeconomic time-series laboratory",
        shortTitle: "Time Series",
        tagline: "Forecasts are compared with a naïve baseline, not judged by fit alone.",
        summary:
            "A reproducible R analysis spanning ARIMA, GARCH, ARIMAX, VAR and Granger tests across market and French macroeconomic series.",
        description:
            "The study follows the full statistical path from stationarity and residual diagnostics to rolling holdout evaluation. It also calls out spurious level correlations before testing relationships on stationary transformations.",
        context: "Paris-Dauphine · 2025",
        status: "Reproducible analytical report",
        featured: false,
        categories: ["data-science", "quant"],
        technologies: ["R", "ARIMA", "GARCH", "VAR", "Granger", "Forecasting"],
        image: "/projects/time-series-banner.svg",
        visual: "timeseries",
        evidence: [
            { value: "80/20", label: "holdout", note: "Chronological train/test split" },
            { value: "3", label: "baselines", note: "Naïve, univariate and multivariate comparison" },
            { value: "2", label: "domains", note: "Market volatility and French macroeconomics" },
        ],
        problem:
            "Time-series models can look convincing in sample while failing to beat a simple carry-forward forecast or relying on spurious non-stationary relationships.",
        approach:
            "The report tests stationarity, diagnoses residual structure, compares AIC/BIC selections and evaluates forecasts on chronological holdouts against a naïve baseline.",
        outcome:
            "A single analytical narrative connects ARIMA forecasting, conditional volatility, dynamic regression, Granger tests, impulse responses and VAR forecasts.",
        validation:
            "Forecast comparisons use chronological train/test splits, residual tests and a naïve benchmark. Statistical relationships are evaluated after stationarity checks.",
        limitation:
            "The work remains an academic analysis. It does not include live data ingestion, forecast monitoring, transaction costs or a decision policy tied to financial value.",
        architecture: [
            "Market and macro data → dated time series",
            "Stationarity and residual diagnostics",
            "ARIMA/GARCH/ARIMAX/VAR candidates",
            "Chronological holdout → baseline comparison",
        ],
        highlights: [
            "ADF, Ljung-Box and ARCH diagnostics precede model interpretation.",
            "The report separates correlation in levels from relationships on stationary series.",
            "Naïve forecasts remain visible throughout the evaluation.",
        ],
        nextSteps: [
            "Package data retrieval and environment locking in a public repository.",
            "Adopt rolling-origin evaluation with uncertainty calibration.",
            "Add drift monitoring and a clearly defined downstream decision rule.",
        ],
        role:
            "Completed the end-to-end statistical analysis, diagnostics, model comparison, visual interpretation and written report.",
        links: [],
    },
    {
        id: "monte-carlo-methods",
        ordinal: "06",
        title: "Monte Carlo methods for difficult quantiles",
        shortTitle: "Monte Carlo",
        tagline: "Sampling algorithms made inspectable through code, variance comparisons and animation.",
        summary:
            "A Python implementation of inverse-CDF, accept-reject, stratification, importance sampling and control variates for probability and tail-quantile estimation.",
        description:
            "The project turns a probability course assignment into a small reusable simulation package. Animations expose how each sampler behaves, while method comparisons focus on when variance reduction is actually useful.",
        context: "Paris-Dauphine · 2025",
        status: "Validated for publication",
        featured: false,
        categories: ["data-science", "quant"],
        technologies: ["Python", "NumPy", "SciPy", "Matplotlib", "Simulation"],
        image: "/projects/sampling_process.gif",
        visual: "simulation",
        evidence: [
            { value: "5", label: "methods", note: "Sampling and variance-reduction strategies" },
            { value: "7/7", label: "tests", note: "Passing in a clean Python 3.11 environment" },
            { value: "0.95+", label: "tail focus", note: "Importance sampling use case" },
        ],
        problem:
            "Tail probabilities and implicit quantiles can be difficult to estimate efficiently when direct integration or naïve sampling is too costly.",
        approach:
            "The code implements multiple samplers behind small modules, then compares convergence and variance while generating visual explanations from the same algorithms.",
        outcome:
            "A compact educational package connects mathematical derivation, executable code, static figures and generated animations without depending on a single notebook.",
        validation:
            "Seven numerical unit tests pass in a clean Python 3.11 environment. The complete experiment also runs end to end and reproduces density, sampling, interval and estimator-comparison figures.",
        limitation:
            "The current comparison is educational rather than a large benchmark. Runtime, effective sample size and confidence-interval coverage need systematic reporting.",
        architecture: [
            "Target density → normalization and reference CDF",
            "Sampler modules → generated observations",
            "Estimator layer → probability and quantile",
            "Diagnostics → figures and animations",
        ],
        highlights: [
            "Algorithm modules are separated from notebooks and visual generation.",
            "The visual assets are produced by the same source code used in the estimates.",
            "The project includes an MIT license and a concise execution path.",
        ],
        nextSteps: [
            "Extend deterministic coverage to stratification and control-variate edge cases.",
            "Report variance, effective sample size and interval coverage in one benchmark table.",
            "Publish the validated repository and connect its CI status to this case study.",
        ],
        role:
            "Implemented the sampling and variance-reduction methods, numerical comparisons and animation pipeline.",
        links: [],
    },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const FILTER_CATEGORIES: { id: "all" | ProjectCategory; label: string }[] = [
    { id: "all", label: "All evidence" },
    { id: "applied-ai", label: "Applied AI" },
    { id: "data-science", label: "Data Science" },
    { id: "ml-systems", label: "ML Systems" },
    { id: "quant", label: "Quant & simulation" },
];

export const getProjectById = (id: string) => projects.find((project) => project.id === id);

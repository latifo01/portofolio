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
        status: "Hardened research demo",
        featured: true,
        categories: ["applied-ai", "ml-systems"],
        technologies: ["Gemma 4", "LangGraph", "FastAPI", "React", "Chroma", "Cloud Run"],
        image: "/projects/imciflow-thumbnail.png",
        visual: "clinical",
        evidence: [
            { value: "3", label: "languages", note: "English, French and Sudanese Arabic paths" },
            { value: "16/16", label: "offline cases", note: "Deterministic fixtures, not a clinical trial" },
            { value: "67", label: "automated tests", note: "64 backend and 3 frontend tests" },
            { value: "2", label: "live services", note: "Vercel frontend and Cloud Run API" },
        ],
        problem:
            "Clinicians in constrained settings need fast protocol lookup, multilingual intake and explicit safety checks without delegating the final decision to a generative model.",
        approach:
            "A graph routes intake through structured extraction, local retrieval, deterministic IMCI tools and a verification step before producing an explanation for human review.",
        outcome:
            "The full-stack prototype is deployed and demonstrates traceable evidence, streaming pipeline events, audio/video inputs and an online/offline model-routing concept.",
        validation:
            "The audited suite passes 64 backend tests, 3 frontend tests and a production build. Sixteen multilingual offline fixtures verify the deterministic layer with a fake extractor; they do not evaluate Gemma itself.",
        limitation:
            "The evaluation does not measure real Gemma extraction quality, RAG relevance, hallucinations or clinical outcomes. Shared authentication, distributed rate limiting and encrypted durable storage remain production work. The demo must not be used for diagnosis.",
        architecture: [
            "Multimodal intake → structured clinical signals",
            "IMCI retrieval → cited protocol evidence",
            "Deterministic safety rules → triage class",
            "Human review → final decision",
        ],
        highlights: [
            "FastAPI backend and React/Vite interface deployed separately.",
            "Safety-critical rules are kept outside the LLM path.",
            "Short-lived sessions use capability tokens, minimized payloads and post-translation safety verification.",
        ],
        nextSteps: [
            "Benchmark real extraction, retrieval, multilingual fidelity, latency and cost end to end.",
            "Replace single-instance rate limiting with a distributed control plane.",
            "Use authenticated identities and encrypted durable storage with deletion workflows.",
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
            { value: "84/84", label: "tests", note: "Deterministic tests run without a provider key" },
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
            "The hardened default does not send raw rows and constrains local paths and URLs, but production use still requires explicit consent, secret governance, encrypted retention and provider monitoring.",
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
            "Benchmark recommendation quality against deterministic and expert baselines.",
            "Add PII classification, encrypted cache storage and time-based deletion.",
            "Add deployment-grade identity, audit logging and provider cost monitoring.",
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
        title: "Credit decision lab with calibrated evidence",
        shortTitle: "Credit Risk",
        tagline: "Chronological validation, calibrated probabilities, decision cost and subgroup diagnostics.",
        summary:
            "A synthetic approval-decision laboratory that separates fit, calibration and final holdout periods, selects a cost-sensitive threshold and exposes subgroup diagnostics through reproducible reports and an API.",
        description:
            "The project was rebuilt after audit to remove circular target proxies and exaggerated production claims. It demonstrates how probabilities become decisions while stating that it emulates synthetic approvals rather than predicting real defaults.",
        context: "Independent ML project · 2025",
        status: "Tested synthetic decision lab",
        featured: true,
        categories: ["data-science", "ml-systems"],
        technologies: ["Python", "scikit-learn", "Calibration", "Fairness diagnostics", "FastAPI", "Docker"],
        image: "/projects/credit-risk-architecture.png",
        visual: "risk",
        evidence: [
            { value: "0.9669", label: "ROC-AUC", note: "Final chronological holdout of 4,000 synthetic rows" },
            { value: "0.0606", label: "Brier score", note: "Calibrated logistic reference run" },
            { value: "0.1445", label: "cost / case", note: "Validation-selected 5:1 decision cost" },
        ],
        problem:
            "A ranking metric does not decide whom to approve. A decision workflow also needs calibrated probabilities, explicit error costs, temporal validation and diagnostics for uneven outcomes.",
        approach:
            "A leakage-controlled pipeline excludes direct decision proxies, fits on earlier synthetic applications, calibrates on a disjoint period and selects a threshold from a 5:1 cost matrix before one final holdout evaluation.",
        outcome:
            "The repository produces a versioned model artifact, evaluation and subgroup reports, a strict inference API and a reproducible reference run over 20,000 synthetic applications.",
        validation:
            "Six automated tests pass. The final 4,000-row holdout reports ROC-AUC 0.9669, AP 0.9097 and Brier 0.0606; the 0.835 threshold yields 33 false approvals and 413 missed approvals under the documented cost model.",
        limitation:
            "The data and approval mechanism are synthetic, so the system does not estimate real default risk. A 14.3-point age-band selection-rate spread is disclosed as a risk requiring contextual investigation, not proof of fairness.",
        architecture: [
            "Synthetic dated applications → proxy exclusions",
            "Chronological fit → candidate models",
            "Disjoint calibration → cost-sensitive threshold",
            "Final holdout → reports, artifact and API",
        ],
        highlights: [
            "Direct risk scores, pricing outputs and audit attributes are excluded from training.",
            "Calibration and threshold selection never inspect the final holdout.",
            "Schema tests, CI, a data card and explicit subgroup tables make claims inspectable.",
        ],
        nextSteps: [
            "Replace the synthetic target with governed default outcomes and temporal cohorts.",
            "Add confidence intervals, drift monitoring and documented adverse-action review.",
            "Validate costs and fairness criteria with risk, legal and affected stakeholders.",
        ],
        role:
            "Reframed and rebuilt the workflow around leakage control, calibration, decision cost, subgroup diagnostics, tested inference and honest evidence boundaries.",
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
        status: "Live demo · Public source",
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
            "Lock the R environment and add an automated Shiny smoke test.",
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
            {
                label: "Source code",
                href: "https://github.com/latifo01/customer-segmentation-shiny",
                kind: "code",
            },
        ],
    },
    {
        id: "financial-time-series",
        ordinal: "05",
        title: "Financial risk time-series laboratory",
        shortTitle: "Time Series",
        tagline: "Rolling volatility and VaR forecasts built without looking into the future.",
        summary:
            "A tested Python system for validated prices, return modelling, rolling volatility, Value-at-Risk and exception backtesting, with synthetic data and a provenance-aware download path.",
        description:
            "The rebuilt project makes the temporal contract executable: every estimate at time t uses only prior observations, horizon variance is explicit, and VaR exceptions are summarized with a finite Kupiec likelihood-ratio statistic.",
        context: "Independent quantitative engineering · 2026",
        status: "Tested public repository",
        featured: false,
        categories: ["data-science", "quant"],
        technologies: ["Python", "GARCH", "Value-at-Risk", "Backtesting", "FastAPI", "CI"],
        image: "/projects/time-series-banner.svg",
        visual: "timeseries",
        evidence: [
            { value: "4/4", label: "tests", note: "Core numerical and data-contract checks" },
            { value: "t-1", label: "information set", note: "Strict no-look-ahead rolling estimates" },
            { value: "1", label: "backtest", note: "Kupiec unconditional coverage" },
        ],
        problem:
            "Risk estimates can look precise while leaking future data, mishandling horizon variance or failing silently at zero and full exception counts.",
        approach:
            "Validated prices become returns, rolling estimators produce volatility and VaR from past-only windows, and exceptions feed an explicitly guarded coverage test and report.",
        outcome:
            "The repository provides a synthetic end-to-end demo, data provenance tooling, tested numerical functions, a small API and a reproducible report path.",
        validation:
            "Four tests cover data validity and numerical edge cases. Rolling forecasts enforce past-only information, and Kupiec's statistic stays finite at boundary exception counts.",
        limitation:
            "Coverage frequency alone does not test independence or tail severity. The project has no trading policy, liquidity model, transaction costs, stress programme or live monitoring.",
        architecture: [
            "Validated prices → timestamped returns",
            "Past-only rolling windows → volatility and VaR",
            "Observed returns → exception sequence",
            "Coverage backtest → report and API",
        ],
        highlights: [
            "The forecasting loop makes the information boundary explicit in code.",
            "Horizon variance and GJR persistence are calculated with validated parameters.",
            "Synthetic data makes the public execution path independent of an undocumented dataset.",
        ],
        nextSteps: [
            "Add conditional-coverage and tail-loss backtests with confidence intervals.",
            "Benchmark historical, parametric and simulation-based VaR on governed data.",
            "Add drift monitoring and a clearly defined downstream capital or limit rule.",
        ],
        role:
            "Rebuilt the analysis as a tested Python risk pipeline covering provenance, temporal validation, numerical safeguards, reporting and serving.",
        links: [
            { label: "Source code", href: "https://github.com/latifo01/financial-risk-timeseries", kind: "code" },
        ],
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
        status: "Tested public repository",
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
            "Expose benchmark and CI status directly in this case study.",
        ],
        role:
            "Implemented the sampling and variance-reduction methods, numerical comparisons and animation pipeline.",
        links: [
            {
                label: "Source code",
                href: "https://github.com/latifo01/monte-carlo-quantile-estimation",
                kind: "code",
            },
        ],
    },
    {
        id: "environmental-audio-clustering",
        ordinal: "07",
        title: "Environmental audio clustering as a reproducible system",
        shortTitle: "Audio Clustering",
        tagline: "One canonical feature contract from waveform generation to served cluster assignment.",
        summary: "A tested audio-clustering package with 170 shared features, synthetic waveforms, Kedro pipelines, API input limits, Docker and CI.",
        description: "The original README-only repository is now an executable system. Training and serving share an explicit feature schema, while synthetic signals provide a licensed, deterministic public demo path.",
        context: "Independent ML systems project · 2026",
        status: "Tested public repository",
        featured: false,
        categories: ["data-science", "ml-systems"],
        technologies: ["Python", "Kedro", "Audio features", "Clustering", "FastAPI", "Docker"],
        image: "/projects/audio-clustering-banner.svg",
        visual: "segments",
        evidence: [
            { value: "170", label: "features", note: "Canonical train/serve schema" },
            { value: "4/4", label: "tests", note: "Local and CI suite" },
            { value: "ARI", label: "external metric", note: "Computed only when labels exist" },
        ],
        problem: "Notebook-only clustering cannot prove that feature extraction, training and inference agree on the same representation.",
        approach: "A shared extractor validates audio, builds 170 features and feeds both the Kedro training pipeline and bounded inference API.",
        outcome: "The repository now runs end to end with generated signals, packaging, tests, CI and container documentation.",
        validation: "Four tests cover feature shape, deterministic generation and core pipeline contracts. Synthetic labels allow a limited ARI sanity check.",
        limitation: "Synthetic separability does not establish usefulness on a real acoustic corpus; stability and representation quality still require external evaluation.",
        architecture: ["Waveform → validated audio", "Shared extractor → 170 features", "Pipeline → clusters and artifact", "API → bounded assignment"],
        highlights: ["Train and serve import one schema.", "The public demo needs no opaque dataset.", "ARI is never fabricated for unlabeled data."],
        nextSteps: ["Evaluate on a governed public corpus.", "Measure stability across seeds and perturbations.", "Add latency and drift monitoring."],
        role: "Rebuilt the repository into a reproducible package, test suite, CI workflow, container and bounded API.",
        links: [{ label: "Source code", href: "https://github.com/latifo01/Audio-clustering", kind: "code" }],
    },
    {
        id: "ecg-denoising",
        ordinal: "08",
        title: "ECG denoising with a verified noise protocol",
        shortTitle: "ECG Denoising",
        tagline: "The target SNR is measured, and tuning records stay separate from evaluation records.",
        summary: "A repaired signal-processing experiment with correct noise scaling, observed-SNR checks, R-peak helpers and record-level evaluation boundaries.",
        description: "The audit found that the noise coefficient was divided instead of multiplied. The formula, tests and experimental split were corrected before the result was returned to the portfolio.",
        context: "Signal processing research · 2026",
        status: "Repaired and tested",
        featured: false,
        categories: ["data-science"],
        technologies: ["Python", "ECG", "Signal processing", "SNR", "Testing"],
        image: "/projects/ecg-denoising-banner.svg",
        visual: "timeseries",
        evidence: [
            { value: "6/6", label: "tests", note: "Including observed-SNR checks" },
            { value: "R-peaks", label: "segmentation", note: "Physiology-aware helper" },
            { value: "0", label: "record overlap", note: "Tuning and evaluation records are disjoint" },
        ],
        problem: "An inverted noise scaling formula made the announced 5 dB experiment unreliable and same-data selection weakened the evidence.",
        approach: "Scale noise by the derived amplitude factor, assert the observed SNR and isolate records used for selection from final evaluation.",
        outcome: "The numerical contract is testable and the experiment no longer depends on an unverified SNR claim.",
        validation: "Six tests pass locally and in CI, covering noise scaling and core data boundaries.",
        limitation: "The repaired protocol is not clinical validation and does not yet establish cross-dataset or cross-patient generalization.",
        architecture: ["Clean ECG → record split", "Noise model → target SNR", "Denoiser → reconstructed signal", "Held-out records → metrics"],
        highlights: ["Critical formula corrected.", "Observed rather than assumed SNR.", "Selection and evaluation data separated."],
        nextSteps: ["Evaluate morphology-aware metrics.", "Benchmark multiple noise types.", "Add cross-database patient-level validation."],
        role: "Audited the mathematical implementation, repaired the protocol and added reproducible safeguards and CI.",
        links: [{ label: "Source code", href: "https://github.com/latifo01/memoire_ecg", kind: "code" }],
    },
    {
        id: "rl-cpp",
        ordinal: "09",
        title: "MDP dynamic programming with explicit C++ ownership",
        shortTitle: "RL C++",
        tagline: "RAII, sanitizers and multi-OS CI turn four crashing tests into a defensible implementation.",
        summary: "A finite-MDP C++ project repaired with vector and smart-pointer ownership, modern CMake, four passing tests, sanitizers and Linux/Windows CI.",
        description: "The initial test executables all failed with memory errors. Ownership was modernized and the unsupported 270% performance claim removed.",
        context: "Systems and reinforcement learning · 2026",
        status: "Repaired and tested",
        featured: false,
        categories: ["ml-systems", "quant"],
        technologies: ["C++", "CMake", "RAII", "MDP", "Sanitizers", "CI"],
        image: "/projects/robot_state_diagram.png",
        visual: "simulation",
        evidence: [
            { value: "4/4", label: "tests", note: "Debug and Release locally" },
            { value: "2", label: "operating systems", note: "Linux and Windows CI" },
            { value: "ASan", label: "memory checks", note: "Sanitizer job passes" },
        ],
        problem: "Correct equations are not enough when unsafe ownership makes every automated test crash.",
        approach: "Replace ambiguous raw ownership with RAII containers, modernize CMake and exercise the algorithms under debug, release and sanitizers.",
        outcome: "All four tests pass across configurations and the README now limits claims to measured evidence.",
        validation: "Debug 4/4, Release 4/4, Linux/Windows workflows and sanitizer checks pass.",
        limitation: "The test suite covers small finite MDPs, not large-scale performance or approximate reinforcement learning.",
        architecture: ["Finite MDP → owned structures", "Bellman operators → iterations", "Policies and values → assertions", "CMake matrix → CI"],
        highlights: ["Ownership is visible in types.", "Undefined behavior is checked automatically.", "Unsupported speedup claim removed."],
        nextSteps: ["Add property-based Bellman tests.", "Benchmark larger sparse MDPs.", "Document convergence tolerances."],
        role: "Repaired memory management, build portability, automated validation and technical documentation.",
        links: [{ label: "Source code", href: "https://github.com/latifo01/Reinforcement-Learning-Project", kind: "code" }],
    },
    {
        id: "adaptive-dosing-simulation",
        ordinal: "10",
        title: "Adaptive dosing as an educational RL simulation",
        shortTitle: "Adaptive Dosing",
        tagline: "A synthetic control benchmark with a strict non-clinical boundary.",
        summary: "A 20×20 tabular Q-learning environment over a simplified ODE model, evaluated on held-out seeds against a fixed synthetic schedule.",
        description: "The work is deliberately framed as teaching software. Its synthetic parameters, reward and dynamics cannot support patient dosing or clinical claims.",
        context: "Educational simulation · 2026",
        status: "Public non-clinical simulation",
        featured: false,
        categories: ["data-science", "quant"],
        technologies: ["Python", "Q-learning", "ODE", "FastAPI", "Docker", "CI"],
        image: "/projects/chemotherapy-rl-banner.svg",
        visual: "simulation",
        evidence: [
            { value: "20×20", label: "state grid", note: "Explicit tabular representation" },
            { value: "4/4", label: "tests", note: "Environment and API contracts" },
            { value: "held-out", label: "seeds", note: "Separate from training episodes" },
        ],
        problem: "An interesting controller can become harmful if a synthetic experiment is presented as a medical recommendation.",
        approach: "Define a small MDP, compare learned and fixed synthetic policies on unseen seeds, and enforce the educational boundary in API and documentation.",
        outcome: "A coherent end-to-end RL demonstration now includes evaluation, tests, CI, Docker and a strict simulation interface.",
        validation: "Four tests pass; evaluation compares policies on held-out random seeds under the same synthetic environment.",
        limitation: "No patient data, pharmacological calibration, clinical utility or safety validation. It must never recommend a real dose.",
        architecture: ["Synthetic ODE → discrete state", "Q-learning → policy", "Held-out seeds → comparison", "Strict API → simulation only"],
        highlights: ["Non-clinical language is enforced.", "Training and evaluation seeds are separated.", "A fixed policy remains visible as baseline."],
        nextSteps: ["Add sensitivity analysis over dynamics.", "Report uncertainty across many seeds.", "Keep all outputs explicitly synthetic."],
        role: "Repositioned and rebuilt the concept as bounded educational software with reproducible evaluation.",
        links: [{ label: "Source code", href: "https://github.com/latifo01/adaptive-dosing-rl-simulation", kind: "code" }],
    },
    {
        id: "bike-sharing-demand",
        ordinal: "11",
        title: "Bike sharing demand without temporal leakage",
        shortTitle: "Bike Sharing",
        tagline: "Time-aware validation and a train-only calendar baseline replace a random split.",
        summary: "A tested demand-forecasting pipeline with TimeSeriesSplit, a final temporal holdout, complete serialization, FastAPI and a licensed synthetic demo path.",
        description: "The original random split and test-set refit were removed. All preprocessing lives inside the estimator pipeline and the public metrics are explicitly limited to deterministic synthetic data.",
        context: "Independent ML engineering · 2026",
        status: "Tested public repository",
        featured: false,
        categories: ["data-science", "ml-systems"],
        technologies: ["Python", "TimeSeriesSplit", "Ridge", "FastAPI", "Docker", "CI"],
        image: "/projects/bike-sharing-models.png",
        visual: "timeseries",
        evidence: [
            { value: "59.26", label: "RMSE", note: "Synthetic final holdout" },
            { value: "163.49", label: "baseline RMSE", note: "Train-only calendar baseline" },
            { value: "6/6", label: "tests", note: "Temporal and serving contracts" },
        ],
        problem: "Randomly splitting dated demand lets similar future conditions influence training and inflates confidence in deployment performance.",
        approach: "Use expanding temporal folds, keep a final period untouched, fit every transform inside the pipeline and compare against a past-only calendar baseline.",
        outcome: "On the 365-row synthetic holdout, Ridge reaches RMSE 59.26, MAE 49.08 and R² 0.601 versus baseline RMSE 163.49.",
        validation: "Six tests pass. The final holdout covers ordered observations 1,461–1,825 and is evaluated only after time-aware model selection.",
        limitation: "The original CSV was excluded because source and licence were undocumented. Public metrics demonstrate the method, not real-city forecasting performance.",
        architecture: ["Synthetic dated demand → schema", "Temporal CV → pipeline selection", "Final holdout → baseline comparison", "Artifact → strict API"],
        highlights: ["No shuffled split.", "Preprocessing cannot inspect the holdout.", "Dataset provenance determines what is published."],
        nextSteps: ["Adopt a licensed real dataset.", "Add probabilistic intervals.", "Monitor weather and concept drift."],
        role: "Removed leakage, built the time-aware evaluation, added a reproducible public dataset, tested API and CI.",
        links: [{ label: "Source code", href: "https://github.com/latifo01/bike-sharing-demand", kind: "code" }],
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

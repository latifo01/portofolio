export type ProjectCategory = "ml" | "quant" | "signal" | "rl";

export interface ProjectMetric {
    label: string;
    value: string;
}

export interface Project {
    id: string;
    title: string;
    tagline: string;
    summary: string;
    description: string;
    problem: string;
    approach: string;
    impact: string;
    role: string;
    context: string;
    technologies: string[];
    metrics: ProjectMetric[];
    highlights: string[];
    featured: boolean;
    image?: string;
    github?: string;
    demoUrl?: string;
    categories: ProjectCategory[];
}

export const projects: Project[] = [
    {
        id: "credit-risk-modelling",
        title: "Credit Risk Modelling",
        tagline: "Loan approval scoring pipeline from experimentation to batch inference",
        summary:
            "Refactored an academic credit scoring study into a modular Python project with training, feature engineering, batch inference, business-facing risk bands, and Docker packaging.",
        description:
            "This project turns a notebook-driven loan approval classifier into a reproducible end-to-end workflow. It combines model comparison, tuned XGBoost training, structured configuration, and a business layer that converts probabilities into usable risk scores.",
        problem:
            "Loan approval decisions need more than raw model accuracy: they need reproducible training, reliable inference outputs, and business-friendly risk interpretation.",
        approach:
            "Built a modular Python codebase with dedicated training and inference entrypoints, feature engineering pipelines, serialized artifacts, YAML configuration, validation notebooks, and Docker support for portable execution.",
        impact:
            "Reached 94.97% accuracy, 94.89% F1, and 0.99 ROC-AUC while introducing a RiskScore_ML from 0 to 100 and A-to-E risk levels for decision support.",
        role: "End-to-end ML pipeline design, model selection, packaging, and business translation",
        context: "Paris-Dauphine finance and machine learning project",
        technologies: ["Python", "XGBoost", "scikit-learn", "Pandas", "Docker", "PyYAML"],
        metrics: [
            { label: "Accuracy", value: "94.97%" },
            { label: "F1 score", value: "94.89%" },
            { label: "ROC-AUC", value: "0.99" },
        ],
        highlights: [
            "Compared four classifiers before locking the best-performing XGBoost model.",
            "Separated feature engineering, training, and inference into reusable pipeline modules.",
            "Packaged the workflow with configuration files and Docker for reproducibility.",
            "Translated model outputs into business-facing risk bands instead of raw probabilities only.",
        ],
        featured: true,
        image: "/projects/credit-risk-architecture.png",
        github: "https://github.com/latifo01/Credit-Risk-Modelling",
        categories: ["ml", "quant"],
    },
    {
        id: "audio-clustering",
        title: "Environmental Audio Clustering",
        tagline: "Unsupervised audio pipeline with handcrafted features and Transformer embeddings",
        summary:
            "Built a full unsupervised audio clustering workflow on 769 environmental clips, then benchmarked classical acoustic descriptors against AST, wav2vec2, and HuBERT embeddings.",
        description:
            "This project explores how far unsupervised learning can go on environmental sound data. It starts with acoustic feature engineering, tests multiple clustering algorithms, and then compares them with Transformer-based audio representations to quantify the gain in semantic grouping.",
        problem:
            "Environmental audio is hard to label at scale, so a strong unsupervised pipeline needs to recover structure without supervision and stay interpretable enough for audit.",
        approach:
            "Extracted MFCC, chroma, spectral, rhythm, and energy features; compared PCA, whitened PCA, and UMAP spaces; benchmarked K-Means, GMM, Spectral Clustering, and HDBSCAN; then repeated clustering with AST, wav2vec2, and HuBERT embeddings.",
        impact:
            "The best classical pipeline reached a silhouette score of 0.376, while AST plus UMAP plus K-Means reached 0.601 with a Davies-Bouldin index of 0.525, showing a clear representation learning advantage.",
        role: "Research pipeline design, feature engineering, benchmarking, and qualitative audit",
        context: "Advanced unsupervised learning and audio representation project",
        technologies: ["Python", "librosa", "scikit-learn", "UMAP", "Transformers", "PyTorch"],
        metrics: [
            { label: "Audio clips", value: "769" },
            { label: "Best silhouette", value: "0.601" },
            { label: "Best DB index", value: "0.525" },
        ],
        highlights: [
            "Benchmarked classical features against three Transformer embedding families.",
            "Compared four clustering algorithms across several latent spaces instead of tuning one model in isolation.",
            "Audited cluster quality with both internal metrics and semantic tag inspection.",
            "Produced a clear final comparison between the best classical and best deep representation pipelines.",
        ],
        featured: true,
        image: "/projects/audio-clustering-banner.svg",
        categories: ["ml", "signal"],
    },
    {
        id: "customer-segmentation",
        title: "Customer Segmentation Dashboard",
        tagline: "Clustering, profiling, and dashboarding for marketing decisions",
        summary:
            "Performed unsupervised customer segmentation on 2,240 clients, compared clustering families, and packaged the results in a Shiny dashboard for business exploration.",
        description:
            "This project combines customer analytics and product thinking. The modeling work identifies meaningful segments, while the dashboard layer makes the output usable by a non-technical team for campaign targeting and profiling.",
        problem:
            "Marketing teams need segments that are both statistically meaningful and easy to explore without reopening notebooks or raw data files.",
        approach:
            "Prepared the data, engineered customer behavior features, compared K-Means, hierarchical clustering, and GMM, selected four segments, and built a Shiny application with filters, KPIs, and radar profiles.",
        impact:
            "Recovered four usable customer groups over 2,240 clients and turned the analysis into a live dashboard instead of a static report.",
        role: "Unsupervised modeling, feature engineering, visualization, and dashboard delivery",
        context: "Paris-Dauphine analytics and data visualization project",
        technologies: ["R", "Shiny", "tidyverse", "ggplot2", "FactoMineR", "plotly"],
        metrics: [
            { label: "Clients", value: "2,240" },
            { label: "Engineered vars", value: "35" },
            { label: "Clusters", value: "4" },
        ],
        highlights: [
            "Handled missing values and clear outliers before clustering.",
            "Compared several unsupervised approaches instead of relying on a single algorithm.",
            "Created radar-style segment profiles to support stakeholder discussion.",
            "Delivered an interactive interface that moves the project closer to real usage.",
        ],
        featured: true,
        image: "/projects/customer-segmentation-banner.svg",
        github: "https://github.com/latifo01/Segmentation-des-clients",
        demoUrl:
            "https://ibrahimabdelatif-segmentation-des-clients.share.connect.posit.cloud",
        categories: ["ml"],
    },
    {
        id: "chemotherapy-q-learning",
        title: "Chemotherapy Dose Control with Q-Learning",
        tagline: "Reinforcement learning for adaptive treatment policies under constraints",
        summary:
            "Implemented a reinforcement learning controller for chemotherapy dosing, simulated several patient profiles, and reproduced a robustness study over 15 synthetic patients.",
        description:
            "This project sits at the intersection of control, reinforcement learning, and applied modeling. A pharmacological system is simulated with differential equations, while a Q-learning agent learns dosing policies that reduce tumor burden while managing normal-cell preservation constraints.",
        problem:
            "A treatment policy must balance competing objectives: reducing tumor cells quickly without destroying healthy cells or violating scenario-specific safety constraints.",
        approach:
            "Modeled the treatment dynamics, formalized the control problem as an MDP, trained a tabular Q-learning agent over 50,000 episodes, then evaluated nominal, constrained, and perturbed patient scenarios including pregnancy and comorbidity cases.",
        impact:
            "Across the 15-patient simulation, the mean tumor eradication time was about 43 days, and the learned controller remained stable under parameter perturbations ranging from minus 10 percent to plus 15 percent.",
        role: "Mathematical modeling, RL agent design, robustness analysis, and scenario simulation",
        context: "Applied reinforcement learning project inspired by a medical control paper",
        technologies: ["Python", "Q-learning", "SciPy", "NumPy", "Matplotlib"],
        metrics: [
            { label: "Training episodes", value: "50k" },
            { label: "Simulated patients", value: "15" },
            { label: "Mean eradication", value: "43 days" },
        ],
        highlights: [
            "Connected continuous treatment dynamics with a reinforcement learning control policy.",
            "Tested three clinically different patient scenarios instead of only one nominal case.",
            "Added robustness analysis under kinetic parameter perturbations.",
            "Reported distributional outcomes, not just a single success story.",
        ],
        featured: true,
        image: "/projects/chemotherapy-rl-banner.svg",
        categories: ["rl", "signal"],
    },
    {
        id: "financial-time-series",
        title: "Financial Time Series and Actuarial Modeling",
        tagline: "ARIMA, GARCH, ARIMAX, VAR, and causal analysis across market and macro data",
        summary:
            "Built an end-to-end econometrics workflow on L'Oreal stock prices and French macroeconomic series, covering stationarity, forecasting, volatility modeling, and multivariate dynamics.",
        description:
            "This project shows quantitative depth beyond standard forecasting tutorials. It combines market data, macro series, model diagnostics, causal tests, and forecast comparison to separate what is predictable from what is not.",
        problem:
            "Time series work is often reduced to automatic forecasting, but finance and macro data require diagnostics, stationarity checks, volatility modeling, and careful interpretation of predictive value.",
        approach:
            "Analyzed 2,870 daily stock observations and long-horizon quarterly macro series, tested stationarity, compared ARIMA variants, modeled volatility with GARCH under normal and Student-t innovations, ran Granger causality tests, estimated ARIMAX and VAR models, and evaluated out-of-sample RMSE.",
        impact:
            "The work showed that price levels behaved like near-random walks, while volatility remained modelable with a GARCH(1,1) Student-t specification. It also identified construction output as a leading macro signal for GDP with a Granger p-value of 0.0003.",
        role: "Econometric analysis, forecasting, diagnostics, and quantitative interpretation",
        context: "Time series and actuarial applications project",
        technologies: ["R", "forecast", "rugarch", "vars", "tseries", "ggplot2"],
        metrics: [
            { label: "Stock observations", value: "2,870" },
            { label: "Annualized vol", value: "23%" },
            { label: "Granger p-value", value: "0.0003" },
        ],
        highlights: [
            "Separated predictive signal in volatility from weak signal in price levels.",
            "Used diagnostics and out-of-sample validation instead of trusting automated model selection blindly.",
            "Combined finance and macroeconomics in a single coherent workflow.",
            "Showed the limits of over-parameterized multivariate models on small samples.",
        ],
        featured: true,
        image: "/projects/time-series-banner.svg",
        categories: ["quant"],
    },
    {
        id: "reinforcement-learning",
        title: "MDP and Dynamic Programming in C++",
        tagline: "Reusable C++ framework for Value Iteration on discrete decision problems",
        summary:
            "Implemented generic MDP classes, a dynamic programming solver, tests, and a robot garbage collector example in modern C++.",
        description:
            "This project demonstrates algorithmic rigor and low-level implementation quality. It does not only solve a toy MDP once; it provides reusable abstractions for states, actions, transitions, rewards, and policy computation.",
        problem:
            "Understanding reinforcement learning foundations is easier when the algorithmic core is implemented from scratch rather than hidden behind high-level libraries.",
        approach:
            "Built template-based MDP classes, implemented a perfect MDP representation, wrote a Value Iteration solver, added tests, and documented the robot example with diagrams and simulation visuals.",
        impact:
            "The optimal robot policy outperformed a random policy by about 270 percent and converged in roughly 20 to 30 iterations.",
        role: "Algorithm implementation, systems programming, testing, and visualization support",
        context: "Applied mathematics and reinforcement learning project in C++",
        technologies: ["C++11", "CMake", "Dynamic programming", "Templates", "Testing"],
        metrics: [
            { label: "States", value: "2" },
            { label: "Actions", value: "3" },
            { label: "Reward uplift", value: "270%" },
        ],
        highlights: [
            "Implemented the core algorithm from scratch instead of relying on a framework.",
            "Used reusable abstractions that can be extended beyond the robot example.",
            "Added test coverage to validate the MDP components and solver behavior.",
            "Documented the algorithm with diagrams and simulation outputs.",
        ],
        featured: false,
        image: "/projects/value_iteration.png",
        github: "https://github.com/latifo01/reinforcement-learning-mdp",
        categories: ["rl"],
    },
    {
        id: "monte-carlo-methods",
        title: "Monte Carlo Methods for Quantile Estimation",
        tagline: "Simulation, rare-event estimation, and variance reduction with visual explainers",
        summary:
            "Implemented five Monte Carlo methods with animated visualizations to explain inverse CDF sampling, accept-reject sampling, stratification, importance sampling, and control variates.",
        description:
            "This project combines quantitative computing and pedagogy. It implements simulation methods for difficult probability and quantile estimation problems, then makes the mechanics visible through custom animations.",
        problem:
            "Rare-event probability estimation becomes unstable with naive simulation, so strong variance reduction strategies are required for usable estimates.",
        approach:
            "Implemented several Monte Carlo estimators, compared where they help most, and generated animations to explain the sampling behavior and convergence intuitively.",
        impact:
            "Produced seven custom animations and a modular simulation codebase covering five advanced sampling strategies for quantile estimation.",
        role: "Simulation design, variance reduction implementation, and technical visualization",
        context: "Monte Carlo methods coursework in applied mathematics",
        technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
        metrics: [
            { label: "Methods", value: "5" },
            { label: "Animations", value: "7" },
            { label: "Focus", value: "Rare events" },
        ],
        highlights: [
            "Implemented multiple variance reduction methods in a single consistent framework.",
            "Explained algorithms with custom animation rather than static figures only.",
            "Connected mathematical estimators to practical simulation behavior.",
            "Built a project that is both technically rigorous and highly legible.",
        ],
        featured: false,
        image: "/projects/sampling_process.gif",
        github: "https://github.com/latifo01/monte-carlo-methods",
        categories: ["quant"],
    },
    {
        id: "bike-sharing-glm",
        title: "Bike Sharing Demand Prediction",
        tagline: "Model comparison platform for operational demand forecasting",
        summary:
            "Built a forecasting workflow for bike rental demand with six models, Box-Cox target transformation, model tracking, and deployment-ready packaging.",
        description:
            "The project extends a GLM-based academic study into a broader machine learning workflow. It compares linear, tree-based, and boosting models under a consistent evaluation setup and keeps the code organized for reuse.",
        problem:
            "Demand forecasting for urban mobility needs a reproducible process for comparing models, validating feature engineering, and exposing the best model for downstream use.",
        approach:
            "Prepared the data, added feature engineering and target transformations, tuned several models with GridSearchCV, logged the comparison outputs, and packaged the project structure with Docker and serialized artifacts.",
        impact:
            "The strongest models achieved an R-squared above 0.85 with RMSE around 180 to 220 rentals, improving on a more classical GLM baseline.",
        role: "Forecasting workflow design, model benchmarking, and packaging",
        context: "Applied machine learning extension of an academic GLM project",
        technologies: ["Python", "scikit-learn", "XGBoost", "LightGBM", "Pandas", "Docker"],
        metrics: [
            { label: "Models tested", value: "6" },
            { label: "Best R2", value: "0.85+" },
            { label: "RMSE", value: "180-220" },
        ],
        highlights: [
            "Benchmarked six models under a shared evaluation framework.",
            "Applied Box-Cox normalization and feature engineering before model selection.",
            "Saved trained artifacts and figures for reproducibility.",
            "Organized the codebase for reuse instead of leaving it in notebooks only.",
        ],
        featured: true,
        image: "/projects/bike-sharing-models.png",
        github: "https://github.com/latifo01/bike-sharing-prediction",
        categories: ["ml"],
    },
    {
        id: "ecg-signal-denoising",
        title: "ECG Signal Denoising",
        tagline: "Benchmark of DWT, PCA, and Kernel PCA on noisy cardiac signals",
        summary:
            "Reproduced and benchmarked ECG denoising methods on MIT-BIH data, comparing DWT, PCA, and Kernel PCA across several noise families.",
        description:
            "This project focuses on signal processing rigor. It benchmarks denoising methods on cardiac waveforms corrupted by muscle artifact, electrode motion, and white noise, then compares the resulting reconstruction quality.",
        problem:
            "Biomedical signals are easily degraded by multiple noise sources, and denoising choices should be compared systematically rather than selected heuristically.",
        approach:
            "Loaded MIT-BIH records, added controlled noise, segmented beats, applied DWT, PCA, and Kernel PCA denoising strategies, and measured reconstruction quality through MSE across records and noise types.",
        impact:
            "Across the benchmark, Kernel PCA achieved the lowest mean MSE overall at 2.57 versus 3.99 for DWT and 18.80 for PCA, with especially strong gains on electrode motion noise.",
        role: "Signal processing pipeline implementation, benchmarking, and result synthesis",
        context: "Biomedical signal processing project based on an INTERCON paper",
        technologies: ["Python", "Wavelets", "Kernel PCA", "NumPy", "SciPy", "wfdb"],
        metrics: [
            { label: "ECG records", value: "8" },
            { label: "Noise types", value: "3" },
            { label: "Best mean MSE", value: "2.57" },
        ],
        highlights: [
            "Benchmarked three denoising families across several records and noise conditions.",
            "Reproduced a paper-inspired setup on real cardiac datasets rather than toy signals.",
            "Surfaced that the best method depends on the noise regime, which is a useful modeling nuance.",
            "Packaged the workflow with separate benchmark and hyperparameter search scripts.",
        ],
        featured: false,
        image: "/projects/ecg-denoising-banner.svg",
        github: "https://github.com/latifo01/memoire_ecg",
        categories: ["signal"],
    },
];

export const FILTER_CATEGORIES: Array<{ id: "all" | ProjectCategory; label: string }> = [
    { id: "all", label: "All projects" },
    { id: "ml", label: "Machine learning" },
    { id: "quant", label: "Quant and finance" },
    { id: "signal", label: "Signal and health" },
    { id: "rl", label: "RL and optimization" },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectById(id: string) {
    return projects.find((project) => project.id === id);
}

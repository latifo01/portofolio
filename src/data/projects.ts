export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    metrics: Record<string, string>;
    featured: boolean;
    image: string;
    gif?: string;
    github: string;
    demoUrl?: string;
    categories: string[];
}

export const projects: Project[] = [
    {
        id: "credit-risk-modelling",
        title: "Credit Risk Modelling",
        description: "Challenge: Reduce loan default prediction errors for a financial institution. Solution: Built an end-to-end ML pipeline comparing 4 classifiers with GridSearchCV optimization. Result: Achieved 94.97% accuracy and 0.99 AUC with XGBoost, plus custom RiskScore_ML (0-100) and RiskLevel (A-E) categorization for business decision support.",
        technologies: ["Python", "XGBoost", "Docker", "Scikit-learn", "Pandas"],
        metrics: { accuracy: "94.97%", f1: "94.89%", auc: "0.99" },
        featured: true,
        image: "/projects/credit-risk-architecture.png",
        github: "https://github.com/latifo01/credit-risk-modelling",
        categories: ["ml", "finance"],
    },
    {
        id: "customer-segmentation",
        title: "Customer Segmentation",
        description: "Challenge: Enable targeted marketing campaigns through customer profiling. Solution: Performed unsupervised clustering on 2,240 customers comparing K-Means, CAH, and GMM. Result: Identified 4 distinct customer segments with interactive Shiny dashboard for real-time exploration and decision support.",
        technologies: ["R", "Shiny", "Tidyverse", "ggplot2", "FactoMineR"],
        metrics: { clusters: "4", silhouette: "0.35", customers: "2,240" },
        featured: true,
        image: "/projects/segmentation.png",
        github: "https://github.com/latifo01/customer-segmentation",
        demoUrl: "https://ibrahimabdelatif-segmentation-des-clients.share.connect.posit.cloud",
        categories: ["ml"],
    },
    {
        id: "reinforcement-learning",
        title: "Reinforcement Learning MDP",
        description: "Challenge: Optimize autonomous robot decision-making under uncertainty. Solution: Implemented Markov Decision Processes with Value Iteration in C++. Result: Achieved 270% performance improvement with convergence in ~25 iterations for robot garbage collector optimization.",
        technologies: ["C++11", "CMake", "MDP", "Dynamic Programming"],
        metrics: { improvement: "270%", states: "2", convergence: "~25 iter" },
        featured: true,
        image: "/projects/value_iteration.png",
        gif: "/projects/robot_simulation.png",
        github: "https://github.com/latifo01/reinforcement-learning-mdp",
        categories: ["ml", "math"],
    },
    {
        id: "monte-carlo-methods",
        title: "Monte Carlo Methods",
        description: "Challenge: Estimate rare event probabilities where standard integration fails. Solution: Implemented 5 advanced simulation techniques including Importance Sampling and Control Variate. Result: Significant variance reduction with 7 professional animations demonstrating each method.",
        technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
        metrics: { methods: "5", animations: "7 GIFs" },
        featured: false,
        image: "/projects/sampling_process.gif",
        gif: "/projects/stratified_animation.gif",
        github: "https://github.com/latifo01/monte-carlo-methods",
        categories: ["math", "finance"],
    },
    {
        id: "bike-sharing-glm",
        title: "Bike Sharing Demand Prediction",
        description: "Challenge: Forecast bike rental demand for urban fleet optimization. Solution: Built ML platform comparing 6 models with GridSearchCV and Box-Cox transformation. Result: Achieved R² > 0.85 with XGBoost, enabling better resource allocation.",
        technologies: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Docker"],
        metrics: { models: "6", rmse: "~200", r2: "0.85+" },
        featured: false,
        image: "/projects/bike-sharing-models.png",
        github: "https://github.com/latifo01/bike-sharing-prediction",
        categories: ["ml"],
    },
];

export const FILTER_CATEGORIES = [
    { id: "all", label: "All Projects" },
    { id: "ml", label: "Machine Learning" },
    { id: "finance", label: "Finance" },
    { id: "math", label: "Math & Stats" },
];

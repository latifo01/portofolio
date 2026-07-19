# Project publication decisions

This register keeps the public portfolio selective. A project is linked only when its code, provenance, execution path, evidence, and limitations are inspectable.

## Published after audit

### Credit decision lab

Repository: <https://github.com/latifo01/Credit-Risk-Modelling>

- Reframed as synthetic approval-decision emulation, not default prediction.
- Chronological fit/calibration/holdout split, calibrated probabilities, 5:1 cost threshold and subgroup diagnostics.
- Six tests and CI pass. The open audit PR is <https://github.com/latifo01/Credit-Risk-Modelling/pull/1>.

### GenAI data preparation

Repository: <https://github.com/latifo01/Projet-IA-GEN>

- Lazy injectable provider, deterministic tests without a key and no raw-row transmission.
- Opt-in cache plus local-path and URL allowlists.
- Eighty-four tests and CI pass. The open audit PR is <https://github.com/latifo01/Projet-IA-GEN/pull/2>.

### ImciFlow

Repository: <https://github.com/latifo01/GEMMA-4-HACKATHON>

- Per-session capability tokens, minimized short-lived storage, optional shared auth and rate limiting.
- Post-translation safety verification, 64 backend tests, 3 frontend tests and 16 offline fixtures pass.
- Research-only, non-clinical boundary remains explicit. The open audit PR is <https://github.com/latifo01/GEMMA-4-HACKATHON/pull/3>.

### Customer segmentation Shiny

Public repository: <https://github.com/latifo01/customer-segmentation-shiny>

- Strong product evidence: reproducible R Markdown analysis plus a live stakeholder interface.
- Dataset provenance is documented; the upstream Kaggle publisher declares Apache 2.0.
- The README now separates internal clustering diagnostics from business validation.
- Remaining follow-up: lock the R environment and add an automated smoke test when an R runtime is available.

### Monte Carlo quantile estimation

Public repository: <https://github.com/latifo01/monte-carlo-quantile-estimation>

- Modular Python source, figures, animations, MIT license, and a direct execution path.
- The admissible-density check was corrected so invalid Gaussian differences are rejected instead of clipped.
- Seven numerical tests pass in a clean Python 3.11 environment.
- The full experiment runs end to end and regenerates the estimator comparison.

### Financial risk time series

Repository: <https://github.com/latifo01/financial-risk-timeseries>

- Strict past-only rolling VaR, finite Kupiec edge cases and validated horizon variance.
- Provenance-aware downloader, synthetic demo, tested API and CI.

### Bike sharing demand

Repository: <https://github.com/latifo01/bike-sharing-demand>

- Random split and test refit removed in favor of TimeSeriesSplit and a final holdout.
- Reproducible 1,825-row synthetic public dataset because the inherited CSV lacked documented provenance and licence.
- Six tests, complete artifact, FastAPI and CI.

### Adaptive dosing RL simulation

Repository: <https://github.com/latifo01/adaptive-dosing-rl-simulation>

- Explicitly educational and synthetic; never a clinical dosing recommendation.
- Coherent tabular Q-learning, held-out seeds, fixed-policy baseline, four tests, strict API, CI and Docker.

### Environmental audio clustering

Repository: <https://github.com/latifo01/Audio-clustering>

- Rebuilt from a README-only repository into a Kedro package with one 170-feature train/serve contract.
- Synthetic audio generator, bounded API, four tests, CI and Docker.
- The open audit PR is <https://github.com/latifo01/Audio-clustering/pull/1>.

### ECG denoising

Repository: <https://github.com/latifo01/memoire_ecg>

- Corrected inverted noise scaling and added observed-SNR assertions.
- Tuning/evaluation records are disjoint; six tests and CI pass.
- The open audit PR is <https://github.com/latifo01/memoire_ecg/pull/1>.

### C++ MDP and dynamic programming

Repository: <https://github.com/latifo01/Reinforcement-Learning-Project>

- Replaced unsafe ownership with RAII, modernized CMake and removed the unsupported 270% claim.
- Debug and Release suites pass 4/4; Linux, Windows and sanitizer CI are green.
- The open audit PR is <https://github.com/latifo01/Reinforcement-Learning-Project/pull/1>.

## Still deferred

- Job-search automation: remove scraping and credential risk, document platform constraints, and complete legal/privacy review before publication.
- Any project whose dataset licence, provenance or confidentiality status is uncertain.

No confidential client, banking, or private hackathon code belongs in the public publication queue. The private banking-assistant project is explicitly excluded and must never be published.

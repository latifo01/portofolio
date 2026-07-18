# Project publication decisions

This register keeps the public portfolio selective. A project is linked only when its code, provenance, execution path, evidence, and limitations are inspectable.

## Publish now

### Customer segmentation Shiny

Recommended repository: `latifo01/customer-segmentation-shiny`

- Strong product evidence: reproducible R Markdown analysis plus a live stakeholder interface.
- Dataset provenance is documented; the upstream Kaggle publisher declares Apache 2.0.
- The README now separates internal clustering diagnostics from business validation.
- Remaining follow-up: lock the R environment and add an automated smoke test when an R runtime is available.

### Monte Carlo quantile estimation

Recommended repository: `latifo01/monte-carlo-quantile-estimation`

- Modular Python source, figures, animations, MIT license, and a direct execution path.
- The admissible-density check was corrected so invalid Gaussian differences are rejected instead of clipped.
- Seven numerical tests pass in a clean Python 3.11 environment.
- The full experiment runs end to end and regenerates the estimator comparison.

## Keep public and feature

- `GEMMA-4-HACKATHON`: deployed full-stack Applied AI system with explicit clinical-use boundary.
- `Projet-IA-GEN`: tested human-in-the-loop data-preparation agent.
- `Credit-Risk-Modelling`: reproducible pipeline, shown with an explicit single-holdout limitation.

## Defer publication or featuring

- Financial time series: package data retrieval, provenance, environment locking, and rolling-origin validation first.
- Audio clustering: replace the notebook-only/empty-repository presentation with a small package, report, and reproducible embeddings.
- Job-search automation: remove scraping and credential risk, document platform constraints, and add a legal/privacy review before considering publication.
- ECG and reinforcement learning: keep their existing repositories available, but do not feature them until validation claims, tests, and project documentation are tightened.

No confidential client, banking, or private hackathon code belongs in the public publication queue.

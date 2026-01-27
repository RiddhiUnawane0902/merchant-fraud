# Fraud Detection 

This project provides a FastAPI-based backend service for detecting fraudulent financial transactions using a machine learning model.

---
## Approach Overview
The project follows an end-to-end machine learning pipeline including data generation, feature engineering, model training, evaluation, and deployment readiness.

## Data Generation
Synthetic transaction data was generated to simulate real-world fraud scenarios due to the unavailability of real banking data.

## Feature Engineering
Features were selected based on common fraud indicators such as transaction amount, time, location changes, and device usage.


---
## Fraud Patterns Used
- High-value transactions
- Late-night transactions
- New transaction locations
- Shared device usage

##  Tech Stack
- **Programming Language:** Python 3.11
- **Framework:** FastAPI
- **ML Model:** XGBoost
- **Libraries:** pandas, scikit-learn, xgboost
- **Server:** Uvicorn

---
## Model Training & Evaluation
The model was trained as a binary classifier and evaluated using accuracy, precision, recall, and F1-score.


## 📘 API Documentation

This backend exposes auto-generated API documentation using OpenAPI.

- Swagger UI: http://127.0.0.1:8000/docs
- OpenAPI JSON: http://127.0.0.1:8000/openapi.json

The `/predict` endpoint accepts transaction details and returns a fraud prediction.

## Results Summary

### Key Findings
- Transaction amount and device usage are strong fraud indicators.

### Limitations
- Model trained on synthetic data
- Limited feature set

### Future Improvements
- Use real anonymized data
- Add behavioral features
- Improve explainability using SHAP

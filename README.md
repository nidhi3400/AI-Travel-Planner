# ✈️ AI-Powered Travel Planner

An AI-powered travel planning platform that generates personalized day-wise travel itineraries based on a user's budget, trip duration, destination preferences, and interests. The application leverages Large Language Models (LLMs) to generate structured travel recommendations, estimated trip costs, and detailed activity plans while providing persistent trip management through a modern full-stack architecture.

## 🚀 Features
- 🤖 **AI-Powered Itinerary Generation**
  - Generate personalized travel itineraries using Groq-hosted Llama 3.3 70B.
  - Support both AI-recommended destinations and user-selected destinations.
  - Create detailed day-wise activity plans.
  - Generate estimated trip costs.
  - Enforce structured JSON-based AI outputs for reliable processing.

## 🎨 Frontend
- Built with React, TypeScript, and Vite.
- Responsive dashboard-style layout.
- Reusable itinerary accordion component.
- Trip history management.
- Light/Dark theme support.
- Loading and error states.
- Form state persistence during navigation.
- Duplicate-trip feedback.

## ⚙️ Backend
- Node.js + Express REST APIs.
- TypeScript-based architecture.
- Prompt engineering and AI orchestration layer.
- Response validation and sanitization.
- Duplicate-trip detection using deterministic search keys.
- Centralized error handling.

## 🗄️ Database
- PostgreSQL database.
- Neon cloud-hosted PostgreSQL.
- Prisma ORM.
- Persistent trip storage and retrieval.
- Migration-based schema management.

## 🛠️ Tech Stack
- Frontend : React, TypeScript, Vite, Axios
- Backend : Node.js, Express, TypeScript, Prisma ORM
- AI : Groq API, Llama 3.3 70B
- Database : PostgreSQL, Neon
- Infrastructure : Vercel, Render

## 💡 AI Workflow

- User submits travel preferences.
- Backend constructs a structured prompt.
- Prompt is sent to Groq-hosted Llama 3.3 70B.
- Model returns itinerary in JSON format.
- Response is validated and sanitized.
- Trip is stored in PostgreSQL.
- Generated itinerary is displayed in the UI.
- Duplicate requests are detected and prevented.

## 🎯 Key Engineering Highlights

- Prompt engineering for structured itinerary generation.
- Reliable JSON output enforcement from LLM responses.
- AI response validation before persistence.
- Duplicate-trip prevention.
- State persistence during navigation.
- Reusable component architecture.
- Full-stack TypeScript implementation.
- Production deployment across multiple cloud platforms.

## 🔮 Future Enhancements

- Google Maps integration.
- Flight and hotel recommendations.
- Budget optimization.
- Multi-city trip planning.
- Travel companion recommendations.
- Export itinerary as PDF.
- Shareable trip links.

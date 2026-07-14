# AI-First CRM HCP Module

An AI-powered Customer Relationship Management (CRM) application for Healthcare Professionals (HCPs) that enables pharmaceutical sales representatives to log, edit, summarize, and retrieve interaction details using natural language. The application leverages **LangGraph**, **Groq LLM**, **FastAPI**, **React**, **Redux**, and **MySQL** to provide an AI-first conversational CRM experience.

---

## Project Overview

The application allows users to manage HCP interactions through either a conversational AI interface or a structured form.

The AI agent understands natural language, extracts structured information, stores it in a MySQL database, retrieves historical interactions, edits existing records, generates concise summaries, and recommends the next best action for follow-up.

---

## Tech Stack

### Frontend
- React
- Redux Toolkit
- Material UI

### Backend
- FastAPI
- LangGraph
- Groq LLM (`llama-3.3-70b-versatile`)
- Python

### Database
- MySQL

---

# System Architecture

```
                    React Frontend
                           │
                           ▼
                    Redux State Store
                           │
                           ▼
                     FastAPI Backend
                           │
                           ▼
                   LangGraph AI Agent
                           │
     ┌─────────────┬──────────────┬─────────────┐
     ▼             ▼              ▼             ▼
 Log Tool      Edit Tool     History Tool   Summary Tool
                           │
                           ▼
                    Next Action Tool
                           │
                           ▼
                       Groq LLM
                           │
                           ▼
                     MySQL Database
```

---

# Features

### Log Interaction
- Extracts structured interaction details from conversational text.
- Stores interaction information in MySQL.
- Automatically populates the interaction form.

Example:

> Today I met Dr. John at Apollo Hospital. We discussed Prodo-X and shared a brochure.

---

### Edit Interaction

Users can update previously logged interactions using natural language.

Example:

> Sorry, doctor's name is Dr. Brown.

The latest interaction is updated both in the UI and the database.

---

### Interaction History

Retrieve previous interactions from the MySQL database.

Examples:

- Show previous interactions
- Show history of Dr. Brown

---

### AI Summary

Generates a concise professional summary of an HCP interaction.

---

### Next Best Action

Provides AI-powered recommendations for future engagement with Healthcare Professionals.

---

# LangGraph Tools

The application uses five LangGraph tools:

| Tool | Description |
|------|-------------|
| Log Interaction | Extracts structured data and stores it in MySQL |
| Edit Interaction | Updates previously logged interactions |
| History Tool | Retrieves historical interaction records |
| Summary Tool | Generates concise interaction summaries |
| Next Best Action | Suggests intelligent follow-up actions |

---

# Database Schema

Database Name:

```
ai_crm
```

Table:

```
interactions
```

Fields:

- doctor_name
- hospital
- interaction_type
- interaction_date
- interaction_time
- attendees
- topics
- materials
- follow_up
- summary
- created_at

---

# Project Structure

```
AI-First-CRM-HCP
│
├── backend
│   ├── app
│   │   ├── database.py
│   │   ├── graph.py
│   │   ├── llm.py
│   │   ├── main.py
│   │   ├── prompts.py
│   │   └── tools.py
│   │
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   └── App.js
│   │
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Vedagna999/AI-First-CRM-HCP.git

cd AI-First-CRM-HCP
```

---

## Backend Setup

```bash
cd backend

python -m venv venv
```

Activate Virtual Environment

Windows

```bash
venv\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Backend

```bash
uvicorn app.main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend runs on

```
http://localhost:3000
```

---

# Environment Variables

Create a `.env` file inside the backend directory.

```
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# Key Learnings

Through this project I learned:

- Building AI-powered CRM workflows
- LangGraph agent orchestration
- LLM tool calling
- FastAPI backend development
- React state management using Redux
- MySQL database integration
- Natural language information extraction
- Conversational editing of structured data

---

# Future Improvements

- User authentication
- Multi-user support
- Doctor profile management
- Dashboard analytics
- Follow-up reminders
- Email notifications
- Voice-based interaction logging

---

# Author

**Vedagna R**

GitHub: https://github.com/Vedagna999

---

# Acknowledgements

This project was developed as part of the **AI-First CRM HCP Module** technical assignment demonstrating the integration of React, FastAPI, LangGraph, Groq LLM, and MySQL to build an AI-powered Healthcare CRM system.

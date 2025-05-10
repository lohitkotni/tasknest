# 📚 TaskNest

TaskNest is a full-stack task management application built with:

- ⚛️ React (frontend)
- 🎯 Spring Boot (backend)
- 🐘 PostgreSQL (database)
- 🐳 Docker & Docker Compose
- ☁️ AWS (EC2, RDS)

---


## 🚀 Features

- Create, view, and manage tasks
- Mark tasks as **To Do**, **In Progress**, or **Done**
- Responsive UI with TailwindCSS
- Persistent storage using PostgreSQL
- Fully Dockerized for local or cloud deployment
- Deployed on AWS (EC2 + RDS)

---

## 🧱 Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | React, TailwindCSS   |
| Backend      | Spring Boot (Java 21)|
| Database     | PostgreSQL           |
| DevOps       | Docker, Docker Compose |
| Hosting      | AWS EC2, RDS         |

---

## 🛠️ Local Development Setup

### 📦 Prerequisites

- Node.js
- Java 21 (or higher)
- Docker + Docker Compose
- Git

### 🐳 Run With Docker

```bash
# Clone the repo
git clone https://github.com/yourusername/tasknest.git
cd tasknest

# Start the app
docker-compose up --build
open https://localhost:3000 in any browser

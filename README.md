# 🧩 Todo App — Full Stack (Spring Boot + React + PostgreSQL) with DevOps

A complete real-time full stack project designed to **master modern DevOps and full stack development** — from local build to Kubernetes deployment with CI/CD, monitoring, and best practices.

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React (Node 20 + Nginx) |
| Backend | Java 21 (Spring Boot) |
| Database | PostgreSQL 15 |
| DevOps | Docker, Kubernetes, Helm, Jenkins, SonarQube, Nexus, Prometheus, Grafana |

---

## ⚙️ Prerequisites

Ensure you have these installed on your Windows machine:

- ✅ **Java 21 (JDK)**  
- ✅ **Maven**  
- ✅ **Node.js (>=18) & npm**  
- ✅ **Docker Desktop (with Kubernetes enabled)**  
- ✅ **kubectl** & **Helm**
- ✅ **VS Code**  
- ✅ **Git & GitHub account**  

---

## 🧑‍💻 Local Development

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/todo-app.git
cd todo-app

2️⃣ Backend Setup
cd backend
mvn clean package -DskipTests

Run locally:

java -jar target/todo-backend-1.0.0.jar

Access backend API:
👉 http://localhost:8080/api/todos

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run build
npm start


Access frontend UI:
👉 http://localhost:3000

🐳 Dockerized Environment
Build & Run
docker-compose up --build


This will start:

🧠 todo-backend (Spring Boot)

💅 todo-frontend (React + Nginx)

🗄️ postgres (Database)

Access:

Frontend → http://localhost:3000

API → http://localhost:8080/api/todos

PostgreSQL → localhost:5432

🔄 CI/CD (Jenkins Pipeline)
Jenkinsfile Overview

Stages include:

Checkout Code from GitHub

Build & Test Spring Boot backend

Static Analysis with SonarQube

Build Docker Images (frontend & backend)

Push to DockerHub or private registry

Deploy to Kubernetes via Helm

🔍 Code Quality — SonarQube

Run SonarQube locally:

docker run -d --name sonarqube -p 9000:9000 sonarqube:latest


Run scan:

cd backend
mvn sonar:sonar -Dsonar.projectKey=todo-app \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=<token>

📦 Artifact Repository — Nexus

Start Nexus locally:

docker run -d -p 8081:8081 --name nexus sonatype/nexus3


Publish Maven artifacts or host Docker images there as part of your CI/CD pipeline.

☸️ Kubernetes Deployment (Helm)
1️⃣ Enable Kubernetes in Docker Desktop

Go to Docker Desktop → Settings → Kubernetes → Enable

2️⃣ Verify
kubectl get nodes

3️⃣ Deploy
helm upgrade --install todo-release k8s/todo-chart --namespace todo --create-namespace

4️⃣ Access

Edit your hosts file:

# Windows: C:\Windows\System32\drivers\etc\hosts
127.0.0.1 todo.local


Then visit:
👉 http://todo.local

📈 Monitoring (Prometheus + Grafana)
Deploy Monitoring Stack
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace


Access:

Prometheus → http://localhost:9090

Grafana → http://localhost:3001
 (user: admin / pass: admin)

The backend exposes metrics on /actuator/prometheus.
The Helm chart already configures a ServiceMonitor for Prometheus Operator.

⚙️ Autoscaling

Enable Kubernetes HPA:

kubectl autoscale deployment todo-release-todo-chart-backend --cpu-percent=70 --min=2 --max=5 -n todo

🧩 Helm Values Override Example

You can override values dynamically:

helm upgrade --install todo-release k8s/todo-chart \
  --set image.backend.repository=<your-dockerhub-username>/todo-backend \
  --set image.frontend.repository=<your-dockerhub-username>/todo-frontend \
  --set image.backend.tag=1.0.0 \
  --set image.frontend.tag=1.0.0 \
  --namespace todo --create-namespace

💡 Troubleshooting
Issue	Fix
Backend container exits immediately	Ensure target/todo-backend-1.0.0.jar is built with spring-boot-maven-plugin
no main manifest attribute	Run mvn clean package spring-boot:repackage
Could not find index.html in React	Ensure npm run build was executed before Docker build
Ingress not reachable	Check kubectl get ingress -n todo and update hosts file
Prometheus doesn’t show metrics	Verify backend /actuator/prometheus is exposed and labeled correctly
🔒 Environment Variables
Service	Variable	Description
Backend	DB_HOST	PostgreSQL host
Backend	DB_PORT	PostgreSQL port (5432)
Backend	DB_USER	Database user
Backend	DB_PASSWORD	Database password
Backend	DB_NAME	Database name
Frontend	REACT_APP_API_URL	Base URL for backend API
🧰 Tools Integration Summary
Tool	Purpose
Git + GitHub	Version control
Jenkins	CI/CD automation
SonarQube	Code quality analysis
Nexus	Artifact & image repository
Docker	Containerization
Helm	Kubernetes package management
Prometheus & Grafana	Monitoring and visualization
🏁 Local Cleanup

To remove all containers and volumes:

docker-compose down -v
kubectl delete ns todo monitoring

🌟 Author

Your Name
Senior Full Stack Developer & DevOps Engineer
📧 your.email@example.com

🔗 LinkedIn

“This project demonstrates the full DevOps lifecycle — from local development to production-grade deployment.”


---

 
# Todo App (Spring Boot + React + PostgreSQL)

## Run locally with Docker Compose
```bash
mvn -f backend clean package -DskipTests
docker-compose up --build


Frontend: http://localhost:3000

Backend API: http://localhost:8080/api/todos

Postgres: localhost:5432


---

✅ Copy this `todo-app/` structure into your system, then run:

```powershell
mvn -f backend clean package -DskipTests
docker-compose up --build

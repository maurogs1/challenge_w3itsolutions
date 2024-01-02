FROM node:18-alpine

WORKDIR /app/backend

COPY backend .

RUN npm install

ENV db_username root
ENV db_password root
ENV db_name dev_db


# Exponer puerto
EXPOSE 8080

# Comando para iniciar el servidor backend
CMD ["sh", "-c", " npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && npm start"]
  
# Utiliza una imagen base de Node
FROM node:18-alpine

# Establece el directorio de trabajo para el frontend
WORKDIR /app/frontend

# Copia todos los archivos necesarios para el frontend
COPY frontend .

# Instala dependencias
RUN npm install

# Exponer puerto
EXPOSE 4200

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "start"]

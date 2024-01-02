# Hola! Este proyecto es parte del desafío de W3 IT SOLUTIONS y contiene dos formas de levantar el proyecto:

1. [Levantar el proyecto con Docker en un entorno local](#levantar-con-docker)
2. [Levantar el proyecto en un entorno local sin Docker](#levantar-el-servidor-sin-docker-)

## Levantar con Docker 🐳 🐳 🐳


Este README proporciona instrucciones detalladas sobre cómo iniciar el servidor en un entorno local utilizando Docker.

❗❗ Por defecto el proyecto está configurado para ejecutar solo el punto <b> N° 1 y 4</b> si se quiere levantar con docker ❗❗

<b>Iniciar el servidor con Docker</b> <br>
🔨 Requisitos Previos <br>

➡️➡️ Asegúrate de tener Docker / Docker desktop instalado en tu máquina. Podés descargarlo <a href="https://www.docker.com/products/docker-desktop/" target="_blank"> aquí. </a>


1. 🔄 Clona el Repositorio

        git clone https://tu-repositorio.git
   <br>
       
        cd tu-repositorio

2. ⚙️ Configura las variables de Entorno <br>
    Crea un archivo  .env en la raíz de ./backend y establece las variables de entorno necesarias para la base de datos: <br>
    ❗ Aclaración ❗: El DB_HOST y DB_NAME debe tener el mismo nombre que posee el docker-compose.yml para mysql
   
        DB_USERNAME=root
        DB_PASSWORD=root
        DB_NAME=dev_db
        DB_HOST=docker_db

4. ⚙️ Configura el archivo ./backend/migrations/config/config.json
    
    Abre el archivo ./backend/migrations/config/config.json y agrega la configuración correspondiente (por defecto está puesto para la configuración de docker)
   
        {
          "development": {
            "username": "root",
            "password": "root",
            "database": "dev_db",
            "host": "docker_db",
            "dialect": "mysql"
          }
        }

5.  ▶️ Levanta los Servicios con Docker Compose <br>
    Estando en la raiz del proyecto, ejecutar el siguiente comando:
    
        docker-compose up 

    ⚠️Si el backend no puede levantar a la primera⚠️ (ejecutar primero backend para cargar los datos de migrations)
    
    ⚠️Si el backend_test no puede levantar a la primera⚠️
    
    ⚠️Si el frontend_test no puede levantar a la primera⚠️️

     Esperar a que levante primero 'docker_db' y volver a levantar por separado a "backend, backend_test y frontend_test", esto se debe a que el backend no puede conectarse a la base de datos mientras mysql aún está cargando. 😅😅
     Si se hace desde consola y no por docker desktop, se puede usar los siguientes comandos para levantar unicamente los que fallaron:

        docker-compose up  backend
        docker-compose up  test_backend
        docker-compose up  test_frontend




 
7. 🌐 Accede a la Aplicación
   
Accede a la aplicación frontend en http://localhost:4200 y al backend en http://localhost:8080.

Listo! El servidor debería estar funcionando ahora





## Levantar el Servidor sin Docker 🚀


 🔨 Requisitos Previos

   Nodejs
   
   Angular 16
   
   Mysql

1. 🔄 Clona el Repositorio

        git clone https://tu-repositorio.git
   <br>
       
        cd tu-repositorio

2. ⚙️ Configura las Variables de Entorno

Crea un archivo  .env en la raíz de ./backend y establece las variables de entorno necesarias para la base de datos:


        DB_USERNAME=root
        DB_PASSWORD=root
        DB_NAME=dev_db
        DB_HOST=localhost


3. ⚙️ Configura el archivo ./backend/migrations/config/config.json
    
    Abre el archivo ./backend/migrations/config/config.json y agrega la configuración correspondiente, ejemplo:
   
        {
          "development": {
            "username": "root",
            "password": "root",
            "database": "dev_db",
            "host": "localhost",
            "dialect": "mysql"
          }
        }

4. ▶️ Inicia el Servidor Backend 🚀🚀🚀

    Estando en la raíz del proyecto, ejecuta lo siguiente: 

            cd backend
        
            npm install
        
            cd migrations 
        
            npx sequelize-cli db:migrate
            npx sequelize-cli db:seed:all
        
            cd ..
        
            npm start
   Para ejecutar las pruebas unitarias

           npm run test

6. ▶️ Inicia la Aplicación Frontend 🚀🚀🚀

    Estando en la raíz del proyecto, ejecuta lo siguiente: 

            cd frontend
        
            npm install
            
            npm start
   
   Para ejecutar las pruebas unitarias:

           npm run test
   

7. 🌐 Accede a la Aplicación

Accede a la aplicación frontend en http://localhost:4200 y al backend en http://localhost:8080.

        

¡Listo! El servidor debería estar funcionando en tu entorno local!



## Tecnologías Utilizadas

- Backend: Nodejs Typescript express 
- Frontend: Angular Typescript Tailwindcss
- Base de Datos: Mysql
- Test: Jest




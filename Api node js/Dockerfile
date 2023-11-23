# Use an official Node.js runtime as a parent image
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Define el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación (usando nodemon)
CMD [ "npm", "run", "dev" ]
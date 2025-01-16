
# Usar una imagen base de Node.js
FROM node:18

# Crear y definir el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de tu proyecto al contenedor
COPY package*.json ./


# Instalar las dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto en el que la app correrá
EXPOSE 8080

# Comando para arrancar el servidor de Express
CMD ["npm", "start"]

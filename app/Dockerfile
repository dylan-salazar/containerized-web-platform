# 1. Imagen base ligera y oficial de Node.js en Linux Alpine
FROM node:20-alpine

# 2. Definir directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiar el código fuente de la app al contenedor
COPY index.js .

# 4. Exponer el puerto en el que escucha la aplicación
EXPOSE 3000

# 5. Definir variable de entorno por defecto
ENV NODE_ENV=production

# 6. Comando por defecto para iniciar la app
CMD ["node", "index.js"]

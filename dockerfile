#Especifica la version de node dada en los
#contenedores de docker hub
FROM node:18
# crea el directorio donde estara la aplicacion
# dentro del contenedor (que es linux)
RUN mkdir -p /home/app
# Copia todos los archivos del codigo fuente
# COPY <ruta-del-anfitrion> <ruta-del-cliente>
COPY . /home/app
# Puerto en el que sera accesible nuestro contenedor
# dentro del sistema operativo virtual (que es linux)
EXPOSE 3000
# Comandos que hay que ejecutar para correr la app
# se especifica el comando, y la ruta del archivo dentro
# de la maquina virtual
CMD ["node", "/home/app/index.js"]
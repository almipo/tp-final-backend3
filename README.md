# Proyecto Adoptame

## Descripción:
Este es un proyecto de adopción de mascotas utilizando Node.js, MongoDB y Docker.

## Endpoints de la API:
Se exponen los siguientes endpoints para interactuar con el sistema de adopciones:
- `GET /api/adoptions`: Obtiene todas las adopciones.
- `POST /api/adoptions/:uid/:pid`: Crea una nueva adopción.

## Docker:
Puedes correr el proyecto en Docker utilizando la imagen disponible en Docker Hub.
Enlace a Docker Hub: https://hub.docker.com/repository/docker/alan377/adoptame_imagen

## Comando para correr el contenedor:
```bash
docker run -d -p 8080:8080 alan377/adoptame_imagen 
```

## Documentación Swagger:
La documentación de la API está generada con Swagger y puede ser consultada al acceder al siguiente enlace:
- `http://localhost:8080/api-docs`

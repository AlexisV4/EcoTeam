# EcoTeam - Mapa de Puntos de Disposición y Recolección de Basuras y Reciclaje

**EcoTeam** es una aplicación web que permite a los usuarios visualizar un mapa interactivo con los puntos de disposición y recolección de basura y reciclaje en su área. La plataforma tiene como objetivo facilitar la gestión de residuos y promover el reciclaje, proporcionando información detallada sobre los puntos de recolección cercanos. Adicional permite registrar nuevos puntos o eliminar algunos ya existentes.

## Descripción

Este proyecto permite a los usuarios:

- Ver un mapa interactivo con puntos de recolección de basura y reciclaje.
- Filtrar puntos según categorías como "Basura", "Reciclaje", etc.
- Consultar detalles sobre cada punto (ubicación, horarios, tipo de residuos aceptados, etc.).
- Administrar los puntos de recolección desde una interfaz de administración.

La aplicación está compuesta por un frontend desarrollado en **Angular**, un backend con **Spring Boot**, y estilos personalizados usando **Tailwind CSS**.

## Tecnologías utilizadas

- **Frontend**:
  - Angular (para la construcción de la aplicación web y la integración con el mapa)
  - Tailwind CSS (para el diseño y estilo responsivo)
  
- **Backend**:
  - Spring Boot (para crear la API RESTful que gestiona los puntos de recolección)
  - JPA/Hibernate (para la persistencia de datos en la base de datos)

- **Base de datos**:
  - MySQL (para almacenar la información de los puntos de recolección)

- **Otras herramientas**:
  - Leaflet.js (para la integración del mapa interactivo)
  
## Instalación

Para correr el proyecto de manera local, sigue los siguientes pasos:

### Requisitos

- **Java 11+** (para el backend con Spring Boot)
- **Node.js** y **npm** (para el frontend con Angular)
- **MySQL** o **H2** (base de datos)

### Backend (Spring Boot)

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/eco-team-backend.git

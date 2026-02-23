# Actividad: Investigación, Implementación y Despliegue de una PWA
**Materia:** Desarrollo Web Profesional  
**Docente:** Mike Cardona (@mikecardona076)  
**Estudiante:** América Lara

## Parte 1: Investigación Teórica

### 1. Web App Manifest (`manifest.json`)
El manifiesto es un archivo JSON que indica al navegador cómo debe comportarse la aplicación al ser instalada en un dispositivo.
* **theme_color:** Especifica el color de la barra de herramientas y de estado del sistema operativo para que coincida con el diseño de la app.
* **background_color:** Define el color de fondo de la pantalla de carga (splash screen) que se muestra antes de que el CSS cargue completamente.
* **display:** Configurado en `standalone` para eliminar la interfaz del navegador, permitiendo que la app se sienta como una aplicación nativa.
* **Icons:** Un array de iconos esencial para que el sistema operativo genere el acceso directo en el escritorio con alta resolución.

### 2. Service Workers
Es un script que actúa como un **proxy de red**, interceptando peticiones entre la aplicación y el servidor.
* **Registro:** Se realiza en el hilo principal para habilitar sus capacidades.
* **Ciclo de Vida:** Incluye las etapas de **Installation** (almacenamiento de activos), **Activation** (limpieza de versiones antiguas) y **Fetching** (interceptación de peticiones).

### 3. Estrategias de Almacenamiento (Caching)
* **Stale-While-Revalidate:** Sirve contenido desde el caché mientras lo actualiza desde la red en segundo plano.
* **Cache First:** Prioriza el caché; ideal para archivos estáticos como imágenes o fuentes.
* **Network First:** Intenta obtener la versión más reciente de la red y usa el caché como respaldo.

### 4. Seguridad y TLS
* **HTTPS como requisito:** Los Service Workers requieren HTTPS para garantizar que el script no haya sido manipulado por terceros.
* **Impacto en "Install Prompt":** El navegador solo permite la instalación si el sitio cuenta con un certificado SSL válido.

## Parte 2: Implementación Técnica

### Desarrollo de la App
* **Stack:** Desarrollado con **React + Vite + TypeScript**.
* **Funcionalidad:** Aplicación de gestión de tareas con persistencia de datos.

### Contenerización (Docker)
Se utilizó una construcción multi-etapa:
1. **Etapa 1 (Build):** Compilación del proyecto utilizando `node:alpine`.
2. **Etapa 2 (Production):** Servido de archivos estáticos desde `/dist` mediante `nginx:stable-alpine`.

### Seguridad y SSL
* **Certificado:** Implementación de certificado SSL/TLS (Let's Encrypt / Certbot).
* **Redirección:** Configuración de Nginx para redirigir tráfico del puerto 80 al 443.

---
**URL del Proyecto:** [https://pwa-america-lara.duckdns.org](https://pwa-america-lara.duckdns.org)
EOF
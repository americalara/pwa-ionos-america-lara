# Actividad: Investigación, Implementación y Despliegue de una PWA
**Materia:** Desarrollo Web Profesional  
**Docente:** Mike Cardona (@mikecardona076)  
**Estudiante:** América Lara

## Parte 1: Investigación Teórica

### 1. Web App Manifest (`manifest.json`)
El manifiesto es un archivo JSON que indica al navegador cómo debe comportarse la aplicación al ser instalada en un dispositivo[cite: 11, 12].
* **theme_color:** Especifica el color de la barra de herramientas y de estado del sistema operativo para que coincida con el diseño de la app[cite: 12].
* **background_color:** Define el color de fondo de la pantalla de carga (splash screen) que se muestra antes de que el CSS cargue completamente[cite: 12].
* **display:** Configurado en `standalone` para eliminar la interfaz del navegador, permitiendo que la app se sienta como una aplicación nativa[cite: 12].
* **Icons:** Un array de iconos esencial para que el sistema operativo genere el acceso directo en el escritorio con alta resolución[cite: 12].

### 2. Service Workers
Es un script que actúa como un **proxy de red**, interceptando peticiones entre la aplicación y el servidor[cite: 13, 14].
* **Registro:** Se realiza en el hilo principal para habilitar sus capacidades[cite: 14].
* **Ciclo de Vida:** Incluye las etapas de **Installation** (almacenamiento de activos), **Activation** (limpieza de versiones antiguas) y **Fetching** (interceptación de peticiones)[cite: 14].

### 3. Estrategias de Almacenamiento (Caching)
* **Stale-While-Revalidate:** Sirve contenido desde el caché mientras lo actualiza desde la red en segundo plano[cite: 15, 16].
* **Cache First:** Prioriza el caché; ideal para archivos estáticos como imágenes o fuentes[cite: 16].
* **Network First:** Intenta obtener la versión más reciente de la red y usa el caché como respaldo[cite: 16].

### 4. Seguridad y TLS
* **HTTPS como requisito:** Los Service Workers requieren HTTPS para garantizar que el script no haya sido manipulado por terceros[cite: 17].
* **Impacto en "Install Prompt":** El navegador solo permite la instalación si el sitio cuenta con un certificado SSL válido[cite: 18, 31].

## Parte 2: Implementación Técnica

### Desarrollo de la App
* **Stack:** Desarrollado con **React + Vite + TypeScript**[cite: 22].
* **Funcionalidad:** Aplicación de gestión de tareas con persistencia de datos[cite: 23].

### Contenerización (Docker)
Se utilizó una construcción multi-etapa[cite: 27]:
1. **Etapa 1 (Build):** Compilación del proyecto utilizando `node:alpine`[cite: 28].
2. **Etapa 2 (Production):** Servido de archivos estáticos desde `/dist` mediante `nginx:stable-alpine`[cite: 29].

### Seguridad y SSL
* **Certificado:** Implementación de certificado SSL/TLS (Let's Encrypt / Certbot)[cite: 31, 32].
* **Redirección:** Configuración de Nginx para redirigir tráfico del puerto 80 al 443[cite: 33].

---
**URL del Proyecto:** [https://pwa-america-lara.duckdns.org](https://pwa-america-lara.duckdns.org)
EOF
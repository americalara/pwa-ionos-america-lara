# PWA Tareas - Implementación Profesional
**Estudiante:** América Lara  
**Docente:** Mike Cardona  

## Resumen del Proyecto
Esta es una PWA (Progressive Web App) desarrollada con **React + TypeScript + Vite**. El proyecto está contenerizado con **Docker** y desplegado en **AWS EC2**, utilizando **Nginx** como proxy inverso y **SSL (HTTPS)** para cumplir con los estándares de seguridad de las aplicaciones modernas.

---

## Cumplimiento de Criterios (Investigación)

### 1. Web App Manifest
Configurado para permitir la instalación nativa.
- **Icons:** Se incluyeron tamaños de 192px y 512px.
- **Display:** `standalone` para eliminar la interfaz del navegador.
- **Theme Color:** Ajustado para combinar con la paleta de colores (Rosa) de la interfaz.

### 2. Service Workers
Se implementó un Service Worker para:
- Interceptar peticiones de red.
- Permitir la carga de la aplicación en modo **Offline**.
- Gestionar el ciclo de vida (Install, Activate, Fetch).

### 3. Estrategias de Caching
Se utiliza la estrategia **Stale-While-Revalidate**:
- Carga el contenido desde el caché para velocidad instantánea.
- Actualiza el caché en segundo plano si hay conexión a internet.

### 4. Seguridad (SSL/TLS)
Cumpliendo con la rúbrica, el sitio cuenta con certificación de **Let's Encrypt**:
- **Redirección:** Todo el tráfico HTTP (puerto 80) se redirige automáticamente a HTTPS (puerto 443).
- **Importancia:** HTTPS es el requisito habilitador para que el Service Worker funcione por razones de seguridad.

---

## Infraestructura y Despliegue
- **Cloud:** AWS EC2 (Ubuntu).
- **Docker:** Construcción multi-etapa para optimizar el tamaño de la imagen final.
- **Proxy:** Nginx configurado en el Host para manejar el certificado SSL y pasar el tráfico al contenedor en el puerto 3000.

### Enlace al Proyecto:
[https://pwa-america-lara.duckdns.org](https://pwa-america-lara.duckdns.org)
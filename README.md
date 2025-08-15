# Teleprompter Web App

![PHP](https://img.shields.io/badge/PHP-8.2%2B-777BB4?style=for-the-badge&logo=php)
![Apache](https://img.shields.io/badge/Apache-2.4-D22128?style=for-the-badge&logo=Apache)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

Una aplicación web ligera y sin dependencias para guionizar y presentar textos en formato teleprompter. Ideal para creadores de contenido, presentadores y cualquiera que necesite una herramienta sencilla para grabar vídeos o realizar discursos.

## 🚀 Características Principales

- **Entrada de Guion Sencilla**: Pega tu texto directamente en la interfaz.
- **Navegación por Bloques**: Divide tu guion en bloques (usando dos saltos de línea) y navega con botones "Anterior" y "Siguiente".
- **Temporizador de Cuenta Regresiva**: Establece una duración en minutos para mantener el control de tu tiempo.
- **Modo Pantalla Completa**: Interfaz de presentación inmersiva y sin distracciones.
- **Procesamiento en el Cliente**: Toda la lógica se ejecuta en el navegador (JavaScript), lo que la hace rápida y no requiere base de datos.

## 🛠️ Stack Tecnológico

- **Backend**: PHP 8+ (para servir la aplicación inicial).
- **Frontend**: HTML5, CSS3, JavaScript (ES6+).
- **Entorno de Desarrollo Local**: Apache (se recomienda XAMPP).

## 📁 Estructura del Proyecto

El proyecto sigue una estructura simple inspirada en el patrón Modelo-Vista-Controlador (MVC) para mantener el código organizado y escalable.

```
/teleprompter/
│
├── public/                # Archivos de acceso público (CSS, JS)
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
│
├── app/                   # Núcleo de la aplicación
│   ├── controllers/
│   │   └── PageController.php
│   └── views/
│       ├── layouts/
│       │   ├── header.php
│       │   └── footer.php
│       ├── input.view.php
│       └── prompter.view.php
│
├── .htaccess              # Reglas de reescritura de URL para Apache
├── index.php              # Punto de entrada principal (Front Controller)
└── README.md              # Documentación del proyecto
```

## ⚙️ Guía de Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### **Pre-requisitos**
- Tener un servidor web local como **XAMPP** o **WAMP** instalado y en ejecución (con Apache y PHP).

### **Pasos**
1.  **Clona el repositorio** en tu máquina local:
    ```bash
    git clone [https://github.com/tu-usuario/teleprompter.git](https://github.com/tu-usuario/teleprompter.git)
    ```
2.  **Mueve la carpeta** del proyecto (`teleprompter`) al directorio `htdocs` de tu instalación de XAMPP.
    -   Ejemplo de ruta: `C:/xampp/htdocs/teleprompter`
3.  **Abre tu navegador web** y accede a la siguiente URL:
    ```
    http://localhost/teleprompter/
    ```
¡Y listo! La aplicación debería estar funcionando.

## 📝 Modo de Uso

1.  **Pega tu Guion**: Escribe o pega el texto completo en el área designada. Asegúrate de separar los bloques que deseas mostrar individualmente con **dos saltos de línea**.
2.  **Configura el Temporizador**: Introduce la duración total de tu presentación en minutos.
3.  **Inicia el Prompter**: Haz clic en el botón "Iniciar Prompter". La aplicación cambiará a modo de pantalla completa.
4.  **Navega**: Utiliza los botones "Anterior" y "Siguiente" en la parte inferior para moverte entre los bloques de tu guion.
5.  **Salir**: Haz clic en el botón "Salir" en la esquina superior derecha para volver a la pantalla de configuración.

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

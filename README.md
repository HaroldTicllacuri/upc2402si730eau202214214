# Eventify Aplicación Web

## Descripción
Eventify es una innovadora plataforma de gestión de eventos diseñada para revolucionar la planificación y ejecución de eventos. Esta aplicación web proporciona una interfaz fácil de usar para gestionar las inscripciones a eventos y el registro de asistentes, asegurando una experiencia fluida tanto para los organizadores de eventos como para los asistentes.

## Características
- **Diseño Responsivo**: Interfaz completamente responsiva que se adapta a diferentes tamaños de pantalla.
- **Soporte Multilingüe**: Interfaz disponible en inglés y español utilizando Vue-i18n para el cambio de idioma.
- **Registro de Eventos**: Muestra una cuadrícula de eventos registrados con detalles que incluyen nombre, descripción y estadísticas de asistencia.
- **Funcionalidad de Check-In**: Permite a los usuarios validar sus boletos y registrarse en eventos.
- **Manejo de Errores**: Proporciona retroalimentación para boletos inválidos o ya registrados.
- **Navegación**: Navegación suave en la aplicación con Vue Router, que soporta enrutamiento dinámico.

## Estructura del Proyecto
- **public**: Contiene activos estáticos como imágenes y favicon.
- **shared**: Componentes comunes utilizados en diferentes dominios.
- **registration**: Componentes relacionados con eventos y procesos de registro.
- **services**: Servicios de API para manejar la comunicación de datos con el backend.
- **models**: Modelos de datos utilizados en la aplicación.

## Autor
**Omar Harold Rivera Ticllacuri - u202214214**

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/HaroldTicllacuri/upc2402si730eau202214214.git
2. Navega al directorio del proyecto:
   ```bash
   cd upc2402si730eau202214214

3. Instale las dependencias:
   ```bash
   npm install
4.  Ejecutar:
   ```bash
   npm run dev

5. Navega al directorio del proyecto:
   ```bash
    cd server

6. Corre el json server:
    ```bash
    json-server --watch db.json
Y luego ingrese:
Index:
http://localhost:3000/

Endpoints:
http://localhost:3000/events
http://localhost:3000/attendees

Desde el Windows PowerShell o CMD
PDT: no se poruqe se malogro el bash al hacer el readme

# Prueba Técnica Semana

## Descripción del Proyecto

Esta aplicación es una plataforma interactiva desarrollada con **React** que permite a los usuarios explorar publicaciones, filtrar por etiquetas, ver detalles de publicaciones específicas y una lista de usuarios. La aplicación incluye autenticación mediante Google OAuth y un sistema de rutas protegido.

## Características Principales

- **Inicio de sesión con Google OAuth.**
- **Visualización de publicaciones** con filtrado por etiquetas.
- **Visualización de detalles** de publicaciones, incluyendo comentarios.
- **Listado de usuarios** con detalles básicos.
- **Rutas protegidas** para áreas específicas.
- **Interfaz responsiva** con diseño limpio y moderno.

## Flujo de Funcionamiento del Proyecto

### 1. Clonar el Repositorio

1. Abre la terminal o consola de comandos.
2. Ejecuta el siguiente comando para clonar el repositorio:
   ```bash
   git clone https://github.com/JeisonAlexanderHernandezReyes/Prueba-Tecnica-Semana.git
   ```
3. Navega al directorio clonado:
   ```bash
   cd Prueba-Tecnica-Semana
   ```
4. Instala las dependencias:
   ```bash
   npm install
   ```
5. Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:
   ```env
   REACT_APP_GOOGLE_CLIENT_ID=tu_google_client_id
   ```
6. Ejecuta la aplicación localmente:
   ```bash
   npm start
   ```

### 2. Flujo de Interacción del Usuario

- **Inicio de Sesión**: El usuario se autentica mediante Google.
- **Página Principal**: Visualización y filtrado de publicaciones por etiquetas.
- **Detalles de Publicaciones**: Vista detallada de cada publicación y sus comentarios.
- **Lista de Usuarios**: Accesible solo tras autenticarse.

### 3. Despliegue en GitHub Pages

El proyecto está desplegado en **GitHub Pages** y se puede acceder desde:
[https://jeisonalexanderhernandezreyes.github.io/Prueba-Tecnica-Semana/](https://jeisonalexanderhernandezreyes.github.io/Prueba-Tecnica-Semana/)

### 4. Función de Rutas

- **Públicas**:
  - `/`: Página principal.
  - `/post/:id`: Detalles de una publicación.
  - `/login`: Página de inicio de sesión.
- **Protegidas**:
  - `/users`: Lista de usuarios.

El acceso a rutas protegidas está gestionado por el componente `ProtectedRoute`.

## Servicios Importantes

### postService.js
- `fetchPosts(tag)`: Devuelve publicaciones filtradas por etiqueta.
- `fetchPostById(id)`: Obtiene detalles de una publicación específica.
- `fetchCommentsByPostId(id)`: Obtiene comentarios de una publicación.

### userService.js
- `fetchUsers()`: Obtiene una lista de usuarios.

## Tecnologías Utilizadas

- **React 18**
- **React Router DOM**
- **Axios**
- **Google OAuth**
- **Tailwind CSS**
- **GitHub Pages**
